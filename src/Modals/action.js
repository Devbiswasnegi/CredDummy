export const cardOne = data => {
    return({
        type: 'CARDONE',
              payload: data,
    })
//   return dispatch => {
//     dispatch({
//       type: 'CARDONE',
//       payload: data,
//     });
//   };
};

export const cardTwo = data => {
  return dispatch => {
    dispatch({
      type: 'CARDTWO',
      payload: data,
    });
  };
};

export const cardThree = data => {
  return dispatch => {
    dispatch({
      type: 'CARDTHREE',
      payload: data,
    });
  };
};
