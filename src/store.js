import { createStore, combineReducers } from 'redux';
import { handleGame, tally } from './components/game/reducers';

const rootReducer = combineReducers({
  handleGame,
  tally
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;