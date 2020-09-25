import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img
        src="/images/cinnamonRollIcon.png"
        id="cinnamonroll-icon"
        alt="Cinnamon roll"
      />
      <Typography data-cy="content" variant="body2">
        brought to life with React & created by Alex Bellamy: Copyright ©2020
      </Typography>
    </div>
  );
};

export default Footer;