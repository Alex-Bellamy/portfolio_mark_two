import React from "react";
import emailjs from "emailjs-com";
import Keys from "./Keys";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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
    <form
      className="contact-form"
      noValidate
      autoComplete="off"
      onSubmit={sendEmail}
    >
      <input type="hidden" name="contact_number" />
      <Typography data-cy="name" variant="subtitle1">
        As you have probably guessed my name's Alex, what's yours?
      </Typography>
      <TextField
        required
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="user_name"
      />
      <Typography data-cy="email" variant="subtitle1">
        And your email?
      </Typography>
      <TextField
        required
        data
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        name="user_email"
      />
      <Typography data-cy="message" variant="subtitle1">
        Drop me a message, even if it's just for some friendly advice
      </Typography>
      <TextField
        required
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={8}
        name="message"
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailFacility;