import uuidv1 from 'uuid/v1';
import _ from 'lodash';
// State is an array of current Rectangles

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECTANGLE':
      return state.concat({ color: '#fff', x: 50, y: 50, height: 100, width: 100, id: uuidv1() });
    case 'SAVE_LOCATION': {
      const { data, id } = action.payload;
      const modifyIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState[modifyIndex] = Object.assign({}, newState[modifyIndex], { x: data.x, y: data.y });
      return newState;
    }
    case 'SAVE_SIZE': {
      const { id, height, width } = action.payload;
      const modifyIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState[modifyIndex] = Object.assign({}, newState[modifyIndex], { height, width });
      return newState;
    }
    case 'DELETE_RECTANGLE': {
      const { id } = action.payload;
      const deleteIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState.splice(deleteIndex, 1);
      return newState;
    }
    case 'DELETE_LAYOUT':
    case 'CLEAR_LAYOUT':
      return [];
    case 'SWITCH_LAYOUT': {
      const { switchState } = action.payload;
      return switchState;
    }
    case 'CHANGE_COLOR': {
      const { color, id } = action.payload;
      const modifyIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState[modifyIndex] = Object.assign({}, newState[modifyIndex], { color });
      return newState;
    }
    case 'COPY_RECTANGLE': {
      const { id } = action.payload;
      const copyIndex = _.findIndex(state, { id });
      const copyRectangle = Object.assign({}, state[copyIndex], { id: uuidv1() });
      const newState = state.concat(copyRectangle);
      return newState;
    }
    default:
      break;
  }
  return state;
};
