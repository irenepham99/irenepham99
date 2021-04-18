import "./App.css"; //use App-logo
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import logo from "./NEU_logo.jpg";
import Timeline from "./Timeline";
import GitHubIcon from "@material-ui/icons/GitHub";
import { DialogContent, DialogTitle, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import Dialog from "@material-ui/core/Dialog";
import { useState } from "react";
import ListLanguage from "./ListLanguage";
import Projects from "./Projects";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "rgb(66, 203, 245)",
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const LinksBar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prevOpenState) => !prevOpenState);
  };
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item xs={1}>
        <a href="https://github.com/irenepham99">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </Grid>
      <Grid item xs={1}>
        <a href="https://www.linkedin.com/in/irenepham99/">
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </a>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={toggleOpen}>
          <MailIcon />
        </IconButton>
        <Dialog onClose={toggleOpen} open={open}>
          <DialogTitle>Contact Information:</DialogTitle>
          <DialogContent style={{ padding: "20px" }}>
            <Typography variant="body" gutterbottom>
              <b>Email:</b> irene.pham99@gmail.com
            </Typography>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h1">Irene Pham</Typography>
            <LinksBar />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h3">Experiences</Typography>
            <Timeline />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterbottom>
              Projects
            </Typography>
            <Projects />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <ListLanguage />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterbottom>
              About Me
            </Typography>
            <Typography variant="body" gutterbottom>
              <br />
              Hi! I'm Irene, a graduating senior from Northeastern University
              looking for jobs in software engineering or bioinformatics.
              <br />
              <br />
              My current goal – simply put – is to learn as much as I can!
              Specifically, I strive to increase my knowledge and practical
              skill set in software development, web application development,
              bioinformatics, and genetics and molecular biology.
              <br />
              <br />
              During my free time, I enjoy hiking, baking, swimming and reading!
              My favorite foods include chocolate, cheese, and fruits - in any
              combination! Feel free to reach out to me at
              pham.i@northeastern.edu
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <Typography variant="h5">Education</Typography>
            <div>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <Typography variant="body">
              <b>Northeastern University</b>
              <br />
              Bachelors of Science
              <br />
              Computer Science / Biology
              <br />
              3.8 / 4.0
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

// function App() {
//   const classes = useStyles();
//   return (
//     <div className="App">
//       <Timeline align="alternate">
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot />
//             <TimelineConnector classes={{ root: classes.root }} />
//           </TimelineSeparator>
//           <TimelineContent>Eat</TimelineContent>
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot color="primary" />
//             <TimelineConnector classes={{ root: classes.root }} />
//           </TimelineSeparator>
//           <TimelineContent>Code</TimelineContent>
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot color="secondary" />
//             <TimelineConnector classes={{ root: classes.root }} />
//           </TimelineSeparator>
//           <TimelineContent>Sleep</TimelineContent>
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot />
//           </TimelineSeparator>
//           <TimelineContent>Repeat</TimelineContent>
//         </TimelineItem>
//       </Timeline>
//     </div>
//   );
// }

export default App;
