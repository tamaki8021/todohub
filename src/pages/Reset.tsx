import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { Link } from "react-router-dom";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { TextProps } from "../components/UIkit/TextField";
import { ButtonProps } from "../components/UIkit/PrimaryButton";
import { resetPassword } from "../reducks/users/operations";

const Title = React.memo(() => (
  <h2 className="u-text__headline u-text-center">パスワードリセット</h2>
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

const Reset: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
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

      <div className="module-spacer--medium"></div>

      <div className="u-text-center">
        <Button
          label={"パスワードリセット"}
          onClick={() => dispatch(resetPassword(email))}
        />

        <div className="module-spacer--medium"></div>

        <Link to="/signin">ログイン画面へ戻る</Link>
      </div>
    </div>
  );
};

export default Reset;
