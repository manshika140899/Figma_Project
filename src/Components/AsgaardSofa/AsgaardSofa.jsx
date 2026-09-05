import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import getProduct from "../../api/products";
import createOrder from "../../api/order";

const AsgaardSofa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [thumbs, setThumbs] = useState([]);

  useEffect(() => {


    if (location.state?.source === "shop" && location.state?.product) {

      const browseProduct = location.state.product;

      setProduct({
        id: browseProduct.id,
        name: browseProduct.name,
        price: browseProduct.price,
        desc: browseProduct.desc,
        image: browseProduct.image,
        type: "browse",
      });

      setSelectedImage(
        `http://localhost:5000${browseProduct.image}`
      );


      const fetchThumbs = async () => {

        try {

          const response = await fetch(
            "http://localhost:5000/asgaardSofa"
          );

          const data = await response.json();

          setThumbs(data);

        } catch (error) {

          console.log(
            "Error fetching thumbnails:",
            error
          );

        }

      };

      fetchThumbs();

      return;
    }


    const fetchAsgaardSofa = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/asgaardSofa"
        );

        const data = await response.json();

        setThumbs(data);


        if (!id) {

          const mainProduct = data.find(
            (item) => item.id === "SS001"
          );

          if (!mainProduct) {
            throw new Error("Asgaard main product not found");
          }

          setProduct(mainProduct);

          setSelectedImage(
            `http://localhost:5000${mainProduct.image}`
          );

          return;
        }


        const selectedProduct = data.find(
          (item) => item.id === id
        );

        if (selectedProduct) {

          setProduct(selectedProduct);

          setSelectedImage(
            `http://localhost:5000${selectedProduct.image}`
          );

          return;
        }


        const gridResponse = await fetch(
          `http://localhost:5000/gridCard/${id}`
        );

        if (!gridResponse.ok) {
          throw new Error("Product not found");
        }

        const gridProduct = await gridResponse.json();

        setProduct(gridProduct);

        setSelectedImage(
          `http://localhost:5000${gridProduct.image}`
        );

      } catch (error) {

        console.log(
          "Error fetching product:",
          error
        );

      }

    };


    fetchAsgaardSofa();

  }, [id, location.state]);


  return (
    <>


      <section className="bg-[#F9F1E7]">

        <div className="max-w-7xl mx-auto px-5 h-[100px] flex items-center gap-4 text-sm">

          <span className="text-[#9F9F9F]">
            Home
          </span>

          <span className="text-xl">
            {">"}
          </span>

          <span className="text-[#9F9F9F]">
            Shop
          </span>

          <span className="text-xl">
            {">"}
          </span>

          <div className="w-[2px] h-8 bg-[#9F9F9F]"></div>

          <span className="font-medium text-black">
            {product.name}
          </span>

        </div>

      </section>


      <section className="max-w-7xl mx-auto px-5 py-12">

        <div className="flex flex-col lg:flex-row gap-10">


          <div className="flex flex-col-reverse lg:flex-row gap-6 w-full lg:w-1/2">


            <div className="flex lg:flex-col gap-4">

              {thumbs
                .filter((item) => item.id !== "SS001")
                .map((item) => (

                  <div
                    key={item.id}

                    onClick={() => {
                      setSelectedImage(
                        `http://localhost:5000${item.image}`);
                      navigate(`/about/${item.id}`);
                    }}
                    className="bg-[#F9F1E7] rounded-[8px] w-[76px] h-[80px] flex items-center justify-center cursor-pointer hover:scale-105 duration-300" >

                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.name}
                      className="w-[60px] object-contain"
                    />

                  </div>

                ))}

            </div>


            <div className="flex-1 bg-[#F9F1E7]  flex justify-center items-center p-6 h-[529px] overflow-hidden">

              <img
                src={selectedImage}
                alt={product.name}
                className={` ${product.type === "browse"
                    ? "w-full h-auto max-h-[469px]"
                    : "w-full max-w-[480px] h-full"
                  }`}
              />

            </div>

          </div>


          <div className="w-full lg:w-1/2">


            <h1 className="text-4xl font-medium text-[#000]">

              {product.name}

            </h1>


            <h2 className="text-[24px] text-[#9F9F9F] font-medium mt-2">

              {product.price}

            </h2>


            <div className="flex items-center gap-4 mt-4">

              <div className="flex text-[#FFC700] text-lg gap-1">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />

              </div>

              <div className="w-[1px] h-7 bg-[#9F9F9F]"></div>

              <span className="text-[#9F9F9F] text-sm">

                5 Customer Review

              </span>

            </div>


            <p className="text-[#000] text-[13px] leading-6 mt-5 max-w-[430px]">
              {product.desc}
            </p>



            <div className="mt-8">

              <p className="text-[#9F9F9F] mb-3">
                Size
              </p>

              <div className="flex gap-4">

                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded text-sm duration-200 ${selectedSize === size
                        ? "bg-[#B88E2F] text-white"
                        : "bg-[#F9F1E7] text-black"
                      }`}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>
            <div className="mt-8">

              <p className="text-[#9F9F9F] mb-3">
                Color
              </p>

              <div className="flex gap-5">

                <button
                  onClick={() => setSelectedColor("Purple")}
                  className={`w-8 h-8 rounded-full bg-[#816DFA] cursor-pointer ${selectedColor === "Purple"
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                    }`}
                ></button>

                <button
                  onClick={() => setSelectedColor("Black")}
                  className={`w-8 h-8 rounded-full bg-black cursor-pointer ${selectedColor === "Black"
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                    }`}
                ></button>

                <button
                  onClick={() => setSelectedColor("Gold")}
                  className={`w-8 h-8 rounded-full bg-[#B88E2F] cursor-pointer ${selectedColor === "Gold"
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                    }`}
                ></button>

              </div>

            </div>


            <div className="flex flex-col sm:flex-row gap-4 mt-10">



              <div className="border border-[#9F9F9F] rounded-[10px] w-[123px] h-[64px] flex items-center justify-around">

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="text-xl"
                >

                  -

                </button>

                <span className="font-medium">

                  {quantity}

                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="text-xl"
                >

                  +

                </button>

              </div>


              <button onClick={async () => {

                const cartData = {
                  product: product,
                  image: selectedImage,
                  size: selectedSize,
                  color: selectedColor,
                  quantity: quantity,
                };

                try {

                  const response = await createOrder(cartData);

                  console.log("Add to Cart response:", response);

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(cartData)
                  );

                  navigate(`/cart/${product.id}`, {
                    state: cartData,
                  });

                } catch (error) {

                  console.log("Add to Cart error:", error);

                }

              }}


                className="border border-black rounded-[15px] h-[64px] px-12 text-xl hover:bg-black hover:text-white duration-300"
              >
                Add To Cart
              </button>



              <button
                className="border border-black rounded-[15px] h-[64px] px-10 text-xl hover:bg-black hover:text-white duration-300"
              >

                + Compare

              </button>

            </div>



            <div className="border-t border-[#D9D9D9] mt-14 pt-10">

              <div className="space-y-4 text-[#9F9F9F]">



                <div className="flex">

                  <span className="w-[100px]">

                    SKU

                  </span>

                  <span>

                    : {product.id}

                  </span>

                </div>



                <div className="flex">

                  <span className="w-[100px]">

                    Category

                  </span>

                  <span>

                    : Sofas

                  </span>

                </div>



                <div className="flex">

                  <span className="w-[100px]">

                    Tags

                  </span>

                  <span>

                    : Sofa, Chair, Home, Shop

                  </span>

                </div>


                <div className="flex items-center">

                  <span className="w-[100px]">

                    Share

                  </span>

                  <span className="mr-3">

                    :

                  </span>

                  <div className="flex gap-5 text-black text-xl">

                    <FaFacebook
                      className="cursor-pointer hover:text-[#B88E2F] duration-300"
                    />

                    <FaLinkedin
                      className="cursor-pointer hover:text-[#B88E2F] duration-300"
                    />

                    <FaTwitter
                      className="cursor-pointer hover:text-[#B88E2F] duration-300"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default AsgaardSofa;