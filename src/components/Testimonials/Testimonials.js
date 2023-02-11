import React, { useState } from "react";
import "./Testimonials.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import {BsChatRightQuoteFill} from "react-icons/bs";
import people from "./data";
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div id="testimonials" className="t-container">
      <div className="t-heading"><h1><BsChatRightQuoteFill/> {" "}Testimonials</h1></div>
      <div className="review">
        <div className="t-img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
<div className="t-info">
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        {/* <p className="info">{text}</p> */}
</div>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
