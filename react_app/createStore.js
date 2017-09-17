import { createStore, combineReducers } from 'redux';
import currentLayout from './reducers/currentLayout';
import savedLayouts from './reducers/savedLayouts';

const reducer = combineReducers({
  rectangles: currentLayout,
  savedLayouts,
});

export default data => createStore(reducer, data);
