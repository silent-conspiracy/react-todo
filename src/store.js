import { createStore } from 'redux';

const initialState = {
  todoList: [
    "Buy Groceries", 
    "Buy Lunch",
    "Buy Dinner"
  ]
}

const ACTION_EXAMPLE = {
  type: "ADD_TODO",
  payload: "Some Todo string"
}

function reducer(state=initialState, action={}) {
  // Responding to actions
  if (action.type == "ADD_TODO") {
    return { todoList: state.todoList.concat([action.payload]) };
  }
  else {
    return state;
  }
}

const store = createStore(reducer);
export default store;
