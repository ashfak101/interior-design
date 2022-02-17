import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

function Answers({ options, handleChange }) {
  return (
    <div>
      {options.map((option, index) => (
        <FormControlLabel
          control={
            <Checkbox
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          }
          label={option.option}
        />
      ))}
    </div>
  );
}

export default Answers;
