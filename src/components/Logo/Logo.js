import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import style from "./Logo.module.css";
const Logo = () => (
  <div className={style.Logo}>
    <img src={burgerLogo} alt="burger" />
  </div>
);
export default Logo;
