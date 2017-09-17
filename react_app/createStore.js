import { createStore } from 'redux';
import currentLayout from './reducers/currentLayout';

export default data => createStore(currentLayout, data);
