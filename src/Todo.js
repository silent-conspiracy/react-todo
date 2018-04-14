import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        "Buy Groceries", 
        "Buy Lunch"
      ]
    }
  }

  render() {
    return (
      <div className="Todo-body">
        <input type="text" />
        <button>Add</button>
        <ol>
          <li>{this.state.todoList[0]}</li>
          <li>{this.state.todoList[1]}</li>
        </ol>
      </div>
    )
  }
}

export default Todo;