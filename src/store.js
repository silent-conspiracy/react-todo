import { createStore } from 'redux';

function reducer(state, action) {
  return {
    todoList: [
      "Buy Groceries", 
      "Buy Lunch",
      "Buy Dinner"
    ]
  }
}

const store = createStore(reducer);
export default store;
