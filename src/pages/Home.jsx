import React from "react";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServiceList from "../components/UI/ServiceList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriver from "../components/UI/BecomeDriver";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero-slider-section">
        <HeroSlider />
        <div className="hero-form">
          <Container>
            <Row className="form-row">
              <Col lg="4" md="4">
                <div className="find-cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* ========= about section ========= */}
      <AboutSection />

      {/* ========= services section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section-subtitle">See our</h6>
              <h2 className="section-title">Popular Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========= car offer section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section-subtitle">Come with</h6>
              <h2 className="section-title">Hot Offers</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* ========= become driver section ========= */}
      <BecomeDriver />

      {/* ========= testimonial section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="seection-subtitle">Our Clients Says</h6>
              <h2 className="section-title">Testimonials</h2>
            </Col>
            <Testimonial/>
          </Row>
        </Container>
      </section>
      {/* ========= blog section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="seection-subtitle">Explore Oyr Blogs</h6>
              <h2 className="section-title">Latest Blogs</h2>
            </Col>
            <BlogList/>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;
