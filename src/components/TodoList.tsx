import React from "react";
import { useAppSelector } from "../reducks/store/hooks";
import Grid from "@material-ui/core/Grid";
import TodoItems from "./TodoItems";
import { getTodos } from "../reducks/todos/selectors";

const TodoList = () => {
  const todos = useAppSelector(getTodos);

  return (
    <div>
      <Grid container spacing={3}  >
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
