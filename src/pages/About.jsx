import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../assets/all-images/drive.jpg";
import BecomeDriver from "../components/UI/BecomeDriver";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css"
const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />
      <section className="about-page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about-page-img">
                <img src={driverImg} className="w-100 rounded-3" alt="" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about-page-content">
                <h2 className="section-title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, ipsam sint alias at ratione iusto est autem delectus
                  nostrum quisquam fugiat blanditiis qui repellendus doloribus,
                  praesentium voluptate architecto enim perspiciatis?
                </p>
                <p className="section-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, ipsam sint alias at ratione iusto est autem delectus
                  nostrum quisquam fugiat blanditiis qui repellendus doloribus,
                  praesentium voluptate architecto enim perspiciatis?
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section-subtitle">Need Any Help?</h6>
                    <h4>+6288226189639</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriver />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section-subtitle">Experts</h6>
              <h2 className="section-title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
