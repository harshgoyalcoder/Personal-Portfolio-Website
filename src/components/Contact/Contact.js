import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs, { send } from "@emailjs/browser";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ss33jtk",
        "template_utiz80k",
        e.target,
        "ciJkjSP9nlrYt5JNK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(true);
  };

  return (
    <div id="contacts" className="contact" >
      <div className="left-contact">
        <span className="contact-icon">
          <i class="fa-solid fa-address-card"></i> Contact
        </span>
        <br />
        <br />
        <span>
          <h3>Love To Hear From You</h3>
          <h3>Get In Touch</h3>
        </span>
        <br />
        <span className="contact-icon-2">
          <i class="fa-brands fa-whatsapp"></i> 7717418723
        </span>
        <br />

        <span className="contact-icon-2">
          {" "}
          <i class="fa-solid fa-envelope"></i> harshgoyal1415@gmail.com
        </span>
      </div>

      <div className="right-contact">
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            id="input-name"
          />

          <input
            type="text"
            name="email"
            placeholder="Your Email"
            id="input-email"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            id="input-subject"
          />

          <textarea
            id="input-message"
            name="message"
            rows="2"
            cols="40"
            placeholder="Message"
          ></textarea>

          <button
            name="Send Message"
            class=" 
           msg-button"
          >
            SEND MESSAGE
          </button>
          <br />
          {message && (
            <span className="reply">Thanks! I will reply asap :)</span>
          )}
        </form>
      </div>
    </div>
  );
}
