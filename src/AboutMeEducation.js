import Card from "@material-ui/core/Card";
import logo from "./static/NEU_logo.png";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.primary.light,
    background: theme.background.paper,
  },
  mainText: {
    color: theme.palette.primary.contrastText,
  },
}));

const AboutMeEducation = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterbottom>
            About Me
          </Typography>
          <Typography className={classes.mainText} variant="body" gutterbottom>
            <br />
            I'm a graduating senior from Northeastern University looking for
            jobs in software engineering.
            <br />
            <br />
            My current goal – simply put – is to learn as much as I can!
            Specifically, I strive to increase my knowledge and practical skill
            set in software and web development. I also enjoy poking around in
            bioinformatics.
            <br />
            <br />
            During my free time, I enjoy weightlifting, hiking, baking, swimming
            and reading! My favorite foods include chocolate, cheese, and fruits
            - in any combination!
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.paper}>
          <Typography variant="h4" gutterbottom>
            Education
          </Typography>
          <div style={{ padding: "10px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <Typography className={classes.mainText} variant="body">
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
  );
};

export default AboutMeEducation;
