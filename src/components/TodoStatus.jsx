import { NavLink } from "react-router-dom";

export default function TodoStatus() {
    return <ul className="status">
        <li><NavLink to="/" >All Tasks</NavLink></li>
        <li><NavLink to="/active" >Active Tasks </NavLink></li>
        <li><NavLink to="/completed" >Completed Tasks</NavLink></li>
    </ul>
}