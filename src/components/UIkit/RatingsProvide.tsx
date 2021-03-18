import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useAppDispatch } from "../../reducks/store/hooks";
import { valutionTodo } from "../../reducks/todos/operations";

const labels: { [index: string]: string } = {
  1: "Useless+",
  2: "Poor+",
  3: "Ok+",
  4: "Good+",
  5: "Excellent+",
};

const RatingsProvide = (props: any) => {
  const dispatch = useAppDispatch();
  const { id, values } = props;
  const [hover, setHover] = useState(-1);
  const [value, setValue] = useState<number | null>(values);

  return (
    <div>
      {values === 0 ? (
        <Rating
          name="hover-feedback"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            dispatch(valutionTodo({ newValue, id }));
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
      ) : (
        <Rating name="unique-rating" value={values} />
      )}
      {props.value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : props.value]}</Box>
      )}
    </div>
  );
};

export default RatingsProvide;
