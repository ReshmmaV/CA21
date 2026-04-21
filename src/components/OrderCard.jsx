import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <div data-testid="order-item">
      <p>{order.customerName}</p>
      <p>{order.restaurant}</p>
      <p>{order.status}</p>

      <Link to={`/orders/${order.orderId}`}>View</Link>

      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_STATUS",
            payload: order.orderId,
          })
        }
      >
        Toggle Status
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DELETE_ITEM",
            payload: order.orderId,
          })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default OrderCard;