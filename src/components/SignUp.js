import NavbarAll from "./NavbarAll";
import { useDispatch, useSelector } from "react-redux";
import { setLoginDetails } from "../reducers/Login/login";
function SignUp() {
  const state = useSelector((state) => {
    return {
      loginDetails: state.loginDetails.loginDetails,
    };
  });
  console.log(state.loginDetails);
  const dispatch = useDispatch();
  let firstName;
  let lastName;
  let userName;
  let email;
  let password;

  const changeFirstName = (e) => {
    firstName = e.target.value;
  };
  const changeLastName = (e) => {
    lastName = e.target.value;
  };
  const changeUserName = (e) => {
    userName = e.target.value;
  };
  const changeEmail = (e) => {
    email = e.target.value;
  };
  const changePassword = (e) => {
    password = e.target.value;
  };
  const Cheack = () => {
    let x = 0;
    let y = 0;
    for (let i = 0; i < state.loginDetails.length; i++) {
      if (state.loginDetails[i].email == email) {
        x = 1;
        alert("The email is taken");
        break;
      }
      if (state.loginDetails[i].username == userName) {
        y = 1;
        alert("The username is taken");
        break;
      }
    }
    if (x == 0 && y == 0) {
      let newUser = {
        email: email,
        username: userName,
        password: password,
        name: { firstname: firstName, lastname: lastName },
      };
      let arr = state.loginDetails.slice();
      console.log(arr);
      arr.push(newUser);
      console.log(arr);
      const action = setLoginDetails(arr);
      dispatch(action);
    }
  };

  return (
    <form>
      {" "}
      <NavbarAll />
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>first name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={changeFirstName}
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={changeLastName}
        />
      </div>
      <div className="form-group">
        <label>Email address </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={changeEmail}
        />
      </div>
      <div className="form-group">
        <label>User name </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          onChange={changeUserName}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={changePassword}
        />
      </div>
      <button
        onClick={Cheack}
        type="submit"
        className="btn btn-primary btn-block"
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered ? <a href="/login">Log in</a>
      </p>
    </form>
  );
}

export default SignUp;
