const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    const tasks = [{description: "Estudar React", isCompleted: false}];
    res.status(200).json(tasks);
});

app.listen(3000);