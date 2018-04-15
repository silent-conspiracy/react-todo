import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  add(todo) {
    this.setState({
      todoList: this.state.todoList.concat([todo])
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <Switch>
          <Route exact path='/' render={ () => (
              <TodoList listItems={this.props.todoList}>
                <h2>Current Todo List</h2>
              </TodoList>
          )} />

          <Route path='/add' render={ () => (
              <TodoInput addFunction={this.add.bind(this)}>
                <h2>Add New Todo</h2>
              </TodoInput>
          )} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
