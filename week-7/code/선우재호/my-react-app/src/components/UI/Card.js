import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const className = "card" + props.className;
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
