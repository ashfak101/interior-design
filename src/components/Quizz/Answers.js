import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function Answers({ options, handleChange }) {
  return (
    <div>
      <FormControl>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.id}
            name={option.option}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
            control={<Checkbox />}
        
            label={option.option}
          />
        ))}{" "}
      </FormControl>
    </div>
  );
}

export default Answers;
