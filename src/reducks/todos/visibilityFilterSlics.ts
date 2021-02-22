import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VISIBILITY_FILTERS } from "../../constants";
import { VisibilityFilterTypes } from "./types";

const initialState: VisibilityFilterTypes = VISIBILITY_FILTERS.ALL;

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    // setFilter: (action: PayloadAction<{filter: VisibilityFilterTypes}>) => action.payload.filter
    // setFilter: {
    //   reducer: (
    //     action: PayloadAction<{ filter: VisibilityFilterTypes }>
    //   ) =>  action.payload.filter,
    //   prepare: (filter: VisibilityFilterTypes) => {
    //     return { payload: { filter } };
    //   },
    // },
  },
});

// export const { setFilter } = visibilityFilterSlice.actions

export default visibilityFilterSlice.reducer
