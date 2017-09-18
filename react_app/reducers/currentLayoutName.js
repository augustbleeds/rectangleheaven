const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_LAYOUT': {
      const { switchName } = action.payload;
      return switchName;
    }
    default:
  }
  return state;
};
