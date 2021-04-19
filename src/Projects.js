import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import workoutTrackerLogo from "./workout_tracker.png";
import TCGA from "./TCGA.png";
import Grid from "@material-ui/core/Grid";
import PlagarismDetector from "./plagarism_detector.png";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    textAlign: "center",
    color: theme.palette.primary.light,
    background: theme.background.paper,
  },
  mainText: {
    color: theme.palette.primary.contrastText,
  },
  secondaryColor: {
    color: theme.palette.primary.main,
  },
}));

const projects = [
  {
    title: "Workout Tracker",
    technologies: "React w/ Redux, MaterialUI, Flask",
    description:
      "Users can track exercises, create routines, and view progress. *Currently in progress",
    link: "https://github.com/irenepham99/exercise-tracker",
  },
  {
    title: "Gene Attribution in Cancer Classification",
    technologies: "Pytorch",
    description: "Applied integrated gradients to a neural network ",
    link: "https://github.com/irenepham99/TCGA",
  },
  {
    title: "Plagarism Detector",
    technologies: "Typescript, Express, React, Material UI",
    description:
      "Lead a team of peers in developing an Levenshtein distance based plagarism detection algorithm and user interface.",
    link: "https://github.com/irenepham99/plagarism_detector",
  },
  {
    title: "Personal Website",
    technologies: "React, Material UI",
    description: "This is the website you are looking at! :) ",
    link: "https://github.com/irenepham99/personal-site",
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center" spacing={1}>
      {projects.map(({ title, technologies, description, link }) => {
        return (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    className={classes.mainText}
                    component="p"
                  >
                    {description}
                  </Typography>
                  <Typography
                    variant="overline"
                    display="block"
                    className={classes.mainText}
                  >
                    {technologies}
                  </Typography>
                  <a href={link}>
                    <Typography
                      variant="caption"
                      className={classes.secondaryColor}
                    >
                      {link}
                    </Typography>
                  </a>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Projects;
