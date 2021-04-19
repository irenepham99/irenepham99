import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepper: {
    backgroundColor: theme.palette.background.paper,
  },
  mainText: {
    color: theme.palette.primary.contrastText,
  },
}));

function getSteps() {
  return [
    {
      title: "Bioinformatics Co-op - Seres Therapeutics",
      date: "January 2021 - Present",
    },
    {
      title: "Software Engineering Intern - ServiceNow - Platform UX",
      date: "May 2020 - August 2020",
    },
    {
      title: "Informatics Specialist Co-op - Genentech",
      date: "January 2020 - May 2020",
    },
    {
      title: "Software Development Intern - Bio-Rad Laboratories",
      date: "June 2019 - Aug 2019",
    },
    {
      title: "Software Engineering Co-op - Orig3n",
      date: "January 2019 - June 2019",
    },
    {
      title: "Undergraduate Resesarcher - Bajpayee Lab",
      date: "May 2018 – December 2018",
    },
    {
      title: "Senior Peer Health Educator",
      date: "September 2017 - September 2018",
    },
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ` • Spearheading the use of Neo4j to integrate bacterial NGS, taxonomic,
          phylogenetic, and public data into a graph database
          • Developing graph algorithms and optimizing graph queries to derive
          new associations between bacterial strains and their functional
          capabilities
          • Building a Flask API and R package for scientist to engage
          with the graph database`;
    case 1:
      return ` Designed and implemented a work flow tracking pipeline for acquisition, 
      quality checking, and transfer of biological data (NGS, flow cytometry, etc.) 
      from external vendors to internal research teams utilizing Python and GitHub
      • Visualized data and generated reports for the acquisition and processing bottlenecks 
      of over 9 types of data from over 60 external vendors in Tableau
      • Organized and lead a journal review session about a Nature review article explaining
       current trends in microbiome study design for an entire department of 30 people`;
    case 2:
      return `• Developed and tested an event capture feature that records information about
      requests in chatbot to live agent routing system using Java, JUnit, and Mockito
      • Presented feature to the Customer Service Management business unit
      which oversees one of the company’s top 3 SaaS subscription product and
      managed to promote the feature for higher review`;
    case 3:
      return `• Designed, implemented, and documented a UI that allows users to propose and
        approve of ddPCR assay designs using React, Redux, and Material UI
        • Collaborated with bioinformaticians to understand and translate user needs into a
        logical work flow
        • Utilized Jest, Enzyme, and Sinon to add >250 unit and integration tests, achieve
        >70% code coverage for all components, and thorough testing documentation`;
    case 4:
      return `• Implemented new features for an internal web application using Angular
       7 themed with PrimeNG in order to track stem cells for over 80,000 blood samples 
       for research purposes •  Debugged RESTful API services built on Java 8, SpringBoot, 
       and PostgresSQL`;
    case 5:
      return `• Collaborated with researchers to design and run experiments testing Avidin as a charged nanocarrier for sustained release of osteoarthritis drugs
      • Performed bioluminescent imaging of bovine intervertebral disc tissue using IVIS to measure diffusion
      • Harvested and maintained bovine nucleus pulposus tissue for experimental use`;
    case 6:
      return `• Teach weekly workshops about communication, consent, and contraception to local underprivileged high schoolers in the Boston area
      • Attend weekly meetings to receive performance feedback, discuss challenges, and receive additional training on relevant social and health issues faced by teens`;
    default:
      return "Unknown step";
  }
}

const Timeline = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepClick = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        style={{ backgroundColor: "#1F2833" }}
        orientation="vertical"
      >
        {steps.map(({ title, date }, index) => (
          <Step key={title}>
            <StepLabel onClick={handleStepClick(index)}>
              <Typography variant="h6" className={classes.mainText}>
                <b>{title}</b>
                <br />
                <Typography variant="body2" className={classes.mainText}>
                  {date}
                </Typography>
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body" className={classes.mainText}>
                {getStepContent(index)}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <IconButton
                    disabled={activeStep === 0}
                    color="primary"
                    onClick={handleBack}
                  >
                    <ArrowUpwardIcon />
                  </IconButton>
                  <IconButton
                    disabled={activeStep === steps.length - 1}
                    color="primary"
                    onClick={handleNext}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Timeline;
