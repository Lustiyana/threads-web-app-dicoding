export const incrementCounter = () => async (dispatch) => {
  dispatch({
    type: "increment",
  });
};
