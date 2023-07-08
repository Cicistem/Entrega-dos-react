import React from "react";
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./productcard.css";


const ProductCard = ({ productData }) => {
  return (
    <div className="row d-flex ">
      <div className="Card text-center  wrap col-3">
      <img className="images" variant="top" src={productData.images[0]} />
      <Card.Body>
        <div className="card-body text-light">
          <h4 className="card-title">{productData.title}</h4>
          <p className="card-text text-secondary">{productData.description}</p>
          <a ><Link to={`/item/${productData.id}` } className="btn btn-outline-secondary rounded-0">Más info</Link></a>
          <CartButtons/>
        </div>
      </Card.Body>
    </div>
    </div>
    
  );
};

export default ProductCard;
