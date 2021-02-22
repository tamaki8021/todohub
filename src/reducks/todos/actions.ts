import { createAction, nanoid } from "@reduxjs/toolkit";
import { VisibilityFilterTypes } from "./types";

export const addTodo = createAction("todos/add", function prepare(contents: string) {
  return {
    payload: {
      contents,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  };
});

export const toggleTodo = createAction("todos/toggle", function prepare(id: string) {
  return { payload: { id } };
});

export const setFilter = createAction(
  "filter/set",
  function prepare(filter: VisibilityFilterTypes) {
    return { payload: { filter } };
  }
);

