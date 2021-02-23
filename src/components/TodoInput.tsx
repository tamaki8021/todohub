import React, { useState } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { addTodo } from "../reducks/todos/todoSlice";
import { TextField, FormControl, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    button: {},
  })
);

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div>
      <FormControl>
        <TextField
          label="Todo"
          value={input}
          placeholder="New Task?"
          multiline
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onKeyDown={keyPress}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        variant="contained"
        disabled={!input}
        endIcon={<AddToPhotosIcon />}
        onClick={handleSubmit}
      >
        追加
      </Button>
    </div>
  );
};

export default AddTodo;
