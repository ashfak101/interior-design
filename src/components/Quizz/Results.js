import { Box, Typography } from "@mui/material";
import React from "react";
import useData from "../Hooks/useData";

function Results() {
  const { res } = useData();

  let arr = [];
  let arr2 = [];
  res.forEach((element) => {
    element.options.forEach((option) => {
      if (element.right_answer === option.id && option.checked === true) {
        option.right = true;
        arr.push(option);
      }
    });
    arr2.push(element);
  });
  console.log(arr);
  console.log(arr2);
  console.log(res.length);
  return (
    <div>
      <Box>
        <Typography variant="h4">
          Your Score is {arr.length}/{res.length}
        </Typography>

        <Box>
          {arr2.map((element) => (
            <>
              <Typography>{element.question}</Typography>

              {element.options.map((option) => (
                <Box>
                  <Typography
                    sx={{
                      color: option.right && option.checked && "green" || option.checked && 'red'
                    }}
                  >
                    {option.option}
                  </Typography>
                </Box>
              ))}
            </>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Results;
