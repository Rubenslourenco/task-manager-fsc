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
}

export default TaskController;