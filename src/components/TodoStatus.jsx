import { NavLink } from "react-router-dom";

export default function TodoStatus() {
    return <ul className="status">
        <li><NavLink to="/v1/" >All Tasks</NavLink></li>
        <li><NavLink to="/v1/active" >Active Tasks </NavLink></li>
        <li><NavLink to="/v1/completed" >Completed Tasks</NavLink></li>
    </ul>
}