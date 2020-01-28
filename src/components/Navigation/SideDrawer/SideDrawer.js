import React from "react";
import style from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClasses = style.SideDrawerClose;
  if (props.open) {
    attachedClasses = style.SideDrawerOpen;
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
