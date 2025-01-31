import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContextProvider";

export default function TaskShow({ task, index }) {
  const { deleteTodoTask, markAsCompleted } = useContext(TodoListContext);

  const handleDelete = () => {
    deleteTodoTask(task);
  };

  const handleDone = () => {
    markAsCompleted(task);
  };

  return (
    <li className="task-card">
      <p>
        {index + 1}. {}
        {task.text}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleDone}>Done</button>
    </li>
  );
}
