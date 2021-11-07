
function Product() {
 
    return(  
     <div>
      

import { Button,Card } from 'react-bootstrap';
import { useSelector } from "react-redux";



function Product({index}) {
 
  const state = useSelector((state) => {
    return {
      products: state.products.products
    };
  });

    return(  
     <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={state.products[index].image} />
  <Card.Body>
    <Card.Title>{state.products[index].title}</Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

   
     </div>
      
    
    );
   
  }
  
  export default Product;