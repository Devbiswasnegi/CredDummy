export const loginNumber = data => {
  // return ({
  //     type:"LOGINNUMBER",
  //     payload:data
  // })

  return (dispatch, getState) => {
    // console.log("dispatch",getState)
    dispatch({
      type: 'LOGINNUMBER',
      payload: data,
    });
  };
};

export const otp = data => {
  return {
    type: 'OTP',
    payload: data,
  };
};

export const nameEnter = data => {
  return {
    type: 'NAME',
    payload: data,
  };
};

export const panNumberEnter = data => {
  return {
    type: 'PAN_NUMBER',
    payload: data,
  };
};
