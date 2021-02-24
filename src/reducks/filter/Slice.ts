import { createSlice } from "@reduxjs/toolkit";
import { VISIBILITY_FILTERS } from "../../constants";
import { VisibilityFilterTypes } from "../todos/types";

const initialState: VisibilityFilterTypes = VISIBILITY_FILTERS.ALL;

const visibilityFilterSlice = createSlice({
  name: "visibilityFilters",
  initialState,
  reducers: {
    setFilter (state, action) {
      return action.payload
    }
  },
});

export const { setFilter } = visibilityFilterSlice.actions

export default visibilityFilterSlice.reducer
