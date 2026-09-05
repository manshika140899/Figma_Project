import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getGridCard from "../../api/gridCard";

const GridCard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getGridCard();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <h2 className="lg:text-4xl text-2xl font-bold text-center mb-12">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((item, index) => (

          <div
            key={item.id}
            onClick={() => navigate(`/details/${item.id}`)}
            className="group bg-[#F4F5F7] rounded overflow-hidden shadow hover:shadow-xl duration-300 cursor-pointer"
          >

            <div className="relative overflow-hidden">

              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="w-full h-72 object-cover group-hover:scale-110 duration-500"
              />

              {item.badge && (
                <div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full ${item.color} text-white flex justify-center items-center text-sm font-semibold`}
                >
                  {item.badge}
                </div>
              )}

              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute inset-0 bg-black/50 duration-300 flex flex-col justify-center items-center gap-4 ${
                  index === 1
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >

                <button
                  onClick={() => navigate(`/details/${item.id}`)}
                  className="bg-white text-[#B88E2F] px-8 py-2 font-semibold rounded hover:bg-[#B88E2F] hover:text-white duration-300"
                >
                  Add to Cart
                </button>

                <div className="flex gap-5 text-white text-sm">
                  <span>Share</span>
                  <span>Compare</span>
                  <span>Like</span>
                </div>

              </div>

            </div>

            <div className="p-5">

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm my-2">
                {item.desc}
              </p>

              <div className="flex items-center gap-3">

                <span className="font-bold text-lg">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {item.oldPrice}
                  </span>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="flex justify-center mt-12">

        <button 
        onClick={() => navigate("/shop")}
        className="border-2 border-[#B88E2F] text-[#B88E2F] px-10 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white duration-300">
          Show More
        </button>

      </div>

    </section>
  );
};

export default GridCard;