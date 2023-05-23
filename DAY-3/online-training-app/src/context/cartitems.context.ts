import React from "react";
import { CourseModel } from "../models/course.model";

type CartItemsContextType = {
  currItems: CourseModel[];
};

export const CartItemsContext = React.createContext<CartItemsContextType>({
  currItems: [],
});
