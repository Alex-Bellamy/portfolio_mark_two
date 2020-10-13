import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    let response = await axios.get("./data/about.json");
    setAbout(response.data);
  };
  
  return (
    <>
      <Typography
        id="about."
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
        id="aboutContent"
        data-cy="content"
        variant="h6"
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {about.aboutParaOne} <br />
        {about.aboutParaTwo} <br />
        {about.aboutParaThree}
      </Typography>
    </>
  );
};

export default About;