const { createStore } = require('redux');

function reducer(state = 0, { type }) {
  switch(type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT': 
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('initial store state', store.getState());

store.subscribe(() => {
  console.log('store is now', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
