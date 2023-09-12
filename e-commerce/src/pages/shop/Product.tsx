import React, { useContext } from "react";
import "./Shop.css";
import { Button } from "@mui/material";
import { ShopContext } from "../../context/Shop.context";

const Product = (props: any) => {
  const { id, name, price, img } = props.data;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="main-product">
      <img src={img} alt={name} />
      <div className="product-description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div className="buttons">
        <Button variant="outlined">VIEW</Button>
        <Button variant="contained" onClick={() => addToCart(id)}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default Product;
