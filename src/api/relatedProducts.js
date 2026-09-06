import axios from "axios";

const getRelatedProducts = async () => {
const response = await axios.get(
"https://figma-backend-pearl.vercel.app/relatedProducts"
);

return response.data;
};

export const getSingleRelatedProduct = async (id) => {
const response = await axios.get(
`https://figma-backend-pearl.vercel.app/relatedProducts/${id}`
);

return response.data;
};

export default getRelatedProducts;
