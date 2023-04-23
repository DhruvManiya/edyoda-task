import React from "react";
import classes from "../styles/progresscard.module.css";

const ProgressCard = ({ children }) => {
  return (
    <div className={`${classes.card}`}>
      {children}
      <span></span>
    </div>
  );
};

export default ProgressCard;
