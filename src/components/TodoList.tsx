import React from "react";
import { useAppSelector } from "../reducks/store/hooks";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles'
import TodoItems from "./TodoItems";
import { getTodos } from "../reducks/todos/selectors";

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: '100%',
    width: '80%'
  }
})

const TodoList = () => {
  const classes = useStyles()
  const todos = useAppSelector(getTodos);

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="center" >
        {todos.length <= 0
          ? "Todoはありません。"
          : todos.map((todo) => (
              <Grid item>
                <TodoItems key={todo.id} todo={todo} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default TodoList;
