import React from "react";
class TodoHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <div class="header-todo">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all"></label>
          <input
            type="text"
            class="new-todo"
            placeholder="What needs to be done?"
          />
        </div>
      </header>
    );
  }
}
export default TodoHeader;
