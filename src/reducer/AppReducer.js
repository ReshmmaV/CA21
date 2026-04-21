export const AppReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return { ...state, orders: action.payload };

    case "DELETE_ITEM":
      return {
        ...state,
        orders: state.orders.filter(
          (o) => o.orderId !== action.payload
        ),
      };

    case "TOGGLE_STATUS":
      return {
        ...state,
        orders: state.orders.map((o) =>
          o.orderId === action.payload
            ? {
                ...o,
                status:
                  o.status === "Delivered"
                    ? "Cancelled"
                    : "Delivered",
              }
            : o
        ),
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};