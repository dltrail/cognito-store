import React from "react";
import grocery from "../../assets/grocery.jpg";

function ProductDetail({ product, addToBasket }) {
  return (
    <div>
      {" "}
      <div className="product-detail" key={product.id}>
        <img src={grocery} alt="grocery bag - coming soon" width={250} />
        <p data-testid="name">{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => console.log("added")}>Add To Basket</button>
      </div>
    </div>
  );
}

export default ProductDetail;
