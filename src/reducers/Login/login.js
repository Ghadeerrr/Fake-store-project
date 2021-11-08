const initialState = {
  loginDetails: [],
  userName: ''
};

const loginDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN":
      console.log(state.loginDetails);

      return {
        loginDetails: payload,
        userName: state.userName
      };
      case "SET_USERNAME":
      return {
        loginDetails: state.loginDetails,
        userName: payload
      };

    default:
      return state;
  }
};

export default loginDetails;

export const setLoginDetails = (loginDetails) => {
  return {
    type: "SET_LOGIN",
    payload: loginDetails,
  };
};

export const setUserName = (userName) => {
  console.log(userName);
  
  return {
    type: "SET_USERNAME",
    payload: userName,
  };
};
