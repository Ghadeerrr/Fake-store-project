import StarRating from "./StarRating"
import { useState } from 'react';
import { setFilter } from "../reducers/products/products";
import { useDispatch, useSelector } from "react-redux";

function StarRatingDemo() {

    const [rating, setRating] = useState(3);
  
    const handleChange = (value) => {
        setRating(value);
        searchvalue(value);
    }

    
 
const dispatch = useDispatch();

const state = useSelector((state) => {
    return {
      products: state.products.products,
      filter: state.products.filter
    };
  });
  
  const searchvalue = (value) =>{ 
   
    let newArray = []
    state.filter.map((ele, index) =>{

      if(value <= ele.rating.rate){ // ele.rating.rate
        newArray.push(ele)   
      }
    })

  const action = setFilter(newArray);
  dispatch(action);

  }


    return (
      <div className="filter-star">

        <h4>Star Rating </h4>

       <StarRating 
         count={5}
         size={30}
         value={rating}
         activeColor ={'red'}
         inactiveColor={'#ddd'}
         onChange={handleChange}  />
         {/* {searchvalue(rating)} */}
         {console.log(rating)}
      </div>
    )
  }

  export default StarRatingDemo