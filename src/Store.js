import { createPortal } from 'react-dom'
import { createStore } from 'redux'
const reduce = Redux.combineReducers({
    products: () => {
        return ['a', 'b', 'c']
    }
});

const store = Redux.createStore(reduce);
const render = () => {
  const container = document.getElementById("App");
  const state = store.getStore();
    
};