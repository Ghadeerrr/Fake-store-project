// import the required components 
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import WishList from "./components/WishList";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
 
  return(  
    <BrowserRouter>
    <div>
    <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />  
    </Routes>
    </div>    
   </BrowserRouter>
  );
 
}

export default App;

