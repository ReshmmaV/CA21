import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const { state } = useContext(AppContext);

  const validOrders = state.orders.filter(
    (o) => o.orderId && o.items && o.status
  );

  return (
    <div>
      <h1>Orders</h1>
      {validOrders.map((o) => (
        <OrderCard key={o.orderId} order={o} />
      ))}
    </div>
  );
};

export default Orders;