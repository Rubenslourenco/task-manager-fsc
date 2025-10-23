import express from"express";

import TaskController from"../controller/task.controller.js";
import TaskModel from"../models/task.models.js";


const router = express.Router();


router.get("/", async (req, res) => {
   return new TaskController(req, res).getTasks();
});

router.get("/:id", async (req, res) => {
   return new TaskController(req, res).getTaskId();
});

router.post("/", async (req, res) => {
   return new TaskController(req, res).createTask();
   
});

router.patch('/:id', async (req, res) => {
    return new TaskController(req, res).updateTask();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

export default router;