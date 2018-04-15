import React from 'react';
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
  listItems: PropTypes.array
}

TodoList.defaultProps = {
  listItems: []
}

export default TodoList;