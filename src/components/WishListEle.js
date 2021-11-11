// import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { setWishList } from "../reducers/wishList/wishList";
import { useDispatch } from "react-redux";
import "./WishList.css";

function WishListEle({ ele, index }) {
  const state = useSelector((state) => {
    return {
      wishListUsers: state.wishList.wishListUsers,
      id: state.loginDetails.id,
    };
  });
  const dispatch = useDispatch();
  const deletEle = (e) => {
    return e.id != ele.id;
  };
  const deleteWishList = () => {
    let arr = state.wishListUsers.slice();

    let newArr = arr[state.id - 1].wishList.filter((e) => deletEle(e));

    arr[state.id - 1].wishList = newArr.slice();
    const action = setWishList(arr);
    dispatch(action);
  };
  return (
    // <div>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src={ele.image} />
    //     <Card.Body>
    //       <Card.Title>{ele.title}</Card.Title>
    //       <Card.Title>{ele.price + "$"}</Card.Title>
    //       <NavLink to={`/ProductDetails/${index}`} class="btn btn-outline-dark">
    //         Details
    //       </NavLink>
    //     </Card.Body>
    //     <button
    //       class="btn btn-outline-dark"
    //       onClick={() => deleteWishList(ele)}
    //     >
    //       Delete from Wish List
    //     </button>
    //   </Card>
    // </div>

    <div className="container">
      <div className="row justify-content-around">


         <div className=" my-5 py-4 Sh-card"  style={{width: "18rem"}}>
                <img className="card-img-top iamge-prodect " src={ele.image}  alt="image item"/>
                    <div className="card-body text-center">
                        <h4 className="card-title title-discription">{ele.title}</h4>
                        <p className="lead">{ele.price + "$"}</p>
                        <button
                class="btn btn-outline-dark"
                onClick={() => deleteWishList(ele)}
              >
                Delete from Wish List
              </button>
                     
                    </div>
          </div>

      </div>
     </div>

    // <div className="row">
    //   <div className="row">
    //     <div className="cart-item d-md-flex justify-content-between">
    //       <div className="px-20 my-50">
    //         <div className="cart-item-product-thumb">
    //           <img src={ele.image} />
    //         </div>
    //         <div className="cart-item-product-info">
    //           <h4 className="cart-item-product-title">{ele.title}</h4>
    //           <div className="text-lg text-body font-weight-medium pb-1">
    //             {ele.price + "$"}
    //             <br />
    //             <NavLink
    //               to={`/ProductDetails/${index}`}
    //               class="btn btn-outline-dark"
    //             >
    //               Details
    //             </NavLink>
    //           </div>
    //           <br />
    //           <button
    //             class="btn btn-outline-dark"
    //             onClick={() => deleteWishList(ele)}
    //           >
    //             Delete from Wish List
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default WishListEle;
