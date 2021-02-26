import { push } from 'connected-react-router'
import { auth, db, FirebaseTimestamp } from '../../firebase/index'

type userData = {
  username: string
  email: string
  password: string
  confiramPassword: string
}


export const signUp = (username: string, email: string, password: string, confiramPassword: string) => {
  return async (dispatch: any) => {
    if (username === "" || email === "" || password === "" || confiramPassword === "") {
      alert('必須項目が未入力です')
      return false
    }

    if (password !== confiramPassword) {
      alert('パスワードが一致しません。もう一度お試しください')
      return false
    }
    
    return auth.createUserWithEmailAndPassword(email, password).then(result => {
      const user = result.user

      if (user) {
        const uid = user.uid
        const timestamp = FirebaseTimestamp.now()

        const userInitialData = {
          created_at: timestamp,
          email: email,
          role: "customer",
          uid: uid,
          updated_at: timestamp,
          username: username
        }

        db.collection("user").doc(uid).set(userInitialData).then(() => dispatch(push("/")))
      }
    })
  }
}