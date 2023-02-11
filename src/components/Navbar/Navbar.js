import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { links, social } from "./data";

export default function Navbar() {
  const [showLinks,setShowLinks]=useState(false);
  return (
    <nav id="nav" className={`${showLinks ? "navbar navbar-color" : "navbar"}`}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src="" className="logo" alt="logo" />
           */}
           <h1 className="logo">Creater</h1>
           <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li className="social-list" key={id}>
                <a href={url}> {icon} </a>
              </li>
            );
          })}
        </ul>
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            {showLinks? <RxCross1 />:<FaBars />}
          </button>
        </div>



        <div className={`${showLinks?'links-container show-container':'links-container'}`}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li   key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

       
      </div>
    </nav>
  );
}
