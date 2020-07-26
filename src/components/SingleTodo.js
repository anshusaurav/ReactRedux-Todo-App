import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import actions from "./../redux/actions";

class SingleTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false, newText: this.props.text };
    this.handleDblClick = this.handleDblClick.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  toggleTodo(event) {
    const target = event.target;
    const id = target.parentNode.parentNode.id;
    this.props.actions.completeTodo(id);
  }
  removeTodo(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.parentNode.parentNode.id;
    this.props.actions.deleteTodo(id);
  }
  handleDblClick(event) {
    event.preventDefault();
    this.setState({ editMode: true });
  }

  handleChange(event) {
    event.preventDefault();
    const { id } = this.props;
    const text = event.target.value;
    if (event.keyCode === 13) {
      this.props.actions.editTodo(id, text);
      this.setState({ editMode: false });
      this.setState({ newText: this.props.text });
    }
    this.setState({ newText: event.target.value });
  }
  handleOnChange(event) {
    event.preventDefault();
    this.setState({ newText: event.target.value });
  }
  render() {
    const { text, completed, id } = this.props;
    const { editMode, newText } = this.state;
    console.log("HERERER", this.props);
    return (
      <li id={id} className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.toggleTodo}
          />
          {editMode ? (
            <input
              type="text"
              className="edit-text"
              defaultValue={text}
              value={newText}
              onKeyUp={this.handleChange}
              onChange={this.handleOnChange}
            />
          ) : (
            <label onDoubleClick={this.handleDblClick}>{text}</label>
          )}

          <button className="destroy" onClick={this.removeTodo}></button>
        </div>
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  const { allTodo, tab } = state;
  return { allTodo, tab };
};
const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch.toString());
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);
