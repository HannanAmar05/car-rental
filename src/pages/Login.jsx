import React, { useState } from "react";
import "../styles/login.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Login = () => {
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
              <div className="p-4 heading ">
                <h3 className="mb-4 section-subtitle fs-3 ">Han Car Rental </h3>
                <h1 className="section-title  fs-2">Welcome To Han Rental Login Page </h1>
                <h5 className="section-description">
                  Rent the Perfect Car for Any Occasion In Our Car Rental
                </h5>
              </div>
              <Form>
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
                    {passwordVisible ? <i className="ri-eye-fill"></i> : <i className="ri-eye-off-fill"></i>}
                  </span>
                </FormGroup>
                <button className="btn-login">Login</button>
              </Form>
              <div className="w-100 d-flex justify-content-center">
                <span className="login-link mt-4">
                  Dont have an account yet? <a href="/sign-up">Sign Up Here</a>
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

export default Login;
