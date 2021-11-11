import { useParams } from "react-router";
import { Col, Row, Container, Card } from "react-bootstrap";
import StarRateIcon from "@material-ui/icons/StarRate";
import NavbarAll from "./NavbarAll";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useSelector,useDispatch } from "react-redux";
import { setCartUsers,setCartLength } from "../reducers/cart/cart";

function ProductDetails() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      cartUsers: state.Cart.cartUsers,
      id: state.loginDetails.id
    };
  });
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
console.log(products);
console.log(id);


  const addToCart =()=>{
    
    if(state.id == 0){
      alert("You have to log in to add to cart");
    }
    else{
      let arr = state.cartUsers.slice();
        for (let i = 0; i < arr.length; i++) {
          if(arr[i].id == state.id){
           if(arr[i].cart.length == 0){
            arr[i].cart.push(products[id]);
            console.log(arr);
            const action = setCartUsers(arr);
            dispatch(action);
            const action2 = setCartLength();
              dispatch(action2);
            break;
           }
           else{
             let eleExist=false;
             for (let j = 0; j < arr[i].cart.length; j++) {
              if(arr[i].cart[j].id == products[id].id){
                eleExist=true;
              } 
             }
             if(!eleExist){
              arr[i].cart.push(products[id]);
              console.log(arr);
              const action = setCartUsers(arr);
              dispatch(action);
              const action2 = setCartLength();
              dispatch(action2);
              break;
             }
             }
           }}
    }
  }
  return (
    <div>
      <NavbarAll />

      <Card.Body>
        <Container>
          <Row>
            <Col>
              <img src={products[id].image} height="500px" width="500px" />
            </Col>
            <Col>
              <div>
                <h4 className="text-uppercase text-black-60">
                  {products[id].category}
                </h4>

                <h1 className=" text-black-50">{products[id].title}</h1>
              </div>

              <p className="Rating">
                <b> Rating :</b> {products[id].rating.rate}
                <StarRateIcon />( {products[id].rating.count})
              </p>

              <div className="display-6 fw-bold my-4">
                {products[id].price + "$"}
              </div>
              <p className="description">{products[id].description}</p>

              <button className="btn btn-outline-dark" onClick={addToCart}>
                Add to cart <AddShoppingCartIcon />
              </button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </div>
  );
}

export default ProductDetails;
