import { useEffect, useState } from "react";
import axios from "axios";

import './Tasks.scss';

import TaskItem from "./TaskItem.jsx";

const Task = () => {
    
const [tasks, setTasks] = useState([]);

  
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/tasks")
      setTasks(data);
      
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    fetchTasks();
  }, []);

    return ( 
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
            <h3>Ultimas tarefas</h3>
                <div className="tasks-list">
                  {tasks.filter(task => task.isCompleted === false).map(lastTask =>  <TaskItem task={lastTask} />)}
                </div>

            </div>

            <div className="completed-tasks">
              <h3>Tarefas concluidas</h3>
                <div className="tasks-list">
                  {tasks.filter(task => task.isCompleted).map(lastTask => <TaskItem task={lastTask} />)}
                </div>
            </div>
        </div>
     );
}
 
export default Task;