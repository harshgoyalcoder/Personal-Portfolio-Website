import React from "react";
import "./Intro.css";
// import {  Cursor } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";
export default function Intro() {
  return (
    <div id="intro" className="intro">
      <div className="intro-left">
        <div className="intro-img">
          <img src="oasis.jpg" alt="" />
        </div>
      </div>
      <div className="intro-right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>HARSH GOYAL</h1>
          <h3>
            Freelance{" "}
            <span>
              <Typewriter
                options={{
                  strings: ["Coder", "Developer", "Creator", "Vlogger"],
                  autoStart: true,
                  deleteSpeed: 80,
                  pauseFor: 200,
                  cursor: "_",
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
