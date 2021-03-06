import React from "react";
import emailjs from "emailjs-com";
import Keys from "./Keys";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";

const primary = grey[50];

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: grey[500],
    },
  },
}))(Button);

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
    <div style={{ marginLeft: "20%", marginRight:"20%"}}>
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
      </Typography> <br />
      <TextField
        required
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={8}
        name="message"
      /> 
      <div> <br />
        <ColorButton
          variant="outlined"
          size="large"
          style={{ marginLeft: "90%" }}
        >
          <input
            type="submit"
            value="Send"
            style={{ color: primary, border: 0, background: 0, outline: "none" }}
          />
        </ColorButton>{" "}
        <p id="emailAddress" style={{ alignItems: "center", display: "inline-flex", marginLeft: "5%", marginTop: "-10%" }}
        >alexanderlbellamy@gmail.com
        <i
          id="linkedin-icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/alex-bellamy-0237441b4/")
          }
          className="fa fa-linkedin fa-3x"
          aria-hidden="true"
        />{" "}
        <i
          id="github-icon"
          onClick={() => window.open("https://github.com/Alex-Bellamy")}
          className="fa fa-github fa-3x"
          aria-hidden="true"
        />{" "}
       </p>
      </div>
    </form>
    </div>
  );
};

export default EmailFacility;