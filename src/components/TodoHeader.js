import React from "react";
import { connect } from "react-redux";
import actions from "./../redux/actions";
import { bindActionCreators } from "redux";
class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", allSelected: false };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleToggleAll = this.handleToggleAll.bind(this);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      let value = event.target.value.trim();
      if (value.length > 0) {
        this.props.actions.addTodo(value);
        event.target.value = "";
      }
    }
    this.setState({ text: event.target.value });
  }
  handleToggleAll(event) {
    this.props.actions.completeAll();
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <div className="header-todo">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onClick={this.handleToggleAll}
          />
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
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
