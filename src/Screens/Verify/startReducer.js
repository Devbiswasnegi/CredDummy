const initialState={
    loginNo:"",
    otp:""
}

export const login=(state=initialState,action)=>{
switch(action.type){
    case "LOGINNUMBER":
        return {...state,loginNo:action.payload}

        case 'OTP':
        return {...state,otp:action.payload}

         default:
            return state;

}
}
