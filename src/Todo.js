import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        "Buy Groceries", 
        "Buy Lunch",
        "Buy Dinner"
      ]
    }
  }

  renderTodoList() {
    let tmpList = [];
    for (let i=0; i<this.state.todoList.length; i++) {
      tmpList.push(<li>{this.state.todoList[i]}</li>);
    }
    return tmpList;
  }

  render() {
    return (
      <div className="Todo-body">
        <input type="text" />
        <button>Add</button>
        <ol>
          {this.renderTodoList()}
        </ol>
      </div>
    )
  }
}

export default Todo;