import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/contact.css"

const Contact = () => {
  const socialLinks = [
    {
      url: "#",
      icon: "ri-facbook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <Form>
                <FormGroup className="contact-form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="btn contact-btn" type="submit">
                  Send
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact-info">
                <h6 className="fw-bold ">Contact information</h6>
                <p className="section-description mb-0">
                  50A, Jember, Jawa Timur, Indonesia
                </p>
                <div className="d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Phone:</h6>
                    <p className="section-description mb-0">+6288226189639</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Email:</h6>
                    <p className="section-description mb-0">amarhannan358@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                    {
                        socialLinks.map((item,index) => (
                            <Link to={item.url} key={index} className="social-link-icon"><i className={item.icon}></i></Link>
                        ))
                    }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
