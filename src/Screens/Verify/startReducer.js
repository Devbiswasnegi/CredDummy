const initialState = {
  loginNo: '',
  otp: '',
  name: '',
  panNumber: '',
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGINNUMBER':
      return {...state, loginNo: action.payload};

    case 'OTP':
      return {...state, otp: action.payload};

    case 'NAME':
      return {...state, name: action.payload};

    case 'PAN_NUMBER':
      return {...state, panNumber: action.payload};

    default:
      return state;
  }
};
