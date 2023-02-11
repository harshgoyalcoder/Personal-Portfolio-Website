import "./Projects.css";
import React, { useState, useEffect } from "react";
import data from "./data";
export default function Projects() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div id="projects" className="works">
      <div className="slider">
        <h1 className="project-head"><i class="fa-solid fa-briefcase"></i>{"  "}  Projects</h1>
        {data.map((person, personIndex) => {
          const { id, icon, title, desc, img,link } = person;
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div className="p-item">
                <div className="p-left">
                  <div className="p-leftContainer">
                    <div className="p-imgContainer">
                      <img src={icon} alt="" />
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
                <div className="p-right">
                  <a href={link}>
                  <img src={img}  alt="" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="left-arrow">
        <i
          class=" fa-solid fa-chevron-left"
          onClick={() => setIndex(index - 1)}
        ></i>
      </div>
      <div className="right-arrow">
        {" "}
        <i
          class="fa-solid fa-chevron-right"
          onClick={() => setIndex(index + 1)}
        ></i>
      </div>
    </div>
  );
}
