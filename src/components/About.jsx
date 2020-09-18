import React from "react";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <>
      <Typography
        data-cy="title"
        variant="h1"
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        about.
      </Typography>
      <Typography
        data-cy="content"
        variant="h6"
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        A full stack software developer turning bold ideas into reality and
        striving for that extra mile. Originally from London, a
        konkursförvaltare (business recovery and insolvency specialist) and
        property developer, it was time to change direction and pursue my dream
        of bringing applications to life. <br />
        Through intensive real life simulated situations, hundreds of hours of
        grit and determination I have built skills in some of today’s most in
        demand technologies including React & React Native, NodeJS as well as
        Ruby on Rails. <br />
        Check out my projects, if you like what you see or simply want some
        friendly advice don’t hesitate to contact me.
      </Typography>
    </>
  );
};

export default About;