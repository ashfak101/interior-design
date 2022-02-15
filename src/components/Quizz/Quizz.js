import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];
function Quizz() {
  const theme = useTheme();
  const [quizs, setQuizs] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxQuizs = quizs.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    fetch("/quizz.json")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);
  const handleCheckAns = (id) => {
    if (quizs[activeStep].right_answer === id) {
      alert("Correct");
      console.log(id);
    }
  };
  return (
    <Box sx={{ width: "690px", m: "0 auto" }}>
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        ></Paper>

        <Box>
          <Typography>{quizs[activeStep]?.question}</Typography>
        </Box>
        <Box>
          {quizs[activeStep]?.options?.map((option) => (
            <Button onClick={() => handleCheckAns(option.id)}>
              {option.option}
            </Button>
          ))}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxQuizs}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxQuizs - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default Quizz;
