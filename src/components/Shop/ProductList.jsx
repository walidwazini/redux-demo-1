import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <section className='mt-3'>
      <h2>List of Products</h2>
      <ul>
        <ProductItem title={"Test"} price={5} />
      </ul>
    </section>
  );
};

export default ProductList;
