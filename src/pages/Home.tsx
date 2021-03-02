import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { useAppDispatch } from "../reducks/store/hooks";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();

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
    <div>
      <div>
        <h1 className="py-2">Home</h1>
        <button color="primary" onClick={() => push("/signin")}>
          ログインする
        </button>
        {/* {currentUser.username ? authorizedView : unauthorizedView} */}
      </div>
    </div>
  );
};

export default SignIn;
