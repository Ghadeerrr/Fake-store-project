import { setFilter } from "../reducers/products/products";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function ProductPrice() {
    const [v1, setV1] = useState(false);
     const [v2, setV2] = useState(false);
     const [v3, setV3] = useState(false);
     const [v4, setV4] = useState(false);
   const [v5, setV5] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log(state);
    return {
        products: state.products.products,
        filter: state.products.filter
    };
  });


  const array = [];
  const HandelCheack = (e) => {
        if (e.target.attributes.value.value == 1){
            setV1(!v1);
        }
        else if(e.target.attributes.value.value == 2){
            setV2(!v2);
        }
        else if(e.target.attributes.value.value == 2){
            setV3(!v3);
        }
        else if(e.target.attributes.value.value == 2){
            setV4(!v4);
        }
        else if(e.target.attributes.value.value == 2){
            setV5(!v5);
        }
      if (e.target.attributes.value.value == 1 || v1) {
        state.products.filter((item) => {
          if (item.price < 59) {
            array.push(item);
          }
        });
      }  if (e.target.attributes.value.value == 2 || v2) {
        state.products.filter((item) => {
          if (item.price > 59 && item.price < 199) {
            array.push(item);
          }
        });
      }  if (e.target.attributes.value.value == 3 || v3) {
        state.products.filter((item) => {
          if (item.price > 200 && item.price < 399) {
            array.push(item);
          }
        });
      }  if (e.target.attributes.value.value == 4 || v4) {
        state.products.filter((item) => {
          if (item.price > 400 && item.price < 699) {
            array.push(item);
          }
        });
      }  if (e.target.attributes.value.value == 5 || v5) {
        state.products.filter((item) => {
          if (item.price > 699) {
            array.push(item);
          }
        });
    //   }
    }
    if (array.length == 0) {
    }
    const action = setFilter(array);
    dispatch(action);
    console.log(array);
  };

  return (
    <div className="ProductPtice">
      <nav>
        <form onClick={(e) => HandelCheack(e)}>
          <label>
            less than $59
            <input value="1" type="checkbox" name="checkbox" />
          </label>
          <br />
          <label>
            59$ to 199$
            <input value="2" type="checkbox" name="checkbox" />
          </label>
          <br />
          <label>
            200$ to 399$
            <input value="3" type="checkbox" name="checkbox" />
          </label>
          <br />
          <label>
            400$ to 699$
            <input value="4" type="checkbox" name="checkbox" />
          </label>
          <br />
          <label>
            More than 699$
            <input value="5" type="checkbox" name="checkbox" />
          </label>
        </form>
      </nav>
    </div>
  );
}

export default ProductPrice;

