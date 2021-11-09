
import React, {useState} from 'react'; 
// import { setFilter } from "../reducers/products/products";
// import { useDispatch, useSelector } from "react-redux";


function StarRating({count, value, 
    inactiveColor='#ddd',
    size=24,
    activeColor='#f00', onChange}) {

  const stars = Array.from({length: count}, () => '🟊')

  const handleChange = (value) => {
    onChange(value + 1);
  }

/////////////////////////////////

 
// const dispatch = useDispatch();

// const state = useSelector((state) => {
//     return {
//       products: state.products.products,
//       filter: state.products.filter
//     };
//   });
  
//   const searchvalue = (value) =>{ 
   
//     let newArray = []
//     state.products.map((ele, index) =>{

//       if(value <= ele.rating.rate){ // ele.rating.rate
//         newArray.push(ele)   
//       }
//     })

//   const action = setFilter(newArray);
//   dispatch(action);

//   }



  return (
    <div>
          {/* {console.log(value)}  */}
      {/* {searchvalue(value)} */}
      
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
          
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
            onClick={()=>handleChange(index)}>{s}</span> 
        
        )
      }) }
    </div>
  )
}





export default StarRating