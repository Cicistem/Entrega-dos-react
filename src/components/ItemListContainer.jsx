import React from "react";
import ProductCard from "../components/ProductCard";


const ItemListContainer = ({ productsData }) => {
  return (
    <div
    style={{
      display: "flex",
      height: "100%",
      flexwrap: "wrap",
      justifyContent: "space-around",
    }}
  >
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
