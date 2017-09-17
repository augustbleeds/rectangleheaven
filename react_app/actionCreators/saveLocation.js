export default (data, index) => ({
  type: 'SAVE_LOCATION',
  payload: { data, index },
});
