import React from "react";
import { connect } from "react-redux";
import actions from "./../redux/actions";
import SingleTodo from "./SingleTodo";
import { bindActionCreators } from "redux";
class TodoMain extends React.Component {
  render() {
    const { allTodo, tab } = this.props;
    console.log(allTodo);
    return (
      <main className="main">
        <ul className="todo-list">
          {allTodo &&
            allTodo
              .filter((todo) => {
                switch (tab) {
                  case "Active":
                    return !todo.completed;
                  case "Completed":
                    return todo.completed;
                  default:
                    return true;
                }
              })
              .map((todo) => {
                return (
                  <SingleTodo
                    text={todo.text}
                    id={todo.id}
                    completed={todo.completed}
                    key={todo.id}
                  />
                );
              })}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { allTodo, tab } = state;

  return { allTodo, tab };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
