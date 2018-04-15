import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  componentDidMount() {
    this.refs._todoInput.value = "Add new todos here";
  }

  handleChange() {
    let todo = this.refs._todoInput.value;
    this.setState({
      inputValue: todo
    })
  }

  addTodoList() {
    this.props.addFunction(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
    this.refs._todoInput.value = "";
  }

  renderButton() {;
    if (this.state.inputValue) {
      return (<button onClick={this.addTodoList.bind(this)}>Add</button>);
    } else {
      return (<button disabled="true">Add</button>);
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
        <input ref="_todoInput" type="text" onChange={this.handleChange.bind(this)} />
        {this.renderButton()}
      </div>
    )
  }
}

export default TodoInput;