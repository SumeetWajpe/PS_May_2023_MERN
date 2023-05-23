import React, { useContext } from "react";
import { CartItemsContext } from "../../context/cartitems.context";

export default function CartItemsCount() {
  const ctx = useContext(CartItemsContext);
  return (
    <button className="btn btn-sm btn-warning">
      <i className="fa-solid fa-cart-shopping"></i>{" "}
      <span className="badge bg-secondary"> {ctx.currItems.length} </span>
    </button>
  );
}
