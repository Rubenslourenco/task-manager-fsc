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

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

export default router;