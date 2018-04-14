import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div className="Todo-body">
        <input type="text" />
        <button>Add</button>
        <ol>
          <li>Buy Groceries</li>
          <li>Buy Lunch</li>
        </ol>
      </div>
    )
  }
}

export default Todo;