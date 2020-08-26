import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const PageGrid = () => {
  const useStylesHeader = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const useStylesProjects = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const useStylesPhotoOne = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const useStylesAbout = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const useStylesPhotoTwo = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const useStylesContact = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const useStylesFooter = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classHeader.paper}>
            <Header />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classProjects.paper}>projects.</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classPhotoOne.paper}>photo 1 placeholder</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classAbout.paper}>about.</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classPhotoTwo.paper}>photo 2 placeholder</Paper>
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