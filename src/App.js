import React from "react";
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
// import VisibilityFilters from './components/VisibilityFilters.js'
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
import "./index.css";

export default function TodoApp() {
  return (
    <React.Fragment>
      <div className="todoapp">
        <TodoHeader />
        <TodoMain />
        <TodoFooter />
      </div>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://twitter.com/anshusaurav">Anshu Saurabh</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </React.Fragment>
  );
}
