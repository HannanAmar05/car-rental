import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/privacy",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-1">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer-logo-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              libero iste magni tenetur assumenda dignissimos, architecto et
              numquam! Ducimus, id.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer-link-title">Quick Link</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick-link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer-link-title mb-4">Head Office</h5>
              <p className="office-info">123 Jember, East Java, Indonesia</p>
              <p className="office-info">Phone :+6288226189639</p>
              <p className="office-info">Email : amarhannan358@gmail.com</p>
              <p className="office-info">Office Time : 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer-link-title">Newsletters</h5>
              <p className="section-description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='12'>
            <div className="footer-bottom">
              <p className="section-description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by Hannan Amar. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
