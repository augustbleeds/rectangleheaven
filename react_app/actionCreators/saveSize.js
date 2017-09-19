export default (id, height, width) => ({
  type: 'SAVE_SIZE',
  payload: {
    height,
    width,
    id,
  },
});
