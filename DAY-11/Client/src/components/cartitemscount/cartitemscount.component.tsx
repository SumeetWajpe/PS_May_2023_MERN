import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

export default function CartItemsCount() {
  const cart = useSelector((store: RootState) => store.cart);

  return (
    <button className="btn btn-sm btn-warning">
      <i className="fa-solid fa-cart-shopping"></i>{" "}
      <span className="badge bg-light">
        {" "}
        <Link to="/cart">{cart.length}</Link>{" "}
      </span>
    </button>
  );
}
