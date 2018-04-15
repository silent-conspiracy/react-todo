import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class TodoList extends React.Component {
  /*
  Lets try to implement this list-group UI
  https://getbootstrap.com/docs/4.0/components/list-group/
  */

  renderTodoList() {
    let tmpList = [];
    for (let i=0; i<this.props.listItems.length; i++) {
      tmpList.push(
        <button 
        className="list-group-item list-group-item-action"
        style={{textAlign:"left"}}>
          {this.props.listItems[i]}
        </button>
      );
    }
    return tmpList;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <div className="list-group">
          {this.renderTodoList()}
        </div>
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