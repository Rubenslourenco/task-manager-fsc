import React, { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Task 1", isCompleted: false },
    { id: 2, description: "Task 2", isCompleted: false },
    { id: 3, description: "Task 3", isCompleted: false }
  ]);
    const handleCleanTasks = () => {
      setTasks([])
    }
    
  return (  
    <div>
          
        {tasks.map((task) => 
           <TaskItem key={task.id} task={task}/>
        )}
        <button onClick={handleCleanTasks}>Limpar Tarefas</button>
    </div>
  );
}
 
export default App;