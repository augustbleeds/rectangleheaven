export default (data, id) => ({
  type: 'SAVE_LOCATION',
  payload: {
    data,
    id,
  },
});
