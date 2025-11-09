import axios from 'axios';
import { AiFillDelete } from "react-icons/ai";

import './TaskItem.scss';


const TaskItem = ({task, fetchTasks}) => {

  const handleTaskDelete = async () => {
    try{
      await axios.delete(`http://localhost:3000/tasks/${task._id}`);
    }
    catch (error){
  }
}
    return (
     <div className="task-item-container">
       <div className="task-description">
          <label className={
            task.isCompleted ? "checkbox-container-completed" : "checkbox-container"
          }>
            {task.description}
            <input type="checkbox" defaultChecked={task.isCompleted} />
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
                   key={task.id}
                />
            </div>
    </div>
      );
}
 
export default TaskItem;  