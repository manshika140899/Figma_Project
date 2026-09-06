import axios from "axios";

const getShop = async () => {
  const response = await axios.get(
    "https://figma-backend-pearl.vercel.app/shop"
  );

  return response.data;
};


const getShopProduct = async (id) => {

  const response = await axios.get(
    `https://figma-backend-pearl.vercel.app/shop/${id}`
  );

  return response.data;

};


export { getShopProduct };

export default getShop;