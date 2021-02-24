import React, { useState } from "react";
import { TodoItem } from "../reducks/todos/types";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, IconButton, Typography, TextField } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RatingsProvide from "./UIkit/RatingsProvide";
import { useAppDispatch } from "../reducks/store/hooks";
import { toggleTodo, editTodo } from "../reducks/todos/slice";
import { returnCodeToBr } from '../functions/common'

type Props = {
  todo: TodoItem;
};

const useStyles = makeStyles({
  root: {
    width: 275,
    backgroundColor: 'rgba(255,245,145,1)'
  },
  cardAction: {
    justifyContent: 'space-between'
  }
});

const TodoItems: React.FC<Props> = ({ todo }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [editContents, setEditContents] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContents(e.target.value)
  }

  const handleEdit = () => {
    const newTodo = { ...todo };
    newTodo.contents = editContents;

    dispatch(editTodo(newTodo));
    setEditContents("");
  };

  return (
    <Card className={classes.root} >
      <CardContent onClick={() => setEditContents(todo.contents)}>
        {editContents !== "" ? (
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Edit task"
            value={editContents}
            multiline
            rows={4}
            onChange={handleChange}
          />
        ) : (
          <Typography component="p" >{returnCodeToBr(todo.contents)}</Typography>
        )}
      </CardContent>
      <CardActions className={classes.cardAction} >
        <RatingsProvide />
        {editContents !== "" ? (
          <div>
          <IconButton onClick={handleEdit} >
            <SystemUpdateAltIcon />
          </IconButton>
          <IconButton onClick={() => setEditContents('')}>
            <HighlightOffIcon />
          </IconButton>
          </div>
        ) : (
        <IconButton
          onClick={() => {
            dispatch(toggleTodo(todo));
          }}
        >
          <CheckCircleOutlineIcon />
        </IconButton>
        )
        }
      </CardActions>
    </Card>
  );
};

export default TodoItems;
