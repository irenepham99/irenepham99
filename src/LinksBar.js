import GitHubIcon from "@material-ui/icons/GitHub";
import { DialogContent, DialogTitle, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import Dialog from "@material-ui/core/Dialog";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainText: {
    color: theme.palette.primary.contrastText,
  },
  secondaryColor: {
    color: theme.palette.primary.main,
  },
}));

const LinksBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prevOpenState) => !prevOpenState);
  };
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item xs={1}>
        <a href="https://github.com/irenepham99">
          <IconButton>
            <GitHubIcon className={classes.mainText} />
          </IconButton>
        </a>
      </Grid>
      <Grid item xs={1}>
        <a href="https://www.linkedin.com/in/irenepham99/">
          <IconButton>
            <LinkedInIcon className={classes.mainText} />
          </IconButton>
        </a>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={toggleOpen}>
          <MailIcon className={classes.mainText} />
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

export default LinksBar;
