import React, {useState} from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};



const RatingsProvide = (props: any) => {
  const [hover, setHover] = useState(-1);
  const { value } = props

  return (
    <div>
      <Rating
        name="hover-feedback"
        value={props.value}
        precision={0.5}
        onChange={props.onChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
};

export default RatingsProvide;
