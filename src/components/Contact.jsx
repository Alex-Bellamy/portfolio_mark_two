import React from "react";
import EmailFacility from "./EmailFacility";
import Typography from "@material-ui/core/Typography";

const Contact = () => {
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
      <EmailFacility />
    </>
  );
};

export default Contact;