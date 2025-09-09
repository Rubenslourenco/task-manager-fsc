import express from "express";
import dotenv from "dotenv";

import connectToDatabase from "./src/database/mongoose.database.js";
import TaskModel from "./src/models/task.models.js";



dotenv.config();
const app = express();
app.use(express.json());

connectToDatabase();


app.get("/tasks", async (req, res) => {
    try {
        const tasks = await TaskModel.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
});

app.post("/tasks", async (req, res) => {

    try {
        const newtask = new TaskModel(req.body);
        await newtask.save();
        res.status(201).send(newtask);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar tarefa" });    
    }
   
});



app.listen(3000);