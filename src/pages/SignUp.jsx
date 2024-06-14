import React, { useState } from "react";
import "../styles/signup.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="login-section d-flex align-items-center justify-content-center">
      <Container>
        <Row>
          <Col lg="5" md="8" sm="12">
            <div className="login-form-wrapper p-5">
              <div className="p-4 heading   ">
                <h3 className="mb-4 section-subtitle fs-3 ">Han Car Rental </h3>
                <h1 className="section-title fs-2">
                  Welcome To Han Rental Sign-up Page{" "}
                </h1>
                <h5 className="section-description">
                  Rent the Perfect Car for Any Occasion In Our Car Rental
                </h5>
              </div>
              <Form>
                <FormGroup>
                  <Label for="email">Name</Label>
                  <Input
                    type="Name"
                    name="Name"
                    id="Name"
                    placeholder="Enter your Name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="address"
                    name="address"
                    id="address"
                    placeholder="Enter your Address"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </FormGroup>
                <FormGroup className="position-relative">
                  <Label for="password">Password</Label>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="position-absolute eye"
                    style={{ top: "33px", right: "10px", cursor: "pointer" }}
                  >
                    {passwordVisible ? <i className="ri-eye-off-fill"></i> : <i className="ri-eye-fill"></i>}
                  </span>
                </FormGroup>
                <FormGroup className="position-relative">
                  <Label for="password">Confirm Password</Label>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Confirm your Password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="position-absolute eye"
                    style={{ top: "33px", right: "10px", cursor: "pointer" }}
                  >
                    {passwordVisible ? <i className="ri-eye-off-fill"></i> : <i className="ri-eye-fill"></i>}
                  </span>
                </FormGroup>
                <button className="btn-login">Sign-Up</button>
              </Form>
              <div className="w-100 d-flex justify-content-center">
                <span className="login-link mt-4">
                  Already have account? <a href="/login">Login Here</a>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="6" md="8" sm="12"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
