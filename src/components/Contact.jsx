import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Contact = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: "20ch",
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <Typography
        id="contact."
        data-cy="title"
        variant="h1"
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        contact.
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography data-cy="name" variant="subtitle1">
          As you have probably guessed my name's Alex, what's yours?
        </Typography>
        <TextField
          required
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Typography data-cy="email" variant="subtitle1">And your email?</Typography>
        <TextField
          required
          data
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
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
        />{" "}
      </form>
    </>
  );
};

export default Contact;