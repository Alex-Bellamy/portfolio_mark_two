import React from "react";
import emailjs from "emailjs-com";
import Keys from "./Keys";

const EmailFacility = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        Keys.YOUR_SERVICE_ID,
        Keys.YOUR_TEMPLATE_ID,
        e.target,
        Keys.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailFacility;