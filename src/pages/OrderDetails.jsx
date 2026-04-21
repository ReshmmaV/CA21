import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const order = state.orders.find(
    (o) => String(o.orderId) === id
  );

  if (!order) return <p>No Data</p>;

  return (
    <div>
      <h2>{order.customerName}</h2>
      <p>{order.restaurant}</p>

      {order.items.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;