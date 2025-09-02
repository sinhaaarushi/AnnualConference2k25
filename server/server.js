// things related to server are here '>'
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: path.join(__dirname, "config.env")});

//defined in the beginning to catch uncaught exceptions asap
process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception 💥 Shutting down!...");
    console.log(err);
    process.exit(1);
});

const mongoose = require("mongoose");
const DB = process.env.DATABASE;

// Try to connect to MongoDB, but don't crash if it's not available
mongoose
    .connect(DB)
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.log("Warning: Could not connect to MongoDB. Some features may not work.");
        console.log("Error:", err.message);
    });

const app = require("./app");
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection 💥 Shutting down!...");
    console.log(err);
    process.exit(1);
});
