import axios from "axios";

const getBrowseSec = async () => {
  const response = await axios.get("https://figma-backend-pearl.vercel.app/browseSec");
  return response.data;
};

export default getBrowseSec;