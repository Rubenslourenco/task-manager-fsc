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

app.get("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await TaskModel.findById(taskId);
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
    }
})

app.post("/tasks", async (req, res) => {

    try {
        const newtask = new TaskModel(req.body);
        await newtask.save();
        res.status(201).send(newtask);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar tarefa" });    
    }
   
});

app.patch('/tasks/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;

        const taskTpUpdate = await TaskModel.findById(taskId)

        const allowedUpdates = ['isCompleted'];
        const requestedUpdates = Object.keys(taskData);

        for(const update of requestedUpdates) {
            if(allowedUpdates.includes(update)) {
                taskTpUpdate[update] = taskData[update];
        } else {
            return res.status(500).send({ error: 'Atualização inválida!' });
        }
    }

      await taskTpUpdate.save();
      return  res.status(200).send(taskTpUpdate);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const  id  = req.params.id;
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        res.status(200).send(deletedTask);
    } catch (error) {
        
        res.status(500).json({ error: "Erro ao deletar tarefa" });
    }
});

app.listen(3000);