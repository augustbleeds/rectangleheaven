import { createStore, combineReducers } from 'redux';
import currentLayout from './reducers/currentLayout';
import savedLayouts from './reducers/savedLayouts';
import currentLayoutName from './reducers/currentLayoutName';

const reducer = combineReducers({
  rectangles: currentLayout,
  savedLayouts,
  currentLayoutName,
});

export default data => createStore(reducer, data);
