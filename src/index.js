import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const MenuList={name:"Pizza" ,price:"20$", image:"https://tse4.mm.bing.net/th?id=OIP.OIW9fG0-shrurAogM_eCWgHaHa&pid=Api&P=0&w=300&h=300"};
// const d = <div id="menu">
//   <img src={MenuList.image}></img>
//   <h4>{MenuList.name}</h4> 
//   <h4>{MenuList.price}</h4> 
// </div>

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* {d}  */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);
// ReactDOM.render(
//   d,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
