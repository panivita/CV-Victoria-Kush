import React, {useEffect} from "react";
import ReactGA from "react-ga";
import { Header } from "./sections/Header";
import { ProfileExperience } from "./sections/Profile-Experience";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Footer } from "./sections/Footer";
import { MetaTags } from "./meta-tags";
import "./my-cv.css";

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-190303422-1');
    ReactGA.pageview(window.location.pathname);
  })
  return (
    <div className="main-container">
      <MetaTags />
      <Header />
      <div className="main-column">
        <div className="skills-column">
          <Skills />
        </div>
        <div className="expirience-column">
          <ProfileExperience />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
