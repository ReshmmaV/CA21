import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import OrderCard from "../components/OrderCard";

const Filter = () => {
  const { state, dispatch } = useContext(AppContext);

  const filtered = state.orders.filter((o) => {
    if (state.filter === "DELIVERED")
      return o.status === "Delivered";
    if (state.filter === "CANCELLED")
      return o.status === "Cancelled";
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}>
        All
      </button>
      <button
        onClick={() =>
          dispatch({ type: "SET_FILTER", payload: "DELIVERED" })
        }
      >
        Delivered
      </button>
      <button
        onClick={() =>
          dispatch({ type: "SET_FILTER", payload: "CANCELLED" })
        }
      >
        Cancelled
      </button>

      {filtered.map((o) => (
        <OrderCard key={o.orderId} order={o} />
      ))}
    </div>
  );
};

export default Filter;