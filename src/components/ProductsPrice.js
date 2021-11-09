import { setFilter } from "../reducers/products/products";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
function ProductPrice() {
    const dispatch = useDispatch();
    let v1 =false;
    let v2 =false;
    let v3 =false;
    let v4 =false;
    let v5 =false;

    // const state = useSelector((state) => {
    //   return {
    //     filter: state.products.filter,
    //   };
    // });

  function filterPrice(v) {

      // v=true;
      // let array = [];
      // for (let i = 0; i < array.length; i++) {
      //   if (v1 && state.filter[i].price < 59) {
      //     array.push(state.filter[i]);
      //   } else if (
      //     v2 &&
      //     state.filter[i].price <= 199 &&
      //     state.filter[i].price >= 59
      //   ) {
      //     array.push(state.filter[i]);
      //   } else if (
      //     v3 &&
      //     state.filter[i].price <= 399 &&
      //     state.filter[i].price >= 200
      //   ) {
      //     array.push(state.filter[i]);
      //   } else if (
      //     v4 &&
      //     state.filter[i].price <= 699 &&
      //     state.filter[i].price >= 400
      //   ) {
      //     array.push(state.filter[i]);
      //   } else if (v5 && state.filter[i].price > 699) {
      //     array.push(state.filter[i]);
      //   }
      // }
      // const action = setFilter(array);
      // dispatch(action);
    }

  return (
    <div className="ProductPtice">
      <nav>
        <form>
          <label>
            less than $59
            <input type="checkbox" name="checkbox" onClick={filterPrice(v1)} />
          </label>
          <br />
          <label>
            59$ to 199$
            <input type="checkbox" name="checkbox" onClick={filterPrice(v2)} />
          </label>
          <br />
          <label>
            200$ to 399$
            <input type="checkbox" name="checkbox" onClick={filterPrice(v3)} />
          </label>
          <br />
          <label>
            400$ to 699$
            <input type="checkbox" name="checkbox" onClick={filterPrice(v4)} />
          </label>
          <br />
          <label>
            More than 699$
            <input type="checkbox" name="checkbox" onClick={filterPrice(v5)} />
          </label>
        </form>
      </nav>
    </div>
  );
}

export default ProductPrice;
