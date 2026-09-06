import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getBrowseSec from "../../api/browseSec";

const BrowseRange = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrowseData = async () => {
      try {
        const data = await getBrowseSec();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching browse data:", error);
      }
    };

    fetchBrowseData();
  }, []);

  return (
    <section className="py-16 bg-white">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Browse The Range
        </h2>

        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {categories.map((item) => (

          <div
            key={item.id}
            onClick={() =>
              navigate(`/details/${item.productId}`, {
                state: {
                  product: item,
                },
              })
            }
            className="group cursor-pointer"
          >

            <div className="overflow-hidden rounded-md h-[380px]">

              <img
                src={`https://figma-backend-pearl.vercel.app${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

            </div>

            <h3 className="text-center mt-5 text-xl font-semibold text-gray-800">
              {item.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default BrowseRange;
