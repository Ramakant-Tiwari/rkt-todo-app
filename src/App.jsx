// App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import TodoListContextProvider from "./contexts/TodoListContextProvider";
import TodoList from "./components/TodoList";
import AllTasks from "./pages/AllTasks";
import ActiveTasks from "./pages/ActiveTasks";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<TodoList />}>
        <Route index element={<AllTasks />} />
        <Route path="active" element={<ActiveTasks />} />
        <Route path="completed" element={<CompletedTasks />} />
      </Route>
    )
  );

  return (
    <TodoListContextProvider>
      <RouterProvider router={router} />
    </TodoListContextProvider>
  );
}

export default App;
