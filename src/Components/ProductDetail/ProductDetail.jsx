import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/gridCard/${id}`
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
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>{product.desc}</p>

      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;