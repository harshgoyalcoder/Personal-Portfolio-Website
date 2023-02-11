import React, { useState, useEffect } from "react";
import "./Education.css";
import data from "./data";
export default function Education() {
  return (
    <div id="education" className="education-main">
      <span className="heading-edu">
        <i class="fa-solid fa-user-graduate"></i> Education
      </span>

      <div className="education">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
            <div className="center">{d.desc1}</div>
            <div className="center">{d.desc2}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
