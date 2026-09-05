import axios from "axios";

const getBrowseSec = async () => {
  const response = await axios.get("http://localhost:5000/browseSec");
  return response.data;
};

export default getBrowseSec;