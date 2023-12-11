export const incrementCounter = () => async (dispatch) => {
  dispatch({
    type: "increment",
  });
};

export const decrementCounter = () => async(dispatch)=>{
  dispatch({
    type: "decrement"
  })
}
