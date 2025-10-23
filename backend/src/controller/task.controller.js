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