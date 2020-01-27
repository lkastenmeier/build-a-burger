import React from "react";
import Burgeringredient from "./Burgeringredient/Burgeringredient";
import style from "./Burger.module.css";
const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <Burgeringredient key={ingredient + i} type={ingredient} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Start adding ingredients!</p>;
  }
  return (
    <div className={style.Burger}>
      <Burgeringredient type="bread-top" />
      {transformedIngredients}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
