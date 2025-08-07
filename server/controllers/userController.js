const User = require("../model/UserModel");
const catchAsync = require("../util/catchAsync");
const axios = require("axios");
const AppError = require("../util/appError");
const Task = require("../model/TaskModel");
const mongoose = require("mongoose");

exports.createTask = catchAsync(async (req, res, next) => {
    const user = {...req.user._doc};
    const {title, description, dueDate, assignedUserEmail, priority, type} = req.body;

    console.log(req.body);

    let task = undefined;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        if (type === 'assignToOther') {
            if (!user.isAdmin) {
                return next(new AppError("This user does not have permission to assign tasks.", 400));
            }

            const assignedUser = await User.findOne({email: assignedUserEmail}).session(session);
            if (!assignedUser) {
                return next(new AppError(`User ${assignedUserEmail} does not exist.`, 400));
            }

            task = await Task.create([{
                title, description, dueDate: new Date(dueDate), assignedUser: assignedUser._id, // Referencing the assigned user
                createdBy: user._id, // Referencing the admin who created the task
                priority
            }], {session});

            await Promise.all([User.findByIdAndUpdate(user._id, {$push: {assignedToOtherTasks: task[0]._id}}, {session}), User.findByIdAndUpdate(assignedUser._id, {$push: {assignedTasks: task[0]._id}}, {session})]);
        }

        if (type === 'personal') {
            task = await Task.create([{
                title, description, dueDate: new Date(dueDate), assignedUser: user._id, // Assigning the task to themselves
                createdBy: user._id, priority
            }], {session});

            await User.findByIdAndUpdate(user._id, {$push: {personalTasks: task[0]._id}}, {session});
        }

        // Commit the transaction
        await session.commitTransaction();
        await session.endSession();

        console.log(task);
        if (!!task) return next(new AppError("Task was not created. Please check all inputs!", 200));

        // Send a success response back to the client
        res.status(201).json({
            status: 'success', message: 'Task successfully created!', data: {task: task}
        });

    } catch (err) {
        await session.abortTransaction();
        await session.endSession();
        return next(err);
    }
});

exports.isAdmin = catchAsync(async (req, res, next) => {
    const user = {...req.user._doc};
    return res.status(200).json({
        status: 'success', isAdmin: !!user.isAdmin
    });
})

exports.deleteTask = catchAsync(async (req, res, next) => {
    const user = { ...req.user._doc };
    const { taskId } = req.body;

    // Start a session for the transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Find the task by ID
        const task = await Task.findById(taskId).session(session);
        if (!task) {
            return next(new AppError("Task not found.", 404));
        }

        // Ensure the user has permission to delete the task
        if (
            (task.assignedUser.toString() !== user._id.toString() &&
                task.createdBy.toString() !== user._id.toString()) ||
            (!user.isAdmin && task.assignedUser.toString() !== user._id.toString())
        ) {
            return next(new AppError("You do not have permission to delete this task.", 403));
        }

        // Remove the task from any user's assignedTasks or personalTasks array
        if (task.assignedUser.toString() === user._id.toString()) {
            await User.findByIdAndUpdate(user._id, { $pull: { assignedTasks: task._id } }, { session });
        } else {
            await User.findByIdAndUpdate(user._id, { $pull: { personalTasks: task._id } }, { session });
        }

        if (user.isAdmin) {
            await User.updateMany(
                { $or: [{ assignedTasks: task._id }, { assignedToOtherTasks: task._id }] },
                { $pull: { assignedTasks: task._id, assignedToOtherTasks: task._id } },
                { session }
            );
        }

        // Delete the task
        await Task.findByIdAndDelete(task._id, { session });

        // Commit the transaction
        await session.commitTransaction();
        session.endSession();

        // Send response back to the client
        res.status(200).json({
            status: 'success',
            message: 'Task successfully deleted!',
        });
    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        return next(err);
    }
});









