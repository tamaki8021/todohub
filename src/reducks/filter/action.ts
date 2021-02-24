import { createAction } from "@reduxjs/toolkit"
// import { VisibilityFilterTypes } from "../todos/types"

export const setFilter = createAction(
  "filter/set",
  (filter) =>  ({ payload: filter}) 
);