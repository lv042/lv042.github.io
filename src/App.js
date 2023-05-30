import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
import "./App.scss"; // Import the SCSS file for additional styles

const Home = React.forwardRef((props, ref) => {
  return (
    <div style={{ overscrollBehavior: "contain" }}>
      <div className="particle-container">
        {/* Add the particle container */}
        <div className="particle particle-1"></div>
        {/* Add the particle effect */}
        <div className="particle particle-2"></div>
        {/* Add the particle effect */}
        

        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
          ref={ref}
        />
       {about.show && (
  <div className="about-me-wrapper" style={{ zIndex: 999999999999999999999999999999999999999999 }}>
    <AboutMe
      heading={about.heading}
      message={about.message}
      link={about.imageLink}
      imgSize={about.imageSize}
      resume={about.resume}
    />
  </div>
)}
        {experiences.show && <Experience experiences={experiences} />}
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        )}
        {leadership.show && (
          <Leadership
            heading={leadership.heading}
            message={leadership.message}
            img={leadership.images}
            imageSize={leadership.imageSize}
          />
        )}
        {skills.show && (
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        )}
      </div>
    </div>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
      {/* Add the link to your icon in the head section */}
      <head>
        <link rel="shortcut icon" href="./assets/img/L.png" type="image/png" />
      </head>
    </BrowserRouter>
  );
};

export default App;
