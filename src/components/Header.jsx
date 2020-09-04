import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "none",
    fontSize: 60,
    color: "black",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>projects.</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>about.</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>contact.</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;