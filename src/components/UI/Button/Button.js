import React from "react";
import style from "./Button.module.css";

const Button = props => (
  <button onClick={props.clicked} className={style[props.btnType]}>
    {props.children}
  </button>
);
export default Button;
