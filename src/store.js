import { createStore, combineReducers } from 'redux';
import { guessed, word, wordBank, tally } from './components/game/reducers';

const rootReducer = combineReducers({
  guessed,
  word,
  wordBank,
  tally
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;