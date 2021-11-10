const initialState = {
  loginDetails: [{id:1,email: "john@gmail.com",username: "johnd",password: "123",name: { firstname: "john", lastname: "doe" }},
    {id:2,email: "kevin@gmail.com",username: "kevinryan",password: "123",name: { firstname: "kevin", lastname: "ryan" }},
    {id:3,email: "morrison@gmail.com",username: "mor_2314",password: "123",name: { firstname: "david", lastname: "morrison" }}],
  userName: "",
  id: 0,
};

const loginDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN":
      console.log(state.loginDetails);

      return {
        loginDetails: payload,
        userName: state.userName,
        id: state.id,
      };
    case "SET_USERNAME":
      return {
        loginDetails: state.loginDetails,
        userName: payload,
        id: state.id,
      };
    case "SET_ID":
      console.log(state.id);
      return {
        loginDetails: state.loginDetails,
        userName: state.userName,
        id: payload,
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

export const setUserName = (userName) => {
  console.log(userName);

  return {
    type: "SET_USERNAME",
    payload: userName,
  };
};

export const setId = (id) => {
  console.log(id);

  return {
    type: "SET_ID",
    payload: id,
  };
};
