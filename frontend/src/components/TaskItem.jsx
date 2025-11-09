import axios from 'axios';
import { AiFillDelete } from "react-icons/ai";

import './TaskItem.scss';


const TaskItem = ({task, fetchTasks}) => {

  const handleTaskDelete = async () => {
    try{
      await axios.delete(`http://localhost:3000/tasks/${task._id}`);

      await fetchTasks();

      alert.success("Tarefa deletada com sucesso!");

    }
    catch (error){
      alert.error("Erro ao deletar tarefa.");
    }
  };

  const handleTaskCompleteChange = async (e) => {
    try {
      await axios.patch(`http://localhost:3000/tasks/${task._id}`, {
        isCompleted: e.target.checked,
      });
      await fetchTasks();
    } catch (error) {
      alert.error("Erro ao atualizar tarefa.");
    }
  };

  return (
    <div className="task-item-container">
       <div className="task-description">
          <label className={
            task.isCompleted ? "checkbox-container-completed" : "checkbox-container"
          }>
            {task.description}
            <input type="checkbox" defaultChecked={task.isCompleted}  onChange={(e) => handleTaskCompleteChange(e)} />
            <span className={
              task.isCompleted ? "checkmark completed" : "checkmark"
            }></span>            

          </label>
       </div>
       <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                   onClick={handleTaskDelete}
                />
            </div>
    </div>
      );
}
 
export default TaskItem;  