import React from "react";
class SingleTodo extends React.Component {
  render() {
    const { text, completed, id } = this.props;
    return (
      <li id={id} className="">
        <div className="view">
          <input class="toggle" type="checkbox" />
          <label>{text}</label>
          <input type="text" class="edit-text" />
          <button class="destroy"></button>
        </div>
      </li>
    );
  }
}
