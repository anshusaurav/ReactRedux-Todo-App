import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters.js";
import "./index.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
    <div className='main'>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
      </div>
    </div>
  );
}
