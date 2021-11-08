import { useParams, useHistory } from "react-router";
import {  useSelector } from "react-redux";
import { Button,Card } from 'react-bootstrap';
function ProductDetails() {
 
  const { id } = useParams();
  const {filter} = useSelector(state => state.products);
 
    return(  
     <div>
      <div id="grid">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={filter[id].image} />
              <Card.Body>
                <Card.Title>{filter[id].title}</Card.Title>
                <Card.Title>{filter[id].category}</Card.Title>
                <Card.Text>{filter[id].description}</Card.Text>
                <Card.Title>{filter[id].price + "$"}</Card.Title>
              </Card.Body>
          </Card>
      </div>
     </div>
      
    
    );
   
  }
  
  export default ProductDetails;