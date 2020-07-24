import { combineReducers } from "redux";
import todos from "./todos";
import changeTabs from "./visibilityFilter";

export default combineReducers({ allTodo: todos, tab: changeTabs });
