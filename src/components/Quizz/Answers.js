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
      <FormControl><RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.id}
            name={option.option}
            
            onChange={(e) => handleChange(e, index)}
            control={<Radio  />}
        
            label={option.option}
          />
        ))}{" "}</RadioGroup>
      </FormControl>
    </div>
  );
}

export default Answers;
