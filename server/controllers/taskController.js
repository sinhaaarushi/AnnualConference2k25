const User = require("../model/UserModel");
const catchAsync = require("../util/catchAsync");
const axios = require("axios");
const AppError = require("../util/appError");
const Task = require("../model/TaskModel");
const mongoose = require("mongoose");

exports.getTasks = catchAsync(async (req, res, next) => {
    const user = { ...req.user._doc };
    const {
        taskType = 'personal',
        page = 1,
        limit = 10,
        status,
        priority,
        assignedUserEmail
    } = req.query;

    const skip = (page - 1) * limit;

    let query = {};
    let tasks;

    // Determine the base query based on taskType
    if (taskType === 'personal') {
        query._id = { $in: user.personalTasks }; // Filter by user's personal tasks
    } else if (taskType === 'assigned') {
        query._id = { $in: user.assignedTasks }; // Filter by user's assigned tasks
    } else if (taskType === 'assignedToOthers') {
        if (!user.isAdmin) {
            return next(new AppError("You don't have permission to view assignedToOtherTasks.", 403));
        }
        query._id = { $in: user.assignedToOtherTasks }; // Admin viewing tasks assigned to others
    } else {
        return next(new AppError('Invalid task type!', 400));
    }

    // Additional filters based on query parameters
    if (status) query.status = status; // Apply status filter if provided
    if (priority) query.priority = priority; // Apply priority filter if provided

    // Filter by assigned user email, only applicable for admin or assigned tasks
    if (assignedUserEmail) {
        const assignedUser = await User.findOne({ email: assignedUserEmail });
        if (!assignedUser) {
            return res.status(200).json({
                status: 'success',
                results: 0,
                data: {
                    tasks: [],
                    currentPageNumber: parseInt(page),
                    maximumPages: 0 // No tasks to show
                }
            });
        }
        query.assignedUser = assignedUser._id; // Apply filter for assigned user
    }

    console.log(query);

    // Fetch total count of tasks based on the constructed query
    const totalTasks = await Task.countDocuments(query);

    // Fetch tasks based on the constructed query, with pagination and sorting
    tasks = await Task.find(query)
        .skip(skip)
        .limit(parseInt(limit))
        .sort({ dueDate: 1 }) // Sort tasks by dueDate in ascending order
        .populate('assignedUser', 'name email') // Populate assigned user info
        .populate('createdBy', 'name email'); // Populate creator info

    // Calculate the maximum number of pages based on the total tasks and limit
    const maximumPages = Math.ceil(totalTasks / limit);

    // Send response with paginated tasks and filter information
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks: tasks || [],
            currentPageNumber: parseInt(page),
            maximumPages: maximumPages,
            status: status || null, // Include the current status filter in the response
            priority: priority || null, // Include the current priority filter in the response
            taskType: taskType
        }
    });
});


exports.updateTaskStatus = catchAsync(async (req, res, next) => {
    const { taskId, newStatus } = req.body; // Extract task ID and new status from request body
    console.log(req.body)
    const user = { ...req.user._doc }; // Extract the user object from the request

    if (!taskId || !newStatus) {
        return next(new AppError('Task ID and new status are required!', 400));
    }

    // Find the task by the taskId
    const task = await Task.findById(taskId);

    if (!task) {
        return next(new AppError('Task not found!', 404));
    }

    // Check if the user is the owner of the task or the assigned user
    if (!user.personalTasks.includes(taskId) && !user.assignedTasks.includes(taskId)) {
        return next(new AppError('You are not authorized to change the status of this task!', 403));
    }

    // Status can only be changed by the assigned user
    if (task.assignedUser.toString() !== user._id.toString()) {
        return next(new AppError('Only the assigned user can change the status of the task!', 403));
    }

    // Update the status of the task
    task.status = newStatus;

    // Save the updated task
    await task.save();

    res.status(200).json({
        status: 'success',
        message: 'Task status updated successfully!',
        data: {
            task
        }
    });
});


