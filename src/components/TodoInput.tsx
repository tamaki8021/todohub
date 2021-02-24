import React, { useState } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { addTodo } from "../reducks/todos/slice";
import { TextField, FormControl, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      margin: '1rem',
      minWidth: 275
    },
    button: {
      margin: '1rem 1rem 1rem 12rem ',
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
      "&:hover": {backgroundColor: theme.palette.primary.light}
    },
  })
);

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles()

  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  // const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.keyCode === 13) {
  //     handleSubmit();
  //   }
  // };

  return (
    <div className="c-section-container">
      <FormControl className={classes.form}>
        <TextField
          label="Todo"
          value={input}
          placeholder="New Task?"
          multiline
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          // onKeyDown={keyPress}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        className={classes.button}
        variant="contained"
        disabled={!input}
        size='large'
        disableElevation
        endIcon={<AddToPhotosIcon />}
        onClick={handleSubmit}
      >
        追加
      </Button>
    </div>
  );
};

export default AddTodo;
