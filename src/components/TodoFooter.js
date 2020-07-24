import React from "react";
class TodoFooter extends React.Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count"></span>
        <ul class="filters">
          <li>
            <a class="selected all">All</a>
          </li>
          <li>
            <a href="#/active" class="active">
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" class="completed">
              Completed
            </a>
          </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
