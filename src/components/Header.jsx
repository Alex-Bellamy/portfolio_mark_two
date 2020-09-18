import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import "fontsource-roboto";

const primary = grey[50];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(16),
    textAlign: "center",
    fontSize: 70,
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
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: primary,
            fontWeight: "bold",
            textAlign: "center", 
          }}
        >
          alex bellamy :fullStack_webDeveloper <br />
          <ExpandMoreTwoToneIcon
            style={{
              color: primary,
              fontSize: 50,
              fontWeight: "bold"
            }}
          />
        </Typography>
      </div>
    </>
  );
};

export default Header;