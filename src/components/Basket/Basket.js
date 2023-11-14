import React, { useEffect, useState } from "react";
import "./Basket.scss";
import closeSvg from "../../assets/close.svg";

import BasketItem from "../BasketItem/BasketItem";

function Basket({ open, close, products }) {
  const [basketTotal, setBasketTotal] = useState(0);

  // add specific currency format for total and ensure only 2 digits after decimal place
  const Pounds = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    const calculateTotal = () => {
      const total = products.reduce((acc, curr) => curr.price + acc, 0);

      setBasketTotal(total);

      console.log(total);
    };
    calculateTotal();
  }, [products]);

  return (
    <div className={`basket-container ${open ? "showing" : "hidden"}`}>
      <button className="closeBtn" onClick={() => close()}>
        <img src={closeSvg} alt="close menue icon" width={40} />
      </button>
      <p className="basket-container__title">
        You have {products.length} items in your basket
        <span className="solid-hr"></span>
      </p>
      <div className="">
        {products.map((product, i) => (
          <BasketItem key={i} product={product} />
        ))}
      </div>
      <div className="solid-hr"></div>
      <div
        className="basket-container__footer
"
      >
        <div className="total">
          <span>Total:</span>
          <span>{Pounds.format(basketTotal)}</span>
        </div>

        <div className="saleBtns">
          {basketTotal > 0 && <button>Checkout</button>}
          <button onClick={() => close()}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
