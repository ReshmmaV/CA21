import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";
const STUDENT_ID = "E0423004";
const PASSWORD = "817516";
const SET = "setA";

const getToken = async () => {
  const { data } = await axios.post(`${BASE_URL}/public/token`, {
    studentId: STUDENT_ID,
    password: PASSWORD,
    set: SET,
  });
  return data;
};

const getDataset = async (token, dataUrl) => {
  const { data } = await axios.get(`${BASE_URL}${dataUrl}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // ⚠️ dynamic handling (inconsistent API)
  return data.data.orders || data.data.movies || [];
};

export const fetchOrdersData = async () => {
  const tokenData = await getToken();
  const data = await getDataset(tokenData.token, tokenData.dataUrl);
  return data;
};