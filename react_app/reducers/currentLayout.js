import uuidv1 from 'uuid/v1';
import _ from 'lodash';
// State is an array of current Rectangles

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECTANGLE':
      return state.concat({ x: 100, y: 100, height: 50, width: 100, id: uuidv1() });
    case 'SAVE_LOCATION': {
      const { data, index } = action.payload;
      const newState = state.slice();
      newState[index] = Object.assign({}, newState[index], { x: data.x, y: data.y });
      return newState;
    }
    case 'DELETE_RECTANGLE': {
      const { id } = action.payload;
      const deleteIndex = _.findIndex(state, { id });
      const newState = state.slice();
      newState.splice(deleteIndex, 1);
      return newState;
    }
    default:
      break;
  }
  return state;
};
