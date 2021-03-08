import React from "react";
import { useHistory, Link } from "react-router-dom";
import { push } from 'connected-react-router'
import { useAppDispatch } from "../reducks/store/hooks";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(-135deg, #0000A1, #B9EDF8)',
    }
}))

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles()
  // const { push } = useHistory();

  // const unauthorizedView = (
  //   <>
  //     <p>アプリケーションを利用するにはログインして下さい</p>
  //     <Link to="/login">ログインページへ</Link>
  //   </>
  // )

  // const authorizedView = (
  //   <>
  //     <p>利用するアプリケーションを選択して下さい</p>
  //     <Button color="primary" onClick={() => push('/todo')}>
  //       Todoアプリ
  //     </Button>
  //   </>
  // )

  return (
    <div className={classes.root}>
      <div>
        <h1 className="u-text__headline u-text-center">Home</h1>
        <button color="primary" onClick={() => dispatch(push("/signin"))}>
          ログインする
        </button>
        {/* {currentUser.username ? authorizedView : unauthorizedView} */}
      </div>
    </div>
  );
};

export default SignIn;
