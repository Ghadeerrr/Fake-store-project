import { useSelector } from "react-redux";
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

  );
}

export default WishListEle;
