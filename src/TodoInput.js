import React from 'react';

class TodoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    }
    this.addTodoList = this.addTodoList.bind(this);
  }

  addTodoList() {
    let todo = this.refs._todoInput.value;
    this.setState({
      todoList: this.state.todoList.concat([todo])
    });
  }

  render() {
    return (
      <div>
        <input ref="_todoInput" type="text" />
        <button onClick={this.addTodoList}>Add</button>
      </div>
    )
  }
}

export default TodoInput;