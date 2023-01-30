import { useState } from "react";
import emailjs from "emailjs-com";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0vmxz31",
        "template_nj8ljez",
        e.target,
        "fHv_1o66YkbGxmYrr"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app__contact">
      <h2 className="title-text">Love to hear from you, Get in touch!👋</h2>

      <div className="app__contact-cards">
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
      </div>

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

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__primarybg"
);
