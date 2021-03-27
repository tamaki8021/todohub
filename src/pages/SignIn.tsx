import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { Link } from "react-router-dom";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { TextProps } from "../components/UIkit/TextField";
import { ButtonProps } from "../components/UIkit/PrimaryButton";
import { signIn } from "../reducks/users/operations";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    padding: '1rem',
  },
  button: {
    textAlign: 'center',
    padding: '1rem 3rem',
    [theme.breakpoints.only('xs')]: {
      padding: '1rem'
    }
  },
}))

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
  const dispatch = useAppDispatch();
  const classes = useStyles()

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
      <Card className={classes.card}>
        <CardContent>
          <Title />
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
        </CardContent>
        <CardActions>
          <div className={classes.button}>
            <Button
              label={"ログインする"}
              onClick={() => dispatch(signIn(email, password))}
            />

            <div className="module-spacer--medium"></div>

            <Link to="signup">アカウントをお持ちでない方はこちら</Link>

            <div className="module-spacer--small"></div>

            <Link to="signin/reset">パスワードをお忘れの方はこちら</Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default SignIn;
