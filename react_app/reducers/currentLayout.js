const initialState = {
  existingLayout: false,
  rectangles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECTANGLE': {
      const newRectangles = state.rectangles.concat({ x: 200, y: 200, height: 50, width: 100 });
      return Object.assign({}, state, { rectangles: newRectangles });
    }
    default:
      break;
  }
  return state;
};
