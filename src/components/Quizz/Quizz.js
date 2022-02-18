import React, { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Answers from "./Answers";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useData from "../Hooks/useData";
const initialState = {
  loading: false,
  quiz:[],
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((element) => {
        element.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answers":
      const questions = _.cloneDeep(state);
      questions[action.question_id].options[action.option_id].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

function Quizz() {
  const [quiz, dispatch] = useReducer(reducer, initialState);
  const {res,setRes}=useData()
  // const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [quizs, setQuizs] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  // const [activeStep, setActiveStep] = React.useState(0);
  // const maxQuizs = quizs.length;

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  useEffect(() => {
    setLoading(true);
    fetch("/quizz.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data);
        setLoading(false);
      });
    setLoading(false);
  }, []);
  // const handleCheckAns = (id) => {
  //   if (quizs[activeStep].right_answer === id) {
  //     alert("Correct");
  //     console.log(id);
  //   }
  // };
  useEffect(() => {
    dispatch({ type: "questions", value: quizs });
  }, [quizs, setQuizs]);
 

  const handleChange = (e, index) => {
    dispatch({
      type: "answers",
      question_id: currentQ,
      option_id: index,
      value: e.target.checked,
    });
  };
  const handleNext = () => {
    if (currentQ + 1 < quizs.length) {
      setCurrentQ((prev) => prev + 1);
    }
  };
  const handlesumit = () => {
    navigate({
      pathname: `/results`,
      state: {quiz
        ,},
    });
  };
  setRes(quiz)
  console.log(quiz);
  return (
    <Box sx={{ width: "690px", m: "0 auto" }}>
      {/* <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
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
      </Box> */}
      {loading && <Box>Loading...</Box>}
      {Array.isArray(quiz) && quiz.length && (
        <>
          <Typography>{quiz[currentQ].question}</Typography>
          <Answers
            options={quiz[currentQ].options}
            handleChange={handleChange}
          />
        </>
      )}
      <Box>
        <Button onClick={handleNext}>Next</Button>
      </Box>
      <Button onClick={handlesumit}>Submit</Button>
    </Box>
  );
}

export default Quizz;
