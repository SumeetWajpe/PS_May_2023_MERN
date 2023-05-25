import React, { useContext } from "react";
import { CartItemsContext } from "../../context/cartitems.context";
import CartItem from "../cartitem/cartitem.component";
import { CourseModel } from "../../models/course.model";

export default function Cart() {
  const ctx = useContext(CartItemsContext);
  return (
    <div>
      <h2> Cart Summary</h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {ctx.currItems.map((item: CourseModel) => (
          <CartItem item={item} key={item.id} />
        ))}
        <button className="btn btn-primary">
          Checkout <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </div>
  );
}
