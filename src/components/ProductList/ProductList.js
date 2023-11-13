import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

function ProductList({ products, loadMore }) {
  return (
    <div>
      {" "}
      {products.length > 0 &&
        products.map((product, i) => (
          <ProductDetail product={product} key={i} />
        ))}
      {products.length < 50 && (
        <button onClick={() => loadMore()}>load More</button>
      )}
    </div>
  );
}

export default ProductList;
