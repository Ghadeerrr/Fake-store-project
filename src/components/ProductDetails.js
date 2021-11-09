import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Col, Row, Container, Card } from "react-bootstrap";
function ProductDetails() {
  const { id } = useParams();
  const { filter } = useSelector((state) => state.products);

  //   <div id="grid">
  //   <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src={filter[id].image} />
  //       <Card.Body>
  //         <Card.Title>{filter[id].title}</Card.Title>
  //         <Card.Title>{filter[id].category}</Card.Title>
  //         <Card.Text>{filter[id].description}</Card.Text>
  //         <Card.Title>{filter[id].price + "$"}</Card.Title>
  //       </Card.Body>
  //   </Card>
  // </div>
  return (
    <Card.Body>
      <Container>
        <Row>
          <Col>
            <img src={filter[id].image} height="500px" width="500px" />
          </Col>
          <Col>
            <div>
              <h4 className="text-uppercase text-black-60">
                {filter[id].category}
              </h4>

              <h1 className=" text-black-20">{filter[id].title}</h1>
            </div>
            <p className="lead">
              Rating {filter[id].rating && filter[id].rating.rate}
              <i class="bi bi-star-fill"></i>
            </p>
            <div className="display-6 fw-bold my-4">
              {filter[id].price + "$"}
            </div>
            <p className="lead">{filter[id].description}</p>
            <button className="btn btn-outline-dark">Add to cart</button>
          </Col>
        </Row>

        {/* <Card.Body>
                <Card.Title>{filter[id].title}</Card.Title>
                <Card.Title>{filter[id].category}</Card.Title>
                <Card.Text>{filter[id].description}</Card.Text>
                <Card.Title>{filter[id].price + "$"}</Card.Title>
              </Card.Body>
          </Card> */}
      </Container>
    </Card.Body>
  );
}

export default ProductDetails;
