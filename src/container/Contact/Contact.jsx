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
    <>
      <h2 className="head-text title-text">
        LOVE TO HEAR FROM YOU, GET IN TOUCH!👋
      </h2>

      <div className="copyright">
        <p className="p-text"> @2022 E11even </p>
        <p className="p-text"> All rights reserved </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__primarybg"
);
