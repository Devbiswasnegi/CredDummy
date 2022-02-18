export const loginNumber = data => {
  // return ({
  //     type:"LOGINNUMBER",
  //     payload:data
  // })

  return (dispatch, getState) => {
    // const val=getState()
    //  console.log("dispatch",val)
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

const loginUserId=(id)=>{
  return{
    type:"LOGINUSERID",
    payload:id
  }
}
