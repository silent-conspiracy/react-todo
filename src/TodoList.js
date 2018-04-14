import React from 'react';

class TodoList extends React.Component {

  renderTodoList() {
    let tmpList = [];
    for (let i=0; i<this.props.listItems.length; i++) {
      tmpList.push(<li>{this.props.listItems[i]}</li>);
    }
    return tmpList;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <ol>
          {this.renderTodoList()}
        </ol>
      </div>
    )
  }
}

export default TodoList;