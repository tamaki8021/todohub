import React, { useState } from "react";
import { TodoItem } from "../../reducks/todos/types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  TextField,
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import RatingsProvide from "../UIkit/RatingsProvide";
import { useAppDispatch } from "../../reducks/store/hooks";
import { changeTodo, doneTodo } from "../../reducks/todos/operations";
import { returnCodeToBr } from "../../functions/common";

type Props = {
  todo: TodoItem;
};

const useStyles = makeStyles({
  root: {
    width: 275,
    backgroundColor: "rgba(255,245,145,1)",
  },
  cardAction: {
    justifyContent: "space-between",
  },
});

const TodoItems: React.FC<Props> = ({ todo }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [editContents, setEditContents] = useState("");
  const [value, setValue] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContents(e.target.value);
  };

  const handleEdit = async () => {
    const newTodo = { ...todo };
    newTodo.contents = editContents;

    await dispatch(changeTodo(newTodo));
    setEditContents("");
  };

  const handleRatings = (
    e: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
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
          <Typography component="p">{returnCodeToBr(todo.contents)}</Typography>
        )}
      </CardContent>
      <CardActions className={classes.cardAction}>
        <RatingsProvide value={value} onChange={handleRatings} />
        {editContents !== "" ? (
          <div>
            <Tooltip title="Update" placement="top">
              <IconButton onClick={handleEdit}>
                <SystemUpdateAltIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel" placement="top">
              <IconButton onClick={() => setEditContents("")}>
                <HighlightOffIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <Tooltip title="Completed" placement="top">
            <IconButton
              onClick={() => {
                dispatch(doneTodo(todo));
              }}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};

export default TodoItems;
