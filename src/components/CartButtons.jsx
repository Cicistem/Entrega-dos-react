import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import { CartContext } from '../context/CartContext';

const CartButtons = ({ customStyle, productId }) => {
    const [count, setCount ] = useContext(CartContext);
    console.log(count)
    const handleMoreClick = () => {
      setCount(count + 1);
    };
  
    const handleLessClick = () => {
        setCount(count - 1);
    };

    return (
        <div className="d-flex aling-items-center flex-column">
            <div className="d-flex w-25">
                <Button
                variant="outline-secondary"
                className="rounded-0"
                onClick={handleLessClick}>
                    -
                </Button>
                <span>0</span>

                <Button
                    variant="outline-secondary"
                    className="rounded-0"
                    onClick={handleMoreClick}>
                    +
                </Button>
            </div>
                <Button
                className="ml-2"
                variant="primary">
                Agregar al Carrito
                </Button>
            </div>
    );
  };
  
  export default CartButtons;
