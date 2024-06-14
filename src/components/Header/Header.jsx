import React, {useRef} from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('menu-active')

  return (
    <header className="header">
      {/* ==================== header top ==================== */}
      <div className="header-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left">
                <span>Need Help?</span>
                <sapn className="header-top-help">
                  <i className="ri-phone-fill"></i>+123-456-789
                </sapn>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                <Link to='/login' className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>Login
                </Link>
                <Link className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==================== header middle ==================== */}
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
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
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header-location-content">
                  <h4>Indonesia</h4>
                  <h6>Jember, East Java</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header-location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0" className="text-end d-flex align-items-center justify-content-end">
              <button className="header-btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i>Request a Call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==================== main navigation ==================== */}
      <div className="main-navbar">
        <Container>
          <div className="navigation-wrapper d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive ? "nav-item nav-active" : "nav-item"
                    }
                    to={item.path}
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav-right">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
