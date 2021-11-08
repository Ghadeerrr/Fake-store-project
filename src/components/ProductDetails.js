import { useParams, useHistory } from "react-router";
import {  useSelector } from "react-redux";
import { Button,Card } from 'react-bootstrap';
import Navbar from "./Navbar"
function ProductDetails() {
 
  const { id } = useParams();
  const {filter} = useSelector(state => state.products);
 
    return(  
     <div>
      <Navbar/>
      <div id="grid">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={filter[id].image} />
              <Card.Body>
                <Card.Title>{filter[id].title}</Card.Title>
                </Card.Body>
          </Card>
      </div>
     </div>
      
    
    );
   
  }
  
  export default ProductDetails;