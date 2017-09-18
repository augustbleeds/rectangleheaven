const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_LAYOUT': {
      const { switchName } = action.payload;
      return switchName;
    }
    case 'DELETE_LAYOUT': {
      return '';
    }
    default:
  }
  return state;
};
