import { Button,Card } from 'react-bootstrap';
import { useSelector } from "react-redux";



function Product({ele,index}) {
 
  const state = useSelector((state) => {
    return {
      filter: state.products.filter
    };
  });

    return(  
     <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ele.image} />
  <Card.Body>
    <Card.Title>{ele.title}</Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
   
     </div>
      
    
    );
   
  }
  
  export default Product;