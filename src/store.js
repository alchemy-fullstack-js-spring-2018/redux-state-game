import { createStore, combineReducers } from 'redux';
import { selections } from './components/game/reducers';

const rootReducer = combineReducers({
  selections
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;