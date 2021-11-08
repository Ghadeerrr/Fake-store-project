const initialState = {
  loginDetails: [],
};

const loginDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN":
      console.log(state.loginDetails);

      return {
        loginDetails: payload,
      };

    default:
      return state;
  }
};

export default loginDetails;

export const setLoginDetails = (loginDetails) => {
  console.log(loginDetails);
  return {
    type: "SET_LOGIN",
    payload: loginDetails,
  };
};
