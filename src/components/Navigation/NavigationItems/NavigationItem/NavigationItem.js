import React from "react";
import style from "./NavigationItem.module.css";

const NavigationItem = props => (
  <li className={style.NavigationItem}>
    <a className={props.active ? style.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
