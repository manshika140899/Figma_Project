import axios from "axios";

const getRelatedProducts = async () => {
const response = await axios.get(
"http://localhost:5000/relatedProducts"
);

return response.data;
};

export const getSingleRelatedProduct = async (id) => {
const response = await axios.get(
`http://localhost:5000/relatedProducts/${id}`
);

return response.data;
};

export default getRelatedProducts;
