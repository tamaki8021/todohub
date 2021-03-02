import { createAsyncThunk } from "@reduxjs/toolkit"
import { auth, db } from "../../firebase"
import { push } from 'connected-react-router'
import { RootState, AppDispatch, AppThunk } from "../store/store"
import { signInAction } from "./slice"

interface UserCredential {
  email: string
  password: string
}

interface ThuncConfig {
  // state: RootState;
  dispatch: AppDispatch;
}

// <UserState,UserCredential, ThuncConfig>



export const fetchUser = createAsyncThunk('user/fetch', 
async ({email, password}: UserCredential, {dispatch}) => {

    if (email === "" || password === "" ) {
      alert("必須項目が未入力です")
      return false
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user
        
        if (user) {
          const uid = user.uid
  
          return db.collection("users").doc(uid).get()
            .then(snapshot => {
              const data = snapshot.data()
              
              console.log(data);
            })
        }
      })
  dispatch(push('/todo'))
})