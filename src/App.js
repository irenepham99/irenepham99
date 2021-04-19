import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Timeline from "./Timeline";
import ListLanguage from "./ListLanguage";
import Projects from "./Projects";
import LinksBar from "./LinksBar";
import AboutMeEducation from "./AboutMeEducation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.mainText}>
              Hi Everyone! I'm
            </Typography>
            <Typography variant="h1">Irene Pham</Typography>
            <LinksBar />
          </Paper>
        </Grid>
      </Grid>

      <AboutMeEducation />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Experiences</Typography>
            <Timeline />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <ListLanguage />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Projects />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
