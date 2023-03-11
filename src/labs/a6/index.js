import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles"
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list"

function Assignment6() {
return (
    <div>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <TodoItem/>
        <TodoList/>
        <h1>Assignment 6</h1>
    </div>
);
}
export default Assignment6;