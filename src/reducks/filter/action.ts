import { createAction } from "@reduxjs/toolkit"
// import { VisibilityFilterTypes } from "./types"

export const setFilter = createAction(
  "filter/set",
  (filter) =>  ({ payload: filter}) 
);