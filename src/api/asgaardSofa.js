import axios from "axios";

const getAsgaardSofa = async (id) => {
  const response = await axios.get(
    `http://localhost:5000/asgaardSofa/${id}`
  );

  return response.data;
};

export const getAllAsgaardSofa = async () => {
  const response = await axios.get(
    "http://localhost:5000/asgaardSofa"
  );

  return response.data;
};

export default getAsgaardSofa;