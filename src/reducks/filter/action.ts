import { createAction } from "@reduxjs/toolkit"

export const setFilter = createAction(
  "filter/set",
  (filter) => {
    return { payload: { filter } };
  }
);