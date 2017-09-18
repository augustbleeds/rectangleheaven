const initialState = { };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_LAYOUT': {
      const { rectangles, layoutName } = action.payload;
      return Object.assign({}, state, { [layoutName]: rectangles });
    }
    default:
      break;
  }
  return state;
};
