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
      state = action.payload
    },
    signOutAction: (state) => {
      state.isSignedIn = false
    }
  },
})

export const { signInAction, signOutAction } = userSlice.actions

export default userSlice.reducer