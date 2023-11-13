import React from "react";
import "./Basket.scss";

function Basket({ open, close }) {
  return (
    <div className={`basket-container ${open ? "showing" : "hidden"}`}>
      Basket
      <button onClick={() => close()}>close</button>
    </div>
  );
}

export default Basket;
