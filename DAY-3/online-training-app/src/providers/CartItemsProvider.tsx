import { useState } from "react";
import { CartItemsContext } from "../context/cartitems.context";
import { CourseModel } from "../models/course.model";

export function CartItemsProvider(props: any) {
  const [currItemsInCart, setCurrItemsInCart] = useState<CourseModel[]>([]);

  return (
    <CartItemsContext.Provider
      value={{
        currItems: currItemsInCart,
        addItemToCart: (value: CourseModel) => {
          setCurrItemsInCart([...currItemsInCart, value]);
        },
      }}
    >
      {props.children}
    </CartItemsContext.Provider>
  );
}
