import { combineReducers } from "redux";
import todos from "./todos";
import changeTabs from "./changeTabs";

export default combineReducers({ allTodo: todos, tab: changeTabs });
