import { createReducer } from "@reduxjs/toolkit"
import * as actions from "./action"
import { VISIBILITY_FILTERS } from "../../constants"
import { VisibilityFilterTypes } from "../todos/types"

const initialState: VisibilityFilterTypes = VISIBILITY_FILTERS.ALL

export const visibilityFilterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setFilter, (state, action) => {
        return action.payload.filter
    })
    .addDefaultCase((state,action) => {
      return state
    })
})