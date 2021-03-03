import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from './types'

const initialState: UserState = {
  isSignedIn: false,
  uid: '',
  username: '',
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInAction: (state, action: PayloadAction<UserState>) => {
      state.isSignedIn = action.payload.isSignedIn
      state.uid = action.payload.uid
      state.username = action.payload.username
    },
    signOutAction: (state) => {
      state.isSignedIn = false
      state.uid = ''
      state.username = '' 
    }
  },
})

export const { signInAction, signOutAction } = userSlice.actions

export default userSlice.reducer