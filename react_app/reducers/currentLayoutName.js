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
    case 'SAVE_LAYOUT': {
      const { layoutName } = action.payload;
      return layoutName;
    }
    default:
  }
  return state;
};
