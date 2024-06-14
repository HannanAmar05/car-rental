import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about-section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-section-content">
              <h4 className="section-subtitle">About Us</h4>
              <h2 className="section-title">Welcome to car rent</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                odit recusandae aperiam quia dolorum neque quis repellat
                repellendus provident mollitia aut sapiente eius iure, eligendi
                voluptate at sequi accusamus dolore?
              </p>

              <div className="about-section-item d-flex align-items-center">
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="about-section-item d-flex align-items-center">
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about-img">
              <img src={aboutImg} className="w-100" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
