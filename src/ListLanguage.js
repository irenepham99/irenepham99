import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

const ListLanguage = () => {
  const languages = [
    { name: "Python", proficiency: 80 },
    { name: "Javascript /Typescript", proficiency: 70 },
    { name: "Java", proficiency: 70 },
    { name: "React w/ Redux", proficiency: 90 },
    { name: "SQL", proficiency: 70 },
    { name: "Neo4j /Cypher", proficiency: 90 },
    { name: "Bash", proficiency: 60 },
    { name: "Flask", proficiency: 50 },
    { name: "R", proficiency: 30 },
    { name: "Angular", proficiency: 30 },
    { name: "SpringBoot", proficiency: 30 },
  ];
  return (
    <div>
      <Typography variant="h6" gutterbottom>
        Languages and Frameworks
      </Typography>
      <Grid container justify="center" spacing={4}>
        {languages.map(({ name, proficiency }) => {
          return (
            <Grid item xs={12}>
              <LinearProgressLabeled value={proficiency} name={name} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const LinearProgressLabeled = ({ value, name }) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={0}>
      <Grid item xs={2}>
        <Typography variant="body2" color="textSecondary">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <LinearProgress variant="determinate" value={value} />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" color="textSecondary">
          {`${value}%`}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Progress = ({ value, name }) => {
  return (
    <Grid container justify="center" spacing={0}>
      <Grid item xs={12}>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            color="primary"
            variant="determinate"
            value={value}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">
              {`${value}%`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body">{name}</Typography>
      </Grid>
    </Grid>
  );
};

export default ListLanguage;
