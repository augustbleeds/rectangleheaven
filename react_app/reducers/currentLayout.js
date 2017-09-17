import uuidv1 from 'uuid/v1';
import _ from 'lodash';
// State is an array of current Rectangles

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECTANGLE':
      return state.concat({ x: 100, y: 100, height: 50, width: 100, id: uuidv1() });
    case 'SAVE_LOCATION': {
      const { data, id } = action.payload;
      const modifyIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState[modifyIndex] = Object.assign({}, newState[modifyIndex], { x: data.x, y: data.y });
      return newState;
    }
    case 'DELETE_RECTANGLE': {
      const { id } = action.payload;
      const deleteIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState.splice(deleteIndex, 1);
      return newState;
    }
    case 'CLEAR_LAYOUT':
      return [];
    case 'SWITCH_LAYOUT': {
      const { switchState } = action.payload;
      return switchState;
    }
    default:
      break;
  }
  return state;
};
