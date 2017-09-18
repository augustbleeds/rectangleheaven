const initialState = { };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_LAYOUT': {
      const { rectangles, layoutName } = action.payload;
      return Object.assign({}, state, { [layoutName]: rectangles });
    }
    case 'DELETE_LAYOUT': {
      const { name } = action.payload;
      const modifyState = Object.assign({}, state);
      delete modifyState[name];
      return modifyState;
    }
    default:
      break;
  }
  return state;
};
