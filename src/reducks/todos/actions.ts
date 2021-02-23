import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTodo = createAction("todos/add", (contents: string) => {
  return {
    payload: {
      contents,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  };
});

export const toggleTodo = createAction("todos/toggle", (id: string) => {
  return { payload: { id } };
});



