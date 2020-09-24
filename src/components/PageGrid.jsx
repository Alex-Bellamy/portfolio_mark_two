import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const PageGrid = () => {
  const useStylesHeader = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "100vh",
      boxShadow: "none",
      backgroundImage: `url(${"images/headerBackground.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: `calc(100vw + 24px)`,
      margin: -12,
      padding: 12,
    },
  }));

  const useStylesProjects = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "100vh",
      width: "100vw",
      boxShadow: "none",
    },
  }));

  const useStylesPhotoOne = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "75vh",
      width: "100vw",
      boxShadow: "none",
      backgroundImage: `url(${"images/photoOne.jpg"})`,
    },
  }));

  const useStylesAbout = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: { height: "50vh", width: "100vw", boxShadow: "none" },
  }));

  const useStylesPhotoTwo = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "100vh",
      width: "100vw",
      boxShadow: "none",
      backgroundImage: `url(${"images/photoTwo.jpg"})`,
    },
  }));

  const useStylesContact = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "100vh",
      width: "100vw",
      boxShadow: "none",
    },
  }));

  const useStylesFooter = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "5vh",
      width: "100vw",
      backgroundColor: "red",
      boxShadow: "none",
    },
  }));

  const classHeader = useStylesHeader();
  const classProjects = useStylesProjects();
  const classPhotoOne = useStylesPhotoOne();
  const classAbout = useStylesAbout();
  const classPhotoTwo = useStylesPhotoTwo();
  const classContact = useStylesContact();
  const classFooter = useStylesFooter();

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classHeader.paper}>
            <Header />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classProjects.paper}></Paper>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classPhotoOne.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classAbout.paper}>
            <br />
            <About />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classPhotoTwo.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classContact.paper}>contact.</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classFooter.paper}>
            <Footer />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default PageGrid;