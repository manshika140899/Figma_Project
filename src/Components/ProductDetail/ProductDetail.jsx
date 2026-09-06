import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://figma-backend-pearl.vercel.app/gridCard/${id}`
        );

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img
        src={`https://figma-backend-pearl.vercel.app${product.image}`}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>{product.desc}</p>

      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;