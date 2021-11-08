import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setloginDetails } from "../reducers/Login/login";
import './components.css';
function LogIn() {
  const dispatch = useDispatch();

  useEffect(() => {

    axios.get('https://fakestoreapi.com/users?limit=3').then(function (response) {
      console.log(response.data);
      const action = setloginDetails(response.data);
      dispatch(action);
    }).catch(function (error) {
      console.error(error);
    });
  },[]);
    return(  
     <div>
      <label><b>Username or email address</b></label>
      <input />
      <label><b>Password</b></label>
      <input/>
      <button>Login</button>
      <label>
        <input/> Remember me</label>
      <div >
      <span>Forgot <a href="#">password?</a></span>
      </div>

    
   
     </div>
      
    
    );
   
  }
  
  export default LogIn;