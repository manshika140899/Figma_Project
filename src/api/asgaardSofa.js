import axios from "axios";

const getAsgaardSofa = async (id) => {
  const response = await axios.get(
    `https://figma-backend-pearl.vercel.app/asgaardSofa/${id}`
  );

  return response.data;
};

export const getAllAsgaardSofa = async () => {
  const response = await axios.get(
    "https://figma-backend-pearl.vercel.app/asgaardSofa"
  );

  return response.data;
};

export default getAsgaardSofa;