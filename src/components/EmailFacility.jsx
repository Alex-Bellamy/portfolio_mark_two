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
          alert("Thanks for the mail, I'll be in contact shortly", result.text);
        },
        (error) => {
          alert(
            "Something went wrong, please give it another shot",
            error.text
          );
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
      <div>
        <input type="submit" value="Send" />
        <i
          id="linkedin-icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/alex-bellamy-0237441b4/")
          }
          className="fa fa-linkedin fa-3x"
          aria-hidden="true"
        />
        <i
          id="github-icon"
          onClick={() => window.open("https://github.com/Alex-Bellamy")}
          className="fa fa-github fa-3x"
          aria-hidden="true"
        />
      </div>
    </form>
  );
};

export default EmailFacility;