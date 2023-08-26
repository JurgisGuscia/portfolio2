import { React, useRef } from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Connect from "./components/Connect.jsx";
import Control from "./components/Control.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <PersonalInfo />
    <Control />
    <Home />
    <AboutMe />
    <Skills />
    <Projects />
    <Connect />
  </div>
);
