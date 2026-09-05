import axios from "axios";

const getProduct = async (id) => {
  const response = await axios.get(
    `http://localhost:5000/gridCard/${id}`
  );

  return response.data;
};

export default getProduct;