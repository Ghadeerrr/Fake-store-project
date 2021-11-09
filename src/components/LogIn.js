import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoginDetails, setUserName, setId } from "../reducers/Login/login";
import "./components.css";
function LogIn() {
  const [userinfo, setUserinfo] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      loginDetails: state.loginDetails.loginDetails,
    };
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users?limit=3")
      .then(function (response) {
        console.log(response.data);
        const action = setLoginDetails(response.data);
        dispatch(action);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const usernameOrEmail = (e) => {
    setUserinfo(e.target.value);
  };
  const passwordValue = (e) => {
    setPassword(e.target.value);
  };
  const checkLogin = (e) => {
    e.preventDefault();
    if (userinfo.includes("@")) {
      const foundUser = state.loginDetails.find(
        (element) => element.email == userinfo
      );
      const foundPassword = state.loginDetails.find(
        (element) => element.password == password
      );
      if (foundUser && foundPassword) {
        console.log("user found");
        state.loginDetails.map((ele) => {
          if (ele.email == userinfo) {
            const action1 = setUserName(ele.username);
            dispatch(action1);
            const action2 = setId(ele.id);
            dispatch(action2);
            console.log("id is" + ele.id);
            navigate("/");
          }
        });
      } else {
        setToggle(true);
      }
    } else {
      const foundUser = state.loginDetails.find(
        (element) => element.username == userinfo
      );
      const foundPassword = state.loginDetails.find(
        (element) => element.password == password
      );
      if (foundUser && foundPassword) {
        console.log("user found");
        const action1 = setUserName(userinfo);
        dispatch(action1);
        state.loginDetails.map((ele) => {
          if (ele.username == userinfo) {
            const action2 = setId(ele.id);
            dispatch(action2);
          }
        });
        navigate("/");
      } else {
        setToggle(true);
      }
    }
  };

  return (
    <form>
      {toggle && (
        <label>
          <b>Username or email is wrong</b>
        </label>
      )}

      <h3>Sign In</h3>

      <div className="form-group">
        <label>
          <b>Username or email address</b>
        </label>
        <input
          type="text"
          onChange={usernameOrEmail}
          className="form-control"
          placeholder="Enter email or userName"
        />
      </div>
      <div className="form-group">
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          onChange={passwordValue}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        onClick={(e) => checkLogin(e)}
        className="btn btn-primary btn-block"
      >
        Login
      </button>

      {/* <label>
         <input/> Remember me</label> */}
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
      <p className="forgot-password text-right">
        You don't have an account ?<a href="/SignUp">Sign Up</a>
      </p>
    </form>
  );
}

export default LogIn;
