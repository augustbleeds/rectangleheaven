export default ({ rectangles, layoutName }) => ({
  type: 'SAVE_LAYOUT',
  payload: {
    rectangles,
    layoutName,
  },
});
