import React from "react";
import "./Button.scss";

function Button({ buttonClass, children, onButtonClick }) {
  return (
    <button className={`btn ${buttonClass}`} onClick={() => onButtonClick()}>
      {children}
    </button>
  );
}

export default Button;
