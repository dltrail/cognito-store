import React from "react";
import grocery from "../../assets/grocery.jpg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/basketSlice";
import "./ProductDetail.scss";
import addSvg from "../../assets/add.svg";
import Button from "../UI/Button/Button";

function ProductDetail({ product }) {
  const { id, name, description, price } = product;

  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addProduct({ id, name, price }));
  };

  if (!id) {
    return;
  }

  return (
    <div className="product-detail" key={id}>
      {/* I chose to use some placehiolder images just for a little visual spruce */}
      <img src={grocery} alt="grocery bag - coming soon" width={250} />
      <p className="product-detail__name" data-testid="name">
        {product.name}
      </p>
      <p className="product-detail__desc">{description}</p>
      <p className="product-detail__price">{price}</p>
      <Button buttonClass="addBtn" onButtonClick={handleAddToBasket}>
        <img src={addSvg} alt="add to basket icon" />
        Add To Basket{" "}
      </Button>
    </div>
  );
}

export default ProductDetail;
