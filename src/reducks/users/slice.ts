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
    }
  },
})

export const { signInAction } = userSlice.actions

export default userSlice.reducer