import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getRelatedProducts from "../../api/relatedProducts";

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getRelatedProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching related products:", error);
      }
    };

    fetchProducts();
  }, []);

  const openProduct = (item) => {
    navigate(`/details/${item.id}`, {
      state: {
        product: item,
        source: "relatedProducts",
      },
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <h2 className="text-4xl font-bold text-center text-[#3A3A3A] mb-14">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => openProduct(item)}
            className="bg-[#F4F5F7] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
          >

            <div className="relative overflow-hidden">

              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {item.badge && (
                <div
                  className={`absolute top-5 right-5 w-12 h-12 rounded-full ${item.badgeColor} text-white flex items-center justify-center text-sm font-medium`}
                >
                  {item.badge}
                </div>
              )}

            </div>

            <div className="p-4">

              <h3 className="text-2xl font-semibold text-[#3A3A3A]">
                {item.name}
              </h3>

              <p className="text-[#898989] mt-2">
                {item.desc}
              </p>

              <div className="flex items-center gap-3 mt-3 flex-wrap">

                <span className="text-xl font-bold text-[#3A3A3A]">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="text-[#B0B0B0] line-through text-sm">
                    {item.oldPrice}
                  </span>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="flex justify-center mt-14">

        <button
          onClick={() => navigate("/shop")}
          className="w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white duration-300 transition-all"
        >
          Show More
        </button>

      </div>

    </section>
  );
};

export default RelatedProducts;