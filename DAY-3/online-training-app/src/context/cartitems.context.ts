import React from "react";
import { CourseModel } from "../models/course.model";

type CartItemsContextType = {
  currItems: CourseModel[];
  addItemToCart: (value: CourseModel) => void;
};

export const CartItemsContext = React.createContext<CartItemsContextType>({
  currItems: [],
  addItemToCart() {},
});
