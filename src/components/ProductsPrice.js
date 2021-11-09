import { setFilter } from "../reducers/products/products";
import { useDispatch, useSelector } from "react-redux";
//  import { useState } from "react";

function ProductPrice() {
  const dispatch = useDispatch();
  //   const [v1, setv1] = useState(false);
  //      const [v2, setv2] = useState(false);
  //      const [v3, setv3] = useState(false);
  //      const [v4, setv4] = useState(false);
  //    const [v5, setv5] = useState(false);

  const state = useSelector((state) => {
    console.log(state);
    return {
      products: state.products.products,
    };
  });

  //  function filterPrice(set) {
  //       set(true);
  //       let array = [];
  //        for (let i = 0; i < array.length; i++) {
  //          if (v1 && state.filter[i].price < 59) {
  //          array.push(state.filter[i]);
  //          } else if (
  //            v2 &&
  //            state.filter[i].price <= 199 &&
  //            state.filter[i].price >= 59
  //          ) {
  //            array.push(state.filter[i]);
  //          } else if (
  //            v3 &&
  //            state.filter[i].price <= 399 &&
  //            state.filter[i].price >= 200
  //          ) {
  //            array.push(state.filter[i]);
  //          } else if (
  //            v4 &&
  //            state.filter[i].price <= 699 &&
  //            state.filter[i].price >= 400
  //          ) {
  //          array.push(state.filter[i]);
  //        } else if (v5 && state.filter[i].price > 699) {
  //          array.push(state.filter[i]);
  //          }
  //        }

  const array = [];
  const HandelCheack = (e) => {
    if (e.target.checked) {
      if (e.target.attributes.value.value == 1) {
        state.products.filter((item) => {
          if (item.price < 59) {
            array.push(item);
          }
        });
        console.log("1");
      } else if (e.target.attributes.value.value == 2) {
        state.products.filter((item) => {
          if (item.price > 59 && item.price < 199) {
            array.push(item);
          }
        });
        console.log("2");
      } else if (e.target.attributes.value.value == 3) {
        state.products.filter((item) => {
          if (item.price > 200 && item.price < 399) {
            array.push(item);
          }
        });

        console.log("3");
      } else if (e.target.attributes.value.value == 4) {
        state.products.filter((item) => {
          if (item.price > 400 && item.price < 699) {
            array.push(item);
          }
        });
        console.log("4");
      } else if (e.target.attributes.value.value == 5) {
        state.products.filter((item) => {
          if (item.price > 699) {
            array.push(item);
          }
        });
        console.log("5");
      }
    }
    if (array.length == 0) {
      console.log("no elament");
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
