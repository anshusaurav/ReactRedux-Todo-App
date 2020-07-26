import React, { createRef } from "react";

import { connect } from "react-redux";
import actions from "./../redux/actions";
// import {NavLink} from ''
import { bindActionCreators } from "redux";
class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
    this.applyActiveFilter = this.applyActiveFilter.bind(this);
    this.applyCompletedFilter = this.applyCompletedFilter.bind(this);
    this.applyAllFilter = this.applyAllFilter.bind(this);
    this.applyCleanUp = this.applyCleanUp.bind(this);
    this.countRef = createRef();
  }
  applyActiveFilter(event) {
    event.preventDefault();
    this.props.actions.switchActive();
  }
  applyCompletedFilter(event) {
    event.preventDefault();
    this.props.actions.switchCompleted();
  }
  applyAllFilter(event) {
    event.preventDefault();
    this.props.actions.switchAll();
  }
  applyCleanUp(event) {
    event.preventDefault();
    this.props.actions.clearCompleted();
  }
  render() {
    const { allTodo } = this.props;
    const numCount = allTodo.reduce((acc, todo) => {
      if (todo.completed) return acc;
      else return acc + 1;
    }, 0);
    return (
      <footer className="footer">
        <span className="todo-count">
          {numCount > 1 ? `${numCount} items left` : `${numCount} item left`}
        </span>
        <ul className="filters">
          <li>
            <a className="selected all" onClick={this.applyAllFilter}>
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              className="active"
              onClick={this.applyActiveFilter}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className="completed"
              onClick={this.applyCompletedFilter}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.applyCleanUp}>
          Clear completed
        </button>
      </footer>
    );
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);
