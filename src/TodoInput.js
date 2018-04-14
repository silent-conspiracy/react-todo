import React from 'react';

class TodoInput extends React.Component {

  addTodoList() {
    let todo = this.refs._todoInput.value;
    this.props.addFunction(todo);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <input ref="_todoInput" type="text" />
        <button onClick={this.addTodoList.bind(this)}>Add</button>
      </div>
    )
  }
}

export default TodoInput;