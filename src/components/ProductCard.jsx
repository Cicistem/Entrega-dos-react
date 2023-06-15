import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  return (
    <Card style={{ width: "18rem", display:"flex" }}>
      <Card.Img variant="top" src={productData.images[0]} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <Link to={`/item/${productData.id}`}>Más info</Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
