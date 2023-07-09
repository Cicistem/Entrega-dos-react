import React from 'react'
import ProductCard from './ProductCard';

function Cards() {
    return (
      <div className="container">
        <div className=" row ">
          {Cards.map(({ title, image, url, id }) => (
            <div className="col flex-wrap" key={id}>
              <ProductCard imageSource={image} title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Cards;
