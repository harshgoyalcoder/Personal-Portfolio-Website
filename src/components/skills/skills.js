import React from "react";
import "./skills.css";
import data from "./data";
export default function skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-heading">
        <span>
          {" "}
          <i className="fa-solid fa-chalkboard-user"></i>
        </span>
        <span> Skills</span>
      </h1>

      <div className="skills-list">
        {data.map((courses) => (
          <div className="skills-item">
            <div className="skill-img">
              <img src={courses.img} />
            </div>

            <div className="skills-details">
              <h3>{courses.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
