import React from "react";
import Burgeringredient from "./Burgeringredient/Burgeringredient";
import style from "./Burger.module.css";
const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <Burgeringredient key={ingredient + i} type={ingredient} />;
      });
    }
  );
  return (
    <div className={style.Burger}>
      <Burgeringredient type="bread-top" />
      {transformedIngredients}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
