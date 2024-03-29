import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from 'history'

import rootReducer from '../reducers/rootReducer' 
import userSlice from '../users/slice'

export const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  todo: rootReducer,
  user: userSlice
})

export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history))
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
