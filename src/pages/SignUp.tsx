import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { Link } from 'react-router-dom'
import { PrimaryButton, TextInput } from "../components/UIkit";
import { TextProps } from "../components/UIkit/TextField";
import { ButtonProps } from "../components/UIkit/PrimaryButton";
import { signUp } from '../reducks/users/operations'

const Title = React.memo(() => (
  <h2 className="u-text__headline u-text-center">アカウント登録</h2>
));

const Input = React.memo<TextProps>(
  ({ fullWidth, label, multiline, required, rows, value, type, onChange }) => {
    return (
      <TextInput
        fullWidth={fullWidth}
        label={label}
        multiline={multiline}
        required={required}
        rows={rows}
        value={value}
        type={type}
        onChange={onChange}
      />
    );
  }
);

const Button = React.memo<ButtonProps>(({ label, onClick }) => {
  return <PrimaryButton label={label} onClick={onClick} />;
});

const SignUp = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confiramPassword, setConfiramPassword] = useState("");

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event) => {
      setConfiramPassword(event.target.value);
    },
    [setConfiramPassword]
  );

  return (
    <div className="c-section-container">
      <Title />

      <div className="module-spacer--medium"></div>

      <Input
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />

      <Input
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />

      <Input
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />

      <Input
        fullWidth={true}
        label={"パスワード（確認用）"}
        multiline={false}
        required={true}
        rows={1}
        value={confiramPassword}
        type={"password"}
        onChange={inputConfirmPassword}
      />

      <div className="module-spacer--medium"></div>

      <div className="u-text-center">
        <Button
          label={"アカウントを登録する"}
          onClick={() =>
            dispatch(signUp(username, email, password, confiramPassword))
          }
        />

        <div className="module-spacer--medium"></div>

        <Link to="signin">アカウントをお持ちの方はこちら</Link>
      </div>
    </div>
  );
};

export default SignUp;
