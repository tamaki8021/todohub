import { readConfigFile } from "typescript";
import React, {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from './reducks/store/hooks'
import { listenAuthState } from './reducks/users/operations'

const Auth = ({chirdren}: any) => {
  const dispatch = useAppDispatch()
  const isSignedIn = useAppSelector((state) => state.user.isSignedIn)

useEffect(() => {
  if (!isSignedIn) {
    dispatch(listenAuthState())
  }
}, [])

  if (!isSignedIn) {
    //listenAuthStateで'/signin'にリダイレクトされているからからのタグを返す
    return <></>
  } else {
    return chirdren
  }

}

export default Auth
