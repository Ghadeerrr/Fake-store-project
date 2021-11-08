import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoginDetails,setUserName,setId } from "../reducers/Login/login";
import './components.css';
function LogIn() {
  const [userinfo,setUserinfo]=useState('');
  const [password,setPassword]=useState('');
  const [toggle,setToggle]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      loginDetails: state.loginDetails.loginDetails,
    };
  });

  useEffect(() => {

    axios.get('https://fakestoreapi.com/users?limit=3').then(function (response) {
      console.log(response.data);
      const action = setLoginDetails(response.data);
      dispatch(action);
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

  const usernameOrEmail=(e)=>{
    setUserinfo(e.target.value)
  }
  const passwordValue=(e)=>{
    setPassword(e.target.value)
  }
  const checkLogin=()=>{
    if(userinfo.includes('@')){
      const foundUser = state.loginDetails.find(element => element.email == userinfo);
      const foundPassword = state.loginDetails.find(element => element.password == password);
      if(foundUser && foundPassword){
        console.log("user found");
        state.loginDetails.map((ele)=>{if(ele.email == userinfo){
          const action1 = setUserName(ele.username);
          dispatch(action1);
          const action2 = setId(ele.id);
          dispatch(action2);
          console.log("id is"+ele.id);
          navigate("/");
        }})
      }
      else{
        setToggle(true)
      }
    }
    else{
      const foundUser = state.loginDetails.find((element) => element.username == userinfo);
      const foundPassword = state.loginDetails.find(element => element.password == password);
      if(foundUser && foundPassword){
        console.log("user found");
        const action1 = setUserName(userinfo);
          dispatch(action1);
        state.loginDetails.map((ele)=>{if(ele.username == userinfo){
          const action2 = setId(ele.id);
          dispatch(action2);
        }})
        navigate("/");
      }
      else{
        setToggle(true)
      }
    }
    
  }
  

    return(  
     <div>
       {toggle&&<label><b>Username or email is wrong</b></label>}
      <label><b>Username or email address</b></label>
      <input onChange={usernameOrEmail}/>
      <label><b>Password</b></label>
      <input onChange={passwordValue}/>
      <button onClick={checkLogin}>Login</button>
      {/* <label>
        <input/> Remember me</label> */}
      <div >
      <span>Forgot <a href="#">password?</a></span>
      </div>
    </div>
  );
}

export default LogIn;
