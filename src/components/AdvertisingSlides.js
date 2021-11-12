import { Carousel } from "react-bootstrap";

function AdvertisingSlides() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pastel-sale-email-header-design-template-2bc431832ab65e24c27d1ed7e7283299_screen.jpg?ts=1561542096"
            height="500"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/03/9a/b4/039ab4ae8a6ea88748ca28f59743b5cf.jpg"
            height="500"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/38/c6/1a/38c61a7448dfb816003f743f0a8d6e83.jpg"
            height="500"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AdvertisingSlides;
