import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Skills from "./components/skills/skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="all-sections">
        <Intro />
        <Education />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
