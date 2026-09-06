import axios from "axios";

const getProduct = async (id) => {
  const response = await axios.get(
    `https://figma-backend-pearl.vercel.app/gridCard/${id}`
  );

  return response.data;
};

export default getProduct;