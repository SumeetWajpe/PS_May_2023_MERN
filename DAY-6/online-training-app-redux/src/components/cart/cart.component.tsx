import CartItem from "../cartitem/cartitem.component";
import { CourseModel } from "../../models/course.model";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

export default function Cart() {
  const cart = useSelector((store: RootState) => store.cart);
  return (
    <div>
      <h2> Cart Summary</h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {cart.map((item: CourseModel) => (
          <CartItem item={item} key={item.id} />
        ))}
        <button className="btn btn-primary">
          Checkout <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </div>
  );
}
