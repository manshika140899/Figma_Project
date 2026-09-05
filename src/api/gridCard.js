import axios from "axios";

const getGridCard = async () => {
  const response = await axios.get(
    "http://localhost:5000/gridCard"
  );

  return response.data;
};

export default getGridCard;
