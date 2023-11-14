import React from "react";
import grocery from "../../assets/grocery.jpg";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/basketSlice";
import "./BasketItem.scss";
import dashSvg from "../../assets/dash.svg";
import Button from "../UI/Button/Button";

function BasketItem({ product }) {
  const { bID, name, price } = product;
  const dispatch = useDispatch();

  const handleRemoveFromBasket = () => {
    dispatch(removeProduct({ bID }));
  };

  console.log(bID);
  return (
    <div className="basketItem">
      <div className="basketItem__left">
        <img
          className="basketItem__img"
          src={grocery}
          alt="grocery bag - coming soon"
          width={75}
        />
        <p className="basketItem__name">{name}</p>
      </div>
      <p className="basketItem__price">£{price}</p>

      <Button buttonClass="removeBtn" onButtonClick={handleRemoveFromBasket}>
        <img src={dashSvg} alt="remove item icon" />
        Remove Item
      </Button>
    </div>
  );
}

export default BasketItem;
