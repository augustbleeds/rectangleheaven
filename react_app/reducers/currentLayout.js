const initialState = {
  isExistingLayout: false,
  rectangles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECTANGLE': {
      const newRectangles = state.rectangles.concat({ x: 100, y: 100, height: 50, width: 100 });
      return Object.assign({}, state, { rectangles: newRectangles });
    }
    case 'SAVE_LOCATION': {
      const { data, index } = action.payload;
      const newRectangles = state.rectangles.slice();
      newRectangles[index] = Object.assign({}, newRectangles[index], { x: data.x, y: data.y });
      return Object.assign({}, state, { rectangles: newRectangles });
    }
    default:
      break;
  }
  return state;
};
