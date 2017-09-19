export default (id, color) => ({
  type: 'CHANGE_COLOR',
  payload: {
    color,
    id,
  },
});
