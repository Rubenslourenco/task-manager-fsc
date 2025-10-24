const TaskItem = ({task}) => {
    return (
     <div>
        <h1>{task.description}</h1>
        <p>{task.isCompleted ? "Completo" : " Não completo"}</p>
    </div>
      );
}
 
export default TaskItem;  