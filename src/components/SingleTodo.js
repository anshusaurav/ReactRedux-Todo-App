import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import actions from "./../redux/actions";

class SingleTodo extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  toggleTodo(event) {
    const target = event.target;
    const id = target.parentNode.parentNode.id;
    this.props.actions.completeTodo(id);
    // console.log(id);
  }
  removeTodo(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.parentNode.parentNode.id;
    this.props.actions.deleteTodo(id);
  }
  render() {
    const { text, completed, id } = this.props;
    console.log("HERERER", this.props);
    return (
      <li id={id} className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={completed}
            onClick={this.toggleTodo}
          />
          <label>{text}</label>
          <input type="text" className="edit-text" />
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
