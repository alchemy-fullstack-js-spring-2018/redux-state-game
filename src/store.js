import { createStore, combineReducers } from 'redux';
import { guesses, word } from './components/game/reducers';

const rootReducer = combineReducers({
  guesses,
  word
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;