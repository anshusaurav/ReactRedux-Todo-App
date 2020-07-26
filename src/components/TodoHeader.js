import React from "react";
import { connect } from "react-redux";
import actions from "./../redux/actions";
class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", allSelected: false };
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    console.log(event.keyCode);
    console.log(event.target.value);
    if (event.keyCode === 13) {
      let str = event.target.value.trim();
      if (str.length > 0) {
        //create new todo;
        //reset input field
        const value = str;
        this.props.dispatch(actions.addTodo(value));
        this.setState({ text: "" });
      }
    }
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <div className="header-todo">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all"></label>
          <input
            type="text"
            className="new-todo"
            defaultValue={this.state.text}
            name="text"
            placeholder="What needs to be done?"
            onKeyUp={this.handleKeyUp}
          />
        </div>
      </header>
    );
  }
}
export default connect()(TodoHeader);
