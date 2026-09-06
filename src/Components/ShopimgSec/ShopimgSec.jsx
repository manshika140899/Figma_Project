import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getShop from "../../api/shop";

const ShopimgSec = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const data = await getShop();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching shop data:", error);
      }
    };

    fetchShopData();
  }, []);

  const openProduct = (item) => {
    navigate(`/details/${item.id}`, {
      state: {
        product: item,
        source: "shop",
      },
    });
  };

  return (
    <section className="max-w-[1440px] mx-auto px-5 lg:px-10 py-14">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((item, index) => (

          <div
            key={item.id}
            className="group bg-[#F4F5F7] overflow-hidden cursor-pointer"
          >

            <div
              onClick={() => openProduct(item)}
              className="relative overflow-hidden"
            >

              <img
                src={`https://figma-backend-pearl.vercel.app${item.image}`}
                alt={item.name}
                className="w-full h-[301px] object-cover duration-500 group-hover:scale-105"
              />

              {item.badge && (
                <div
                  className={`absolute top-5 right-5 w-12 h-12 rounded-full ${item.badgeColor} text-white flex items-center justify-center text-sm`}
                >
                  {item.badge}
                </div>
              )}

              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-all duration-300 ${
                  index === 1
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    navigate(`/details/${item.id}`, {
                      state: {
                        product: item,
                        source: "shop",
                        autoAddToCart: true,
                      },
                    });
                  }}
                  className="bg-white text-[#B88E2F] px-8 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white duration-300"
                >
                  Add to cart
                </button>

                <div className="flex gap-6 mt-6 text-white text-sm font-medium">

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-[#B88E2F] duration-300"
                  >
                    Share
                  </button>

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-[#B88E2F] duration-300"
                  >
                    Compare
                  </button>

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-[#B88E2F] duration-300"
                  >
                    Like
                  </button>

                </div>

              </div>

            </div>

            <div
              onClick={() => openProduct(item)}
              className="p-4"
            >

              <h3 className="text-2xl font-bold text-[#3A3A3A]">
                {item.name}
              </h3>

              <p className="text-[#898989] text-sm mt-2">
                {item.desc}
              </p>

              <div className="flex items-center gap-4 mt-3">

                <span className="text-xl font-semibold text-[#3A3A3A]">
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

      <div className="flex flex-wrap justify-center items-center gap-4 mt-14">

        <button className="w-14 h-14 rounded-[10px] bg-[#B88E2F] text-white font-semibold">
          1
        </button>

        <button className="w-14 h-14 rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300">
          2
        </button>

        <button className="w-14 h-14 rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300">
          3
        </button>

        <button className="px-8 h-14 rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300">
          Next
        </button>

      </div>

    </section>
  );
};

export default ShopimgSec;