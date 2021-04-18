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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

// personal site github link
// plagarism detector,
// picture description and technologies list

//include lab work at bajpayee lab
//senior peer health exchange
const projects = [
  {
    img: (
      <img
        src={workoutTrackerLogo}
        alt="Logo"
        style={{ width: "300px", height: "300px" }}
      />
    ),
    title: "Workout Tracker",
    technologies: "React w/ Redux, MaterialUI, Flask",
    description:
      "Users can track exercises, create routines, and view progress. *Currently in progress",
    link: "https://github.com/irenepham99/exercise-tracker",
  },
  {
    img: (
      <img
        src={TCGA}
        alt="TCGA Logo"
        style={{ width: "300px", height: "300px" }}
      />
    ),
    title: "Gene Attribution in Cancer Classification",
    technologies: "Pytorch",
    description: "Applied integrated gradients to a neural network ",
    link: "https://github.com/irenepham99/TCGA",
  },
  {
    img: (
      <img
        src={PlagarismDetector}
        alt="Plagarism Detector Logo"
        style={{ width: "400px", height: "200px" }}
      />
    ),
    title: "Plagarism Detector",
    technologies: "Typescript, Express, React, Material UI",
    description:
      "Lead a team of peers in developing an Levenshtein distance based plagarism detection algorithm and user interface.",
    link: "https://github.com/irenepham99/plagarism_detector",
  },
  {
    img: null,
    title: "Personal Website",
    technologies: "React, Material UI",
    description: "This is the website you are looking at! :) ",
    link: "https://github.com/irenepham99/personal-site",
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {projects.map(({ img, title, technologies, description, link }) => {
        return (
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardActionArea>
                {img}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <b>{title}</b>
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p">
                    {description}
                  </Typography>
                  <Typography
                    variant="overline"
                    display="block"
                    color="textSecondary"
                  >
                    {technologies}
                  </Typography>
                  <a href={link}>
                    <Typography variant="caption" color="textSecondary">
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
