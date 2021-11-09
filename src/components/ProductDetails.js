import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Col, Row, Container, Card } from "react-bootstrap";
import StarRateIcon from "@material-ui/icons/StarRate";
import NavbarAll from "./NavbarAll";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function ProductDetails() {
  const { id } = useParams();
  const { filter } = useSelector((state) => state.products);

  return (
    <div>
      <NavbarAll />

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

                <h1 className=" text-black-50">{filter[id].title}</h1>
              </div>

              <p className="Rating">
                <b> Rating :</b> {filter[id].rating.rate}
                <StarRateIcon />( {filter[id].rating.count})
              </p>

              <div className="display-6 fw-bold my-4">
                {filter[id].price + "$"}
              </div>
              <p className="description">{filter[id].description}</p>

              <button className="btn btn-outline-dark">
                Add to cart <AddShoppingCartIcon />
              </button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </div>
  );
}

export default ProductDetails;
