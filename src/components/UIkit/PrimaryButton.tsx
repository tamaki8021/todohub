import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";

export type ButtonProps = {
  label: string,
  onClick: Function
}

const useStyles = makeStyles({
  "button": {
    backgroundColor: "#4dd0e1",
    color: "#000",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 256
  }
})

const PrimaryButton: React.FC<ButtonProps> = ({label, onClick}) => {

  const classes = useStyles();

  return(
    <Button className={classes.button} variant="contained" onClick={() => onClick()}>
      {label}
    </Button>
  )
}

export default PrimaryButton