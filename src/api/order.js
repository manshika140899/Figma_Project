import axios from "axios";

const createOrder = async (orderData) => {
  const response = await axios.post(
    "https://figma-backend-pearl.vercel.app/orders",
    orderData
  );

  return response.data;
};

export default createOrder;