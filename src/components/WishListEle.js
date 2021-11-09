import { Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setWishList } from "../reducers/wishList/wishList";
import { useDispatch } from "react-redux";

function WishListEle({ele,index}){
    const state = useSelector((state) => {
    return {
        wishListUsers: state.wishList.wishListUsers,
        id: state.loginDetails.id,
      };
    });
    const dispatch = useDispatch();
    const deletEle=(e)=>{
        return e.id != ele.id;
    }
    const deleteWishList = () =>{
        console.log("ASDS");
        
        let arr = state.wishListUsers.slice();
        // console.log(arr[state.id-1].wishList);
        
        let newArr = arr[state.id-1].wishList.filter((e)=>deletEle(e))

        arr[state.id-1].wishList =newArr.slice();
        const action = setWishList(arr);
            dispatch(action);
            // console.log(state.wishListUsers);
            
    }
    return(
        <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ele.image} />
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Title>{ele.price + "$"}</Card.Title>
          <NavLink to={`/ProductDetails/${index}`} class="btn btn-outline-dark">
              Details
            </NavLink>
          </Card.Body>
          <button  onClick={()=>deleteWishList(ele)} >Delete from Wish List</button>
    </Card>
        </div>
    );
}
export default WishListEle;