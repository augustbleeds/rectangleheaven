import { createStore } from 'redux';
import currentLayoutReducer from './reducers/currentLayout';

export default data => createStore(currentLayoutReducer, data);
