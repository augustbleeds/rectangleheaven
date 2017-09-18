export default (switchState, switchName) => ({
  type: 'SWITCH_LAYOUT',
  payload: {
    switchState,
    switchName,
  },
});
