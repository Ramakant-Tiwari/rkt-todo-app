import { useContext } from "react"
import { TodoListContext } from "../contexts/TodoListContextProvider"
import TaskShow from "../components/TaskShow";

export default function ActiveTasks() {
    const {activeTasks} = useContext(TodoListContext);
    return <ul>
        {activeTasks.map((task, index) => {
            return <TaskShow task={task} key={index} index={index} />
        })}
    </ul>
}