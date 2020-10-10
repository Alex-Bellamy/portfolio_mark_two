import React, { useEffect, useState } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    let response = await axios.get("./data/projects.json");
    setProjects(response.data);
  };

  const useStylesProjects = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(3),
          width: theme.spacing(52),
          height: theme.spacing(45),
        },
      },
    })
  );

  const useStylesOtherProjects = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(3),
          width: theme.spacing(168),
          height: theme.spacing(15),
        },
      },
    })
  );

  const useStylesProjectOne = makeStyles((theme: Theme) => ({
    paper: {
      backgroundImage: `url(${"images/bidSpace.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  }));

  const useStylesProjectTwo = makeStyles((theme: Theme) => ({
    paper: {
      backgroundImage: `url(${"images/rockPaperScissors.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  }));

  const useStylesProjectThree = makeStyles((theme: Theme) => ({
    paper: {
      backgroundImage: `url(${"images/newsOnRails.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  }));

  const useStylesProjectsOther = makeStyles((theme: Theme) => ({
    paper: {
      backgroundImage: `url(${"images/otherProjects.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  }));

  const projectsClasses = useStylesProjects();
  const otherProjectsClasses = useStylesOtherProjects();
  const projectOneClass = useStylesProjectOne();
  const projectTwoClass = useStylesProjectTwo();
  const projectThreeClass = useStylesProjectThree();
  const projectsOtherClass = useStylesProjectsOther();

  return (
    <>
      <Typography
        id="projects."
        data-cy="title"
        variant="h1"
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        projects.
      </Typography>
      <div className={projectsClasses.root}>
        <Paper
          className={projectOneClass.paper}
          variant="outlined"
          id="projectOne"
        />
        <Paper
          className={projectTwoClass.paper}
          variant="outlined"
          id="projectTwo"
        />
        <Paper
          className={projectThreeClass.paper}
          variant="outlined"
          id="projectThree"
        />
      </div>
      <div className={otherProjectsClasses.root}>
        <Paper
          className={projectsOtherClass.paper}
          variant="outlined"
          id="otherProjects"
        />
      </div>
    </>
  );
};

export default Projects;
