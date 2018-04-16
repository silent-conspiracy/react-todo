import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// Refer https://react-bootstrap.github.io/components/
import { connect } from 'react-redux';
import axios from 'axios';

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
        <h2>Current Todo List</h2>
        <button onClick={this.props.refreshFromServer}>
          Refresh from Server
        </button>
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

function mapStateToProps(state) {
  return { listItems: state.todoList };
}

function mapDispatchToProps(dispatch) {
  return { 
    refreshFromServer: function() {
      axios.get('http://localhost:3000/todos.json').then(function(response) {
        console.log(response);
        dispatch( { type: "REFRESH_FROM_SERVER", payload: response.data } );
      });
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);