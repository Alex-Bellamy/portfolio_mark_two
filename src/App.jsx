import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {},
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Header />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>projects.</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>photo 1 placeholder</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>about.</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>photo 2 placeholder</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>contact.</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div></div>
    </>
  );
};

export default App;