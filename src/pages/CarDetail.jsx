import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetail = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0,0)
  } ,[singleCarItem])

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} className="w-100" alt="" />
            </Col>
            <Col lg="6">
              <div className="car-info">
                <h2 className="section-title">{singleCarItem.carName}</h2>
                <div className="d-flex align-items-center gap-5 mb-4">
                  <h6 className="rent-price fw-bold fs-4">
                    Rp{singleCarItem.price} / Day
                  </h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section-description">
                  {singleCarItem.description}
                </p>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span
                    className="d-flex align-items-center gap-1 section-description"
                    style={{ color: "#f9a826" }}
                  >
                    <i className="ri-roadster-line"></i> {singleCarItem.model}
                  </span>
                  <span
                    className="d-flex align-items-center gap-1 section-description"
                    style={{ color: "#f9a826" }}
                  >
                    <i className="ri-settings-2-line"></i>{" "}
                    {singleCarItem.automatic}
                  </span>
                  <span
                    className="d-flex align-items-center gap-1 section-description"
                    style={{ color: "#f9a826" }}
                  >
                    <i className="ri-timer-flash-line"></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span
                    className="d-flex align-items-center gap-1 section-description"
                    style={{ color: "#f9a826" }}
                  >
                    <i className="ri-map-pin-line"></i> {singleCarItem.gps}
                  </span>
                  <span
                    className="d-flex align-items-center gap-1 section-description"
                    style={{ color: "#f9a826" }}
                  >
                    <i className="ri-wheelchair-line"></i>{" "}
                    {singleCarItem.seatType}
                  </span>
                  <span
                    className="d-flex align-items-center gap-1 section-description"
                    style={{ color: "#f9a826" }}
                  >
                    <i className="ri-building-2-line"></i> {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg='7'>
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm/>
              </div>
            </Col>

            <Col lg='5' className="mt-5">
            <div className="payment-info mt-5">
              <h5 className="mb-4 fw-bold">Payment Information</h5>
              <PaymentMethod/>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetail;
