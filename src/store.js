import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: "TodoAppDB",
  storage
}

const store = createStore(persistReducer(persistConfig, reducer));
const persistor = persistStore(store);
export {store, persistor};
