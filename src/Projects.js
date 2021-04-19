import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
    description: `As a former gymnast and gymnastics coach and 
    a current weightlifter and swimmer I've always faced 
    the same problem: how can I easily track what I - 
    or my students - are doing? The old paper and pencil was 
    tedious (and killed trees) so I decided to build an app 
    where users can track exercises, create routines, and view
     progress. *Currently in development*`,
    link: "https://github.com/irenepham99/exercise-tracker",
  },
  {
    title: "Gene Attribution in Cancer Classification",
    technologies: "Pytorch",
    description: `Used a neural network to classify cancer data based on TCGA RNA-seq
     data. Then asked 2 questions: Can the most pertinent features/genes be determined
      using integrated gradients and vanilla gradients? How would performance be affected
       if training was only done on these features?`,
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
