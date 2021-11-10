function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark">
      <div style={{ backgroundColor: "#563d7c" }}>
        <div className="container">
          {/* Grid row*/}
          <div className="row py-4 d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                Get connected with us on social networks!
              </h6>
            </div>
            <div style={{ backgroundColor: "#050130" }}>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                {/* Facebook */}
                <a className="fb-ic">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                {/* Twitter */}
                <a className="tw-ic">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>
                {/* Google +*/}
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                {/*Linkedin */}
                <a className="li-ic">
                  <i className="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                {/*Instagram*/}
                <a className="ins-ic">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row*/}
          </div>
        </div>
        {/* Footer Links */}

        <div className="container text-center text-md-left mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">Company name</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fas fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
