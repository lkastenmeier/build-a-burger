import React from "react";
import style from "./BuildControls.module.css";
import BuildContol from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={style.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>$
      </p>
      {controls.map(control => (
        <BuildContol
          removed={() => props.ingredientRemoved(control.type)}
          added={() => props.ingredientAdded(control.type)}
          key={control.label}
          label={control.label}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        onClick={props.ordering}
        disabled={!props.purchasable}
        className={style.OrderButton}
      >
        ORDER
      </button>
    </div>
  );
};
export default BuildControls;
