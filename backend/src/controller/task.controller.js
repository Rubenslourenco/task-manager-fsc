import TaskModel from "../models/task.models.js";

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }


    async getTasks() {
          try {
        const tasks = await TaskModel.find({});
        this.res.status(200).json(tasks);
    } catch (error) {
        this.res.status(500).json({ error: "Erro ao buscar tarefas" });
        }
    }

    async getTaskId() {
        try {
            const taskId = this.req.params.id;
            const task = await TaskModel.findById(taskId);
            this.res.status(200).json(task);
        } catch (error) {
            this.res.status(500).json({ error: "Erro ao buscar tarefa" });
        }
    }

    async createTask() {
        try {
            const newtask = new TaskModel(this.req.body);
            await newtask.save();
            this.res.status(201).json(newtask);

        } catch (error) {
            this.res.status(500).json({ error: "Erro ao criar tarefa" });
        }
    }

    async updateTask() {
        try {
        const taskId = this.req.params.id;
        const taskData = this.req.body;

        const taskTpUpdate = await TaskModel.findById(taskId)

        const allowedUpdates = ['isCompleted'];
        const requestedUpdates = Object.keys(taskData);

        for(const update of requestedUpdates) { 
            if(allowedUpdates.includes(update)) {
                taskTpUpdate[update] = taskData[update];
        } else {
            return this.res.status(500).send({ error: 'Atualização inválida!' });
        }
    }

      await taskTpUpdate.save();
      return this.res.status(200).send(taskTpUpdate);
    } catch (error) {
        console.log(error);
        this.res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
    }

    async deleteTask() {
        try {
        const  id  = this.req.params.id;
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        this.res.status(200).send(deletedTask);
    } catch (error) {
        this.res.status(500).json({ error: "Erro ao deletar tarefa" });
    }
}
}
export default TaskController;