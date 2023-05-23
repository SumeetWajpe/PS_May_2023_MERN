import React, { useContext } from "react";
import { CartItemsContext } from "../../context/cartitems.context";

export default function CartItemsCount() {
  const ctx = useContext(CartItemsContext);
  return (
    <button className="d-flex align-items-center btn btn-sm btn-warning">
      <i className="fa-solid fa-cart-shopping"></i>( {ctx.currItems.length} )
    </button>
  );
}
