import React from "react";
class TodoFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"></span>
        <ul className="filters">
          <li>
            <a className="selected all">All</a>
          </li>
          <li>
            <a href="#/active" className="active">
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" className="completed">
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
export default TodoFooter;
