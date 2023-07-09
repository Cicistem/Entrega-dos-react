import React from "react";
import ProductCard from "../components/ProductCard";


const ItemDetailContainer =({ productsData }) =>{
  return (
    <div
    style={{
      width:"100%",
      heigth:"100%",
      display:"flex",
      justifyContent:"space-evenly",
    }}>
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
      <div style={{
            width:"60%",
            heigth:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly",
            alignItems:"start"
      }}>

        <h2>Descripción</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem illo sint, culpa nulla autem, voluptatem, asperiores ad consectetur molestias vitae perspiciatis libero assumenda. Nobis asperiores aut corporis quis molestias?
        </p>

      </div>
    </div>
  );
};

export default ItemDetailContainer;
