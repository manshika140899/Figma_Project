import axios from "axios";

const createOrder = async (orderData) => {
  const response = await axios.post(
    "http://localhost:5000/orders",
    orderData
  );

  return response.data;
};

export default createOrder;