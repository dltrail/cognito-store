import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductList.scss";

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
        <button className="btn loadMore" onClick={() => loadMore()}>
          load More
        </button>
      )}
    </div>
  );
}

export default ProductList;
