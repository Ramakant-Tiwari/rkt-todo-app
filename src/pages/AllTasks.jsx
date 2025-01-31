import { useContext } from "react"
import { TodoListContext } from "../contexts/TodoListContextProvider"
import TaskShow from "../components/TaskShow";

export default function AllTasks() {
    const {todoListTasks} = useContext(TodoListContext);
    return <ul>
        {todoListTasks.map((task, index) => {
            return <TaskShow task={task} key={index} index={index} />
        })}
    </ul>
}