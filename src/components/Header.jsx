import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";

const primary = grey[50];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(16),
    textAlign: "center",
    fontSize: 60,
    color: primary,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper data-cy="title" className={classes.paper}>
              projects.
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper data-cy="title" className={classes.paper}>
              about.
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper data-cy="title" className={classes.paper}>
              contact.
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;