import { useContext } from "react"
import { TodoListContext } from "../contexts/TodoListContextProvider"
import TaskShow from "../components/TaskShow";

export default function CompletedTasks() {
    const {completedTasks} = useContext(TodoListContext);
    return <ul>
        {completedTasks.map((task, index) => {
            return <TaskShow task={task} key={index} index={index} />
        })}
    </ul>
}