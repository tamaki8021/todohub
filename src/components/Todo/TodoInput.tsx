import React, { useState } from "react";
import { useAppDispatch } from "../../reducks/store/hooks";
import { createTodo } from '../../reducks/todos/operations'
import { TextField, FormControl, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: '0 auto',
      maxWidth: '400px',
      padding: '0 30px'
    },
    form: {
      margin: "1rem",
      minWidth: 275,
    },
    button: {
      margin: "1rem 1rem 1rem 12rem ",
    },
  })
);

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    await dispatch(createTodo({ contents: input,
      completed: false,}))
    setInput("");
  };

  //Enterでの処理
  // const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.keyCode === 13) {
  //     handleSubmit();
  //   }
  // };

  return (
    <div className={classes.container}>
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
        size="large"
        color="primary"
        // disableElevation
        endIcon={<AddToPhotosIcon />}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
