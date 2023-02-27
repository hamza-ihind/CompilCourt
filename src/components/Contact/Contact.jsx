import { useState } from "react";
import emailjs from "emailjs-com";

import { images } from "../../constants";
// import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="app__contact app__wrapper">
      <h2 className="title-text">Love to hear from you, Get in touch!👋</h2>

      {/* <div className="app__contact-cards">
        <div className="app__contact-card">
          <img
            src={images.email}
            alt="email"
            className="app__contact-card-img"
          />
          <p className="app__contact-card-text">compil.court2023@gmail.com</p>
        </div>
        <div className="app__contact-card">
          <img src={images.map} alt="email" className="app__contact-card-img" />
          <p className="app__contact-card-text">
            Avenue Tamessoult, Agadir 80000
          </p>
        </div>
      </div> */}

      <form action="" className="app__contact-form">
        {/* up side */}
        <div className="app__contact-form-up">
          <div className="app__contact-form-up-card">
            <p className="app__contact-form-up-card-text">Name</p>
            <input type="text" className="app__contact-form-up-card-input" />
          </div>
          <div className="app__contact-form-up-card">
            <p className="app__contact-form-up-card-text">Email address</p>
            <input type="text" className="app__contact-form-up-card-input" />
          </div>
        </div>

        {/* Message */}
        <div className="app__contact-form-message">
          <div className="app__contact-form-message-card">
            <p className="app__contact-form-message-card-text">Message</p>
            <textarea
              type="text"
              className="app__contact-form-message-card-input"
            />
          </div>
        </div>

        <button className="button-main app__contact-form-button">
          Send message
        </button>
      </form>

      {/* <div className="copyright">
        <p className="p-text"> @2022 E11even </p>
        <p className="p-text"> All rights reserved </p>
      </div> */}
    </div>
  );
};

export default Contact;
