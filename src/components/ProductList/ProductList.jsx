import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductList.scss";
import Button from "../UI/Button/Button";

function ProductList({ products, loadMore }) {
  return (
    <div className="productList-container">
      <div className="productList">
        {products.length > 0 &&
          products.map((product, i) => (
            <ProductDetail product={product} key={i} />
          ))}
      </div>
      {products.length < 50 && (
        <Button buttonClass="loadMore" onButtonClick={loadMore}>
          load More
        </Button>
      )}
    </div>
  );
}

export default ProductList;
