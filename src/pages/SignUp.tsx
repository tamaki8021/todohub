import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { Link } from "react-router-dom";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { TextProps } from "../components/UIkit/TextField";
import { ButtonProps } from "../components/UIkit/PrimaryButton";
import { signUp } from "../reducks/users/operations";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "0 auto",
      maxWidth: "400px",
      padding: "170px 0 195px",
      height: "auto",
    },
    card: {
      padding: "1rem",
    },
    button: {
      textAlign: "center",
      padding: "1rem 3rem",
      [theme.breakpoints.only("xs")]: {
        padding: "1rem",
      },
    },
  })
);

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
  const classes = useStyles();

  const [username, setUsername] = useState("");
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
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Title />
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
        </CardContent>
        <CardActions>
          <div className={classes.button}>
            <Button
              label={"アカウントを登録する"}
              onClick={() =>
                dispatch(signUp(username, email, password, confiramPassword))
              }
            />

            <div className="module-spacer--medium"></div>

            <Link to="signin">アカウントをお持ちの方はこちら</Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default SignUp;
