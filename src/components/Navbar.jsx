import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";




const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();

  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const textColor = isTop ? "text-white" : "text-black"; // Define text color based on scroll position

  return (
    <Navbar
      ref={navbarMenuRef}
      style={{ zIndex: 999999 }}
      className={`fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"} style={{ paddingLeft: "0px", paddingRight: "0px"}`}
      expand="lg"
    >
      <Navbar.Brand
        className={`navbar-brand pl-0 ${textColor}`} // Apply text color class
        style={{ marginRight: "0px" }}
        href={process.env.PUBLIC_URL + "/#home"}
      >
        <div
          style={{
            width: "120px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: "0px",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/93200523?v=4"
            alt="logo"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            className="logo"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {repos.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#projects"} style={{ marginLeft: "10px" }} className={textColor}>
              Projects
            </NavLink>
          )}
          <NavLink
            className={`nav-item lead ${textColor}`} // Apply text color class
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginLeft: "10px" }}
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink className={`nav-item lead ${textColor}`} // Apply text color class
              href={process.env.PUBLIC_URL + "/#aboutme"} style={{ marginLeft: "10px" }}>
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink className={`nav-item lead ${textColor}`} // Apply text color class
              href={process.env.PUBLIC_URL + "/#skills"} style={{ marginLeft: "10px" }}>
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
