let defaultState = {
  userData:[],
  editflag:false
  
}


export const getUserDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "User_Data":
      return {
        ...state,
        userData:action.payload
      };
     
    default:
      return state;
  }
};
