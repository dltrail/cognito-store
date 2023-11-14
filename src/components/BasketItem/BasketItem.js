import React from "react";
import grocery from "../../assets/grocery.jpg";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/basketSlice";
import "./BasketItem.scss";
import dashSvg from "../../assets/dash.svg";

function BasketItem({ product }) {
  const { uid, name, price } = product;
  const dispatch = useDispatch();

  const handleRemoveFromBasket = () => {
    dispatch(removeProduct({ uid }));
  };

  console.log(uid);
  return (
    <div className="basketItem">
      <div className="basketItem__left">
        <img
          className="basketItem__img"
          src={grocery}
          alt="grocery bag - coming soon"
          width={100}
        />
        <p className="basketItem__name">{name}</p>
      </div>
      <p className="basketItem__price">£{price}</p>
      {/* TODO: make this a UI Component*/}
      <button className="removeBtn" onClick={handleRemoveFromBasket}>
        <img src={dashSvg} alt="remove item icon" />
        Remove Item
      </button>
    </div>
  );
}

export default BasketItem;
