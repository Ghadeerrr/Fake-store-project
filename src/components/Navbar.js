import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";


function Navbar() {
 
  // const {totalQuantities} = useSelector(state => state.CartReducer)

    return(  
      <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <NavLink to="/"><img src="https://th.bing.com/th/id/OIP.sp_QpmljUkDqW_bmdQdYiQHaHa?pid=ImgDet&rs=1" alt="logo"/></NavLink>
                    </div>
                    <div className="nav__right">
                        <NavLink to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
                               {/* <span>{totalQuantities}</span> */}
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    
    );
   
  }
  
  export default Navbar;