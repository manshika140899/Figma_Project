import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getBrowseSec from "../../api/browseSec";

const BACKEND_URL = "https://figma-backend-pearl.vercel.app";

const BrowseRange = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrowseData = async () => {
      try {
        const data = await getBrowseSec();

        console.log("Browse API Data:", data);

        setCategories(
          Array.isArray(data)
            ? data
            : data?.categories || []
        );
      } catch (error) {
        console.log("Error fetching browse data:", error);
      }
    };

    fetchBrowseData();
  }, []);

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http")) {
      return image;
    }

    return `${BACKEND_URL}${image}`;
  };

  const handleProductClick = (item) => {
    console.log("CLICKED BROWSE PRODUCT:", item);

    navigate(`/details/${item.id}`, {
      state: {
        source: "browse",
        product: {
          ...item,
          id: item.id,
          name: item.name || item.title,
          title: item.title || item.name,
          image: item.image,
          price: item.price,
          desc: item.desc,
          productId: item.productId || item.id,
        },
      },
    });
  };

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

 
      <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {categories.map((item) => (

          <div
            key={item.id}
            onClick={() => handleProductClick(item)}
            className="group cursor-pointer"
          >

            <div className="overflow-hidden rounded-md h-[420px]">

              {item.image ? (
                <img
                  src={getImageUrl(item.image)}
                  alt={
                    item.title ||
                    item.name ||
                    "Product"
                  }
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400">
                    No Image
                  </span>
                </div>
              )}

            </div>

            <h3 className="text-center mt-5 text-xl font-semibold text-gray-800">
              {item.title || item.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default BrowseRange;