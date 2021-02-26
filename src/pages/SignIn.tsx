import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { TextProps } from "../components/UIkit/TextField";
import { ButtonProps } from "../components/UIkit/PrimaryButton";
// import { signIn } from '../reducks/users/operations'

const Title = React.memo(() => (
  <h2 className="u-text__headline u-text-center">ログイン</h2>
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

const SignIn = () => {
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="c-section-container">
      <Title />

      <div className="module-spacer--medium"></div>

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

      {/* <div className="u-text-center">
        <Button
          label={"ログインする"}
          onClick={() =>
            dispatch(signIn(email, password))
          }
        />
      </div> */}
    </div>
  );
};

export default SignIn;
