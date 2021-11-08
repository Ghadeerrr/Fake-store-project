import { Button,Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



function Product({ele,index}) {
 
  const state = useSelector((state) => {
    return {
      filter: state.products.filter
    };
  });
    console.log(ele);
    return(  
     <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ele.image} />
  <Card.Body>
    <Card.Title>{ele.title}</Card.Title>
      {/* <Button variant="primary">Go somewhere</Button> */}
        {/* <ProductDetails to={`/ProductDetails/${index}`} class="btn btn-outline-dark">
                          Details
        </ProductDetails> */}

     {/* <Button variant="primary"  to={`/ProductDetails/${index}`}>Go somewhere</Button> */}
     <NavLink to={`/ProductDetails/${index}`} class="btn btn-outline-dark">
        Details
      </NavLink>
    </Card.Body>
  </Card>
   
     </div>
      
    
    );
   
  }
  
  export default Product;