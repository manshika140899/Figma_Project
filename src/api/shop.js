import axios from "axios";

const getShop = async () => {
  const response = await axios.get(
    "http://localhost:5000/shop"
  );

  return response.data;
};


const getShopProduct = async (id) => {

  const response = await axios.get(
    `http://localhost:5000/shop/${id}`
  );

  return response.data;

};


export { getShopProduct };

export default getShop;