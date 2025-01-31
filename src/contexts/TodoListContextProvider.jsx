import { createContext, useState, useEffect } from "react";

const TodoListContext = createContext({
  todoListTasks: [],
  activeTasks: [],
  completedTasks: [],
  addTodoTask: () => {},
  deleteTodoTask: () => {},
  markAsCompleted: () => {},
});

export default function TodoListContextProvider({ children }) {
  // Load initial data from localStorage
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todoListTasks");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todoListTasks, setTodoListTasks] = useState(getInitialTodos);

  // Update localStorage whenever `todoListTasks` changes
  useEffect(() => {
    localStorage.setItem("todoListTasks", JSON.stringify(todoListTasks));
  }, [todoListTasks]);

  const addTodoTask = (newTask) => {
    if (todoListTasks.some((task) => task.text === newTask)) {
      alert("Task already exists!");
      return;
    }
    const newTodo = { text: newTask, status: "active" };
    setTodoListTasks([...todoListTasks, newTodo]);
  };

  const deleteTodoTask = (taskToDelete) => {
    setTodoListTasks(
      todoListTasks.filter((task) => task.text !== taskToDelete.text)
    );
  };

  const markAsCompleted = (completedTask) => {
    setTodoListTasks(
      todoListTasks.map((task) =>
        task.text === completedTask.text
          ? { ...task, status: "completed" }
          : task
      )
    );
  };

  const activeTasks = todoListTasks.filter((task) => task.status === "active");
  const completedTasks = todoListTasks.filter(
    (task) => task.status === "completed"
  );

  return (
    <TodoListContext.Provider
      value={{
        todoListTasks,
        activeTasks,
        completedTasks,
        addTodoTask,
        deleteTodoTask,
        markAsCompleted,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export { TodoListContext };