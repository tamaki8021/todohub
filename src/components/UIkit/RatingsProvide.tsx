import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels: { [index: string]: string } = {
  1: "Useless+",
  2: "Poor+",
  3: "Ok+",
  4: "Good+",
  5: "Excellent+",
};

const RatingsProvide = (props: any) => {
  const { value, onChange, disabled } = props;

  const [hover, setHover] = useState(-1);

  const handleChange = (value: any) => {
    onChange(value);
  };

  return (
    <div>
      <Rating
        value={value}
        disabled={disabled}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        onChange={(e, newvalue) => handleChange(newvalue)}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
};

export default RatingsProvide;
