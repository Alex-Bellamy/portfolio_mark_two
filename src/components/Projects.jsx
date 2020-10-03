import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Projects = () => {
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

  const projectsClasses = useStylesProjects();
  const otherProjectsClasses = useStylesOtherProjects();

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
        <Paper variant="outlined" id="projectOne" />
        <Paper variant="outlined" id="projectTwo" />
        <Paper variant="outlined" id="projectThree" />
      </div>
      <div className={otherProjectsClasses.root}>
        <Paper variant="outlined" id="otherProjects" />
      </div>
    </>
  );
};

export default Projects;