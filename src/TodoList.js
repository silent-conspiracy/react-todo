import React from 'react';

class TodoList extends React.Component {
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
      <ol>
        {this.renderTodoList()}
      </ol>
    )
  }
}

export default TodoList;