import React from "react";
import { IoClose } from "react-icons/io5";

import Asgaardsofa1 from "../../assets/Asgaardsofa1.png";
import Productimg4 from "../../assets/Productimg4.png";

const ShoppingCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  console.log("isOpen:", isOpen);

  return (
    <>

    
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      ></div>

   
      <div className="fixed top-0 right-0 z-50 h-[650px] w-full sm:w-[420px] bg-white shadow-2xl flex flex-col">

       
        <div className="flex items-center justify-between px-8 py-7 border-b border-[#D9D9D9]">

          <h2 className="text-[28px] font-semibold">
            Shopping Cart
          </h2>

          <button onClick={onClose}>
            <IoClose className="text-3xl text-[#9F9F9F] hover:text-black duration-300" />
          </button>

        </div>

       
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">

        
          <div className="flex items-center gap-5">

            <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">

              <img
                src={Asgaardsofa1}
                alt=""
                className="w-[80px] object-contain"
              />

            </div>

            <div className="flex-1">

              <h3 className="text-lg font-medium">
                Asgaard sofa
              </h3>

              <p className="mt-2 text-[#9F9F9F]">
                1
                <span className="mx-3">x</span>

                <span className="text-[#B88E2F] font-semibold">
                  Rs. 250,000.00
                </span>
              </p>

            </div>

            <IoClose className="text-xl text-[#9F9F9F] cursor-pointer hover:text-black duration-300" />

          </div>
                   
          <div className="flex items-center gap-5">

            <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">

              <img
                src={Productimg4}
                alt="Casaliving Wood"
                className="w-[80px] h-[80px] object-cover rounded"
              />

            </div>

            <div className="flex-1">

              <h3 className="text-lg font-medium">
                Casaliving Wood
              </h3>

              <p className="mt-2 text-[#9F9F9F]">
                1
                <span className="mx-3">x</span>

                <span className="text-[#B88E2F] font-semibold">
                  Rs. 270,000.00
                </span>
              </p>

            </div>

            <IoClose className="text-xl text-[#9F9F9F] cursor-pointer hover:text-black duration-300" />

          </div>

        </div>

    
        <div className="px-8 py-6 border-t border-[#E5E5E5]">

          <div className="flex items-center justify-between">

            <h3 className="text-xl font-medium">
              Subtotal
            </h3>

            <span className="text-[#B88E2F] text-xl font-semibold">
              Rs. 520,000.00
            </span>

          </div>

        </div>
                
        <div className="px-8 py-6 border-t border-[#D9D9D9]">

          <div className="flex flex-wrap justify-center gap-4">

            <button className="border border-black rounded-full px-7 py-2 hover:bg-black hover:text-white duration-300">
              Cart
            </button>

            <button className="border border-black rounded-full px-7 py-2 hover:bg-black hover:text-white duration-300">
              Checkout
            </button>

            <button className="border border-black rounded-full px-7 py-2 hover:bg-black hover:text-white duration-300">
              Comparison
            </button>

          </div>

        </div>

      </div>

    </>
  );
};

export default ShoppingCard;