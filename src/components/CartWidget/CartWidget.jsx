import React,{useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const [ count ] = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex-wrap",
        width:"40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{count}</span>
    </div>
  );
};

export default CartWidget;
