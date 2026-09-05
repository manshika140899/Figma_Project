import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const CartSec2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(
    location.state?.quantity || 1
  );

  const selectedSize = location.state?.size || "L";
  const selectedColor = location.state?.color || "Purple";
 
  useEffect(() => {
    
    if (location.state?.product) {
  const cartProduct = location.state.product;

  setProduct(cartProduct);
  setQuantity(location.state.quantity || 1);

 const savedCart = JSON.parse(localStorage.getItem("cart"));

  const oldCart = Array.isArray(savedCart)
    ? savedCart
    : [];

  const alreadyExists = oldCart.some(
    (item) => item.id === cartProduct.id
  );

  if (!alreadyExists) {
    oldCart.push(cartProduct);
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(oldCart)
  );
  return;
}

    if (!id) {
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/gridCard/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.log("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id, location.state]);


  if (!product) {
    return (
      <section className="w-full py-16">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="text-center text-lg">
            Loading product...
          </p>
        </div>
      </section>
    );
  }


  const priceNumber =
    Number(
      String(product.price)
        .replace(/,/g, "")
        .replace(/[^0-9]/g, "")
    ) || 0;

  const subtotal = priceNumber * quantity;

  const formattedPrice =
    priceNumber.toLocaleString("en-IN");

  const formattedSubtotal =
    subtotal.toLocaleString("en-IN");



  const productImage =
    location.state?.image ||
    (product.image?.startsWith("http")
      ? product.image
      : `http://localhost:5000${product.image}`);


  return (
    <section className="w-full py-16">

      <div className="max-w-[1240px] mx-auto px-5">

        <div className="flex flex-col lg:flex-row gap-8">


          <div className="w-full lg:flex-1">



            <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr_60px] items-center bg-[#F9F1E7] px-8 py-4 text-[18px] font-semibold rounded-sm">

              <p className="pl-16">
                Product
              </p>

              <p>
                Price
              </p>

              <p>
                Quantity
              </p>

              <p className="pl-4">
                Subtotal
              </p>

              <div></div>

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_60px] gap-6 lg:gap-0 py-8">


              <div className="flex flex-col sm:flex-row items-center gap-6">

                <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center flex-shrink-0">

                  <img
                    src={productImage}
                    alt={product.name}
                    className="w-[90px] h-[90px] object-contain"
                  />

                </div>


                <div className="text-center sm:text-left">

                  <p className="text-[#9F9F9F] text-[16px] lg:pt-4">
                    {product.name}
                  </p>


                  <div className="mt-3 text-sm text-gray-500">

                    <p>
                      Size:{" "}
                      <span className="text-black">
                        {selectedSize}
                      </span>
                    </p>

                    <p>
                      Color:{" "}
                      <span className="text-black">
                        {selectedColor}
                      </span>
                    </p>

                  </div>


                  <div className="lg:hidden mt-3 space-y-2">

                    <p className="text-[#9F9F9F]">
                      Price : Rs. {formattedPrice}
                    </p>

                    <p className="font-medium">
                      Subtotal : Rs. {formattedSubtotal}
                    </p>

                  </div>

                </div>

              </div>


              <p className="hidden lg:block text-[#9F9F9F] text-[16px] lg:pt-12">

                Rs. {formattedPrice}

              </p>


              <div className="flex justify-center lg:justify-start lg:pt-10 lg:pl-8">

                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => {

                    const value = Number(
                      e.target.value
                    );

                    if (value >= 1) {
                      setQuantity(value);
                    }

                  }}
                  className="w-[36px] h-[36px] border border-[#9F9F9F] rounded text-center outline-none"
                />

              </div>


              <p className="hidden lg:block font-medium text-[16px] lg:pt-10">

                Rs. {formattedSubtotal}

              </p>


              <button
                onClick={() => {
                  setProduct(null);
                }}
                className="text-[#B88E2F] text-[18px] hover:scale-110 duration-300 justify-self-center lg:justify-self-start"
              >

                <FaTrash />

              </button>

            </div>

          </div>


          <div className="w-full lg:w-[390px] flex-shrink-0">

            <div className="bg-[#F9F1E7] px-10 py-12 rounded-sm lg:h-[425px]">


              <h2 className="text-[32px] font-bold text-center mb-12">
                Cart Totals
              </h2>


              <div className="flex justify-between items-center mb-8">

                <p className="font-semibold text-[16px]">
                  Subtotal
                </p>

                <p className="text-[#9F9F9F] text-[16px]">

                  Rs. {formattedSubtotal}

                </p>

              </div>


              <div className="flex justify-between items-center mb-12">

                <p className="font-semibold text-[16px]">
                  Total
                </p>

                <p className="text-[#B88E2F] text-[22px] font-medium">

                  Rs. {formattedSubtotal}

                </p>

              </div>


              <button
                onClick={() => navigate("/checkout")}
                className="w-full h-[58px] border border-black rounded-[15px] text-[20px] font-medium hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300"
              >

                Check Out

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CartSec2;