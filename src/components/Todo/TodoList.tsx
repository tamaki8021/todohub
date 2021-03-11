import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../reducks/store/hooks";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TodoItems from "./TodoItems";
import { selectVisibleTodos } from "../../reducks/filter/selector";
import { fetchTodo } from '../../reducks/todos/operations'

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    maxWidth: "100%",
    width: "80%",
  },
});

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch()
  const State = useAppSelector((state) => state.todo);
  const Filter = useAppSelector((state) => state.todo.visibilityFilter);
  const todos = selectVisibleTodos(State, Filter);

  useEffect(() => {
    dispatch(fetchTodo())
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="center">
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
