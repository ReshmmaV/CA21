import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { state } = useContext(AppContext);

  const totalOrders = state.orders.length;

  const deliveredOrders = state.orders.filter(
    (o) => o.status === "Delivered"
  ).length;

  const cancelledOrders = state.orders.filter(
    (o) => o.status === "Cancelled"
  ).length;

  const revenue = state.orders.reduce(
    (acc, o) => acc + o.totalAmount,
    0
  );

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders,
      revenue,
    };
  }, [totalOrders, deliveredOrders, cancelledOrders, revenue]);

  return (
    <div>
      <p data-testid="total-orders">{totalOrders}</p>
      <p data-testid="delivered-orders">{deliveredOrders}</p>
      <p data-testid="cancelled-orders">{cancelledOrders}</p>
    </div>
  );
};

export default Stats;