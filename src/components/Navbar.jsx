import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { mainBody, repos, about, skills } from '../editable-stuff/config.js';
import { NavLink } from './home/migration';

const Navigation = React.forwardRef(({ isGalleryPage }, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // New state for hovered item

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
    setHoveredItem(null); // Reset the hovered item
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 990);
  };

  const navbarTextColor = isGalleryPage ? 'text-black' : 'text-white';
  const navbarTextColorScroll = 'text-black';

  useEffect(() => {
    setIsMobileView(window.innerWidth < 990);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsTop(position === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = isTop ? navbarTextColor : navbarTextColorScroll;
  const menuPaddingLeft = isMobileView ? '28px' : '0px';

  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const getNavLinkClassName = (index) => {
    return `nav-item lead ${textColor} ${hoveredItem === index ? 'highlighted' : ''}`;
  };

  return (
    <Navbar
      ref={ref}
      style={{ zIndex: 999999, paddingRight: '16px' }}
      className={`fixed-top ${!isTop ? 'navbar-white' : 'navbar-transparent'} ${textColor}`}
      expand="lg"
      expanded={isNavbarExpanded}
      onToggle={handleNavbarToggle}
    >
      <Navbar.Brand
        className={`navbar-brand pl-0 ${textColor}`}
        style={{ marginRight: '0px' }}
        href={process.env.PUBLIC_URL + '/#home'}
      >
        <div
          style={{
            width: '120px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: '0px',
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/93200523?v=4"
            alt="logo"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className="logo"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto" style={{ paddingLeft: menuPaddingLeft }}>
          {repos.show && (
            <NavLink
              onMouseEnter={() => handleItemHover(0)}
              onMouseLeave={() => handleItemHover(null)}
              href={process.env.PUBLIC_URL + '/#projects'}
              style={{ marginLeft: '10px' }}
              className={getNavLinkClassName(0)}
            >
              Projects
            </NavLink>
          )}
          <NavLink
            className={getNavLinkClassName(1)}
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginLeft: '10px' }}
          >
            Resume
          </NavLink>
          {/* {about.show && (
            <NavLink
              className={getNavLinkClassName(2)}
              href={process.env.PUBLIC_URL + '/gallery'}
              style={{ marginLeft: '10px' }}
            >
               Gallery 
            </NavLink>
          )} */}
          {about.show && (
            <NavLink
              className={getNavLinkClassName(3)}
              href={process.env.PUBLIC_URL + '/#aboutme'}
              style={{ marginLeft: '10px' }}
            >
              About
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className={getNavLinkClassName(4)}
              href={process.env.PUBLIC_URL + '/#skills'}
              style={{ marginLeft: '10px' }}
            >
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
