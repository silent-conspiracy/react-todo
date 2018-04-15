import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// Refer https://react-bootstrap.github.io/components/

class TodoList extends React.Component {
  /*
  Lets try to implement this list-group UI
  https://getbootstrap.com/docs/4.0/components/list-group/
  */

  renderTodoList() {
    let tmpList = [];
    for (let i=0; i<this.props.listItems.length; i++) {
      tmpList.push(
        <ListGroupItem style={{textAlign:"left"}}>
          {this.props.listItems[i]}
        </ListGroupItem>
      );
    }
    return tmpList;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <ListGroup>
          {this.renderTodoList()}
        </ListGroup>
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