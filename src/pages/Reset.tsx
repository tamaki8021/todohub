import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { Link } from "react-router-dom";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { TextProps } from "../components/UIkit/TextField";
import { ButtonProps } from "../components/UIkit/PrimaryButton";
import { resetPassword } from "../reducks/users/operations";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "0 auto",
      maxWidth: "400px",
      padding: "170px 0 365px",
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
  const classes = useStyles();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <div className={classes.container}>
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
        </CardContent>
        <CardActions>
          <div className={classes.button}>
            <Button
              label={"パスワードリセット"}
              onClick={() => dispatch(resetPassword(email))}
            />

            <div className="module-spacer--medium"></div>

            <Link to="/signin">ログイン画面へ戻る</Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Reset;
