import express from "express";
import dotenv from "dotenv";

import connectToDatabase from "./src/database/mongoose.database.js";



dotenv.config();
const app = express();

connectToDatabase();


app.get("/", (req, res) => {
    const tasks = [{description: "Estudar React", isCompleted: false}];
    res.status(200).json(tasks);
});

app.listen(3000);