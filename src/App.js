import React from "react";
import { Header } from "./sections/Header";
import { ProfileExperience } from "./sections/Profile-Experience";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Footer } from "./sections/Footer";
import "./my-cv.css";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <ProfileExperience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
