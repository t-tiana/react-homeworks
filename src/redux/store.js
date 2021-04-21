import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducer';

const store = createStore(root, composeWithDevTools());

store.subscribe(() => {
  localStorage['allTasks'] = JSON.stringify(store.getState().allTasks);
});

export default store;
