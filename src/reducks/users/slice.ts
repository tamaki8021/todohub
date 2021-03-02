import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from './types'
import { fetchUser } from './asyncThunk'

const initialState: UserState = {
  isSignedIn: false,
  uid: '',
  username: '',
}

//   email: '',
//   created_at: {nanoseconds: 0,
//     seconds: 0},
// updated_at: {  nanoseconds: 0,
//   seconds: 0},

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