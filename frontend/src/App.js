import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/TaskItem";



const App = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, description: "Task 1", isCompleted: false },
    // { id: 2, description: "Task 2", isCompleted: false },
    // { id: 3, description: "Task 3", isCompleted: false }
  ]);

  
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
    <div>
          
        {tasks.map((task) => 
           <TaskItem key={task.id} task={task}/>
        )}
        <button >Limpar Tarefas</button>
    </div>
  );
}
 
export default App;