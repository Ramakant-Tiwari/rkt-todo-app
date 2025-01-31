import { useContext, useRef } from "react";
import { TodoListContext } from "../contexts/TodoListContextProvider";

export default function AddTodo() {
  const inputTask = useRef();
  const { addTodoTask } = useContext(TodoListContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newTodoItem = inputTask.current.value.trim(); // Trim leading/trailing whitespace

    if (newTodoItem) {
      addTodoTask(newTodoItem); // Add the new todo item
      inputTask.current.value = ""; // Clear the input field
    } else {
      alert("Please enter a task!"); // Handle empty input case
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input ref={inputTask} type="text" placeholder="Add your task..." />
        <button type="submit" className="submit">
          Add Task
        </button>
      </form>
    </section>
  );
}
