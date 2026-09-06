import axios from "axios";

const getGridCard = async () => {
  const response = await axios.get(
    "https://figma-backend-pearl.vercel.app/gridCard"
  );

  return response.data;
};

export default getGridCard;
