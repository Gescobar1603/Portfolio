import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activateLink, setActivateLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollTop = window.scrollY;

      // Detect the direction of the scroll
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setScrolled(true); // Scrolling down
      } else {
        setScrolled(false); // Scrolling up
      }
      
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling

      // You can also add more conditions to set `scrolled` state based on other requirements
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollTop]); // Dependencia de `lastScrollTop`

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const onUpdateActiveLink = (value) => {
    setActivateLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activateLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('home');
                handleScrollTo('home');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('skills');
                handleScrollTo('skills');
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('projects');
                handleScrollTo('projects');
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gustavoescobarm" aria-label="LinkedIn">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/gustavoalejandro.escobarmoreno" aria-label="Facebook">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/gukkye_16/" aria-label="Instagram">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <button className="vvd">
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
