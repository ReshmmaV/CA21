import { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "../reducer/AppReducer";
import { fetchOrdersData } from "../services/api";

export const AppContext = createContext();

const initialState = {
  orders: [],
  filter: "ALL",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const load = async () => {
      const data = await fetchOrdersData();
      dispatch({ type: "INITIAL_DATA", payload: data });
    };
    load();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};