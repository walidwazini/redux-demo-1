import React from "react";

import { DUMMY_PRODUCTS } from "../../data/dummy-data";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <section className='mt-3'>
      <h2>List of Products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            id={prod.id}
            key={prod.id}
            title={prod.title}
            price={prod.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
