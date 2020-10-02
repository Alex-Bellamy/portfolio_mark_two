import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import "fontsource-roboto";
import { Link } from "react-scroll";

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
              <Link
                data-cy="button"
                activeClass="active"
                to="projects."
                spy={true}
                smooth={true}
                offset={-1}
                duration={1500}
              >
                projects.
              </Link>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper data-cy="title" className={classes.paper}>
              <Link
                data-cy="button"
                activeClass="active"
                to="about."
                spy={true}
                smooth={true}
                offset={-1}
                duration={1500}
              >
                about.
              </Link>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper data-cy="title" className={classes.paper}>
              <Link
                data-cy="button"
                activeClass="active"
                to="contact."
                spy={true}
                smooth={true}
                offset={-1}
                duration={1500}
              >
                contact.
              </Link>
            </Paper>
          </Grid>
        </Grid>
        <Typography
          data-cy="title"
          variant="h4"
          gutterBottom
          style={{
            color: primary,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          alex bellamy :fullStack_webDeveloper <br />
          <i
            id="linkedin-header-icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/alex-bellamy-0237441b4/")
            }
            className="fa fa-linkedin fa"
            aria-hidden="true"
          />
          <i
            id="github-header-icon"
            onClick={() => window.open("https://github.com/Alex-Bellamy")}
            className="fa fa-github fa"
            aria-hidden="true"
          />{" "}
          <br />
          <ExpandMoreTwoToneIcon
            style={{
              color: primary,
              fontSize: 50,
              fontWeight: "bold",
            }}
          />
        </Typography>
      </div>
    </>
  );
};

export default Header;