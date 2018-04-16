import React from 'react';
import { connect } from 'react-redux';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  handleChange() {
    let todo = this.refs._todoInput.value;
    this.setState({
      inputValue: todo
    })
  }

  addTodoList() {
    this.props.addFunction(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
    this.refs._todoInput.value = "";
  }

  renderButton() {;
    if (this.state.inputValue) {
      return (<button onClick={this.addTodoList.bind(this)}>Add</button>);
    } else {
      return (<button disabled="true">Add</button>);
    }
  }

  render() {
    return (
      <div>
        <h2>Current Todo List</h2>
        <input ref="_todoInput" type="text" onChange={this.handleChange.bind(this)} />
        {this.renderButton()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFunction: function(todo) {
      dispatch( {type: "ADD_TODO", payload: todo} );
    }
  }
}

export default connect(undefined, mapDispatchToProps)(TodoInput);