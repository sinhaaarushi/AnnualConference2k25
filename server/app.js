const express = require("express");
const morgan = require("morgan"); //a middleware that logs requests onto the console
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors"); //prevents cors blockage

app.use(
    cors({
        credentials: true,
        origin: process.env.NODE_ENV === "development" ? process.env.LOCALHOST : process.env.DEPLOYED,
    })
);

// read data from the body into req.body, max is 10kb.
app.use(express.json({limit: "10kb"})); //data from body shall be added to req

//to work with cookies
app.use(cookieParser());

//to print requests in log
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to " + process.env.COMPANY,
    });
});

app.get("/test", async (req, res, next) => {
    res.status(200).json({
        status: "success",
    });
});

//defining routers
// todo: routes here
const userRoutes = require("./routes/userRouters");
app.use("/user", userRoutes);

const taskRoutes = require("./routes/taskRouters");
app.use("/tasks", taskRoutes);

//for undefined routs
const AppError = require("./util/appError");
app.all("*", (req, res, next) => {
    next(
        new AppError(
            `Can't find ${req.originalUrl} on ${process.env.COMPANY} server!`,
            404
        )
    );
});

//in case of operational error this middleware function will be called to return relevant error message
const globalErrorController = require("./controllers/errorController");
app.use(globalErrorController);

module.exports = app;
