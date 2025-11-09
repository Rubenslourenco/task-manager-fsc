import { useState } from 'react';
import {FaPlus} from 'react-icons/fa';
import axios from 'axios';

import './AddTask.scss';

import CustomButton from './CustomButton';
import  CustomInput  from './CustomInput';


const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("")

    const onChange = (e) => {
        setTask(e.target.value)
    }

    const handleTaskAdd =  async () => {
        try {
            if(task.length === 0) {
                return "Tarefa nao pode ser vazia";
                
            }
            await axios.post("http://localhost:3000/tasks", {
                description: task,
                isCompleted: false
            });
            await fetchTasks();
            setTask("");
        } catch (error) {
        
        }
    }

    return ( 
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa..." value={task} onChange={onChange} />
            <CustomButton><FaPlus size={14} onClick={handleTaskAdd} color='white'/></CustomButton>

        </div>
     );
}
 
export default AddTask