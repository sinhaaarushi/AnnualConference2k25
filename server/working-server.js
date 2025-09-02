const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors({
    credentials: true,
    origin: "http://localhost:3006"
}));
app.use(express.json({limit: "10kb"}));

// Basic routes
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to NGNDAI 2025"
    });
});

app.get("/test", (req, res) => {
    res.status(200).json({
        status: "success"
    });
});

// User routes
app.post("/user/signup", (req, res) => {
    res.status(200).json({ status: "success", message: "Signup endpoint" });
});

app.post("/user/login", (req, res) => {
    res.status(200).json({ status: "success", message: "Login endpoint" });
});

app.post("/user/logout", (req, res) => {
    res.status(200).json({ status: "success", message: "Logout endpoint" });
});

app.get("/user/isAdmin", (req, res) => {
    res.status(200).json({ status: "success", isAdmin: false });
});

app.post("/user/createTask", (req, res) => {
    res.status(200).json({ status: "success", message: "Create task endpoint" });
});

app.post("/user/deleteTask", (req, res) => {
    res.status(200).json({ status: "success", message: "Delete task endpoint" });
});

app.post("/user/test", (req, res) => {
    res.status(200).json({ status: "success" });
});

// Task routes
app.post("/tasks/getTasks", (req, res) => {
    res.status(200).json({ status: "success", message: "Get tasks endpoint" });
});

app.post("/tasks/updateTaskStatus", (req, res) => {
    res.status(200).json({ status: "success", message: "Update task status endpoint" });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Working server running on port ${port}`);
});
