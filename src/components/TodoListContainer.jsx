import { Outlet } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoStatus from "./TodoStatus";

export default function TodoListContainer() {
    return <center>
        <AddTodo />
        <TodoStatus />
        <Outlet />
    </center>
}