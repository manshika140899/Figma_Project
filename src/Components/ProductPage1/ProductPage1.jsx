import React from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

import Asgaardsofa1 from "../../assets/Asgaardsofa1.png";
import Asgaardsofa4 from "../../assets/Asgaardsofa4.png";

const ProductPage1 = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 lg:px-14 py-14">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

       
        <div>

          <h2 className="text-[28px] font-semibold leading-tight text-black">
            Go to Product
            <br />
            page for more
            <br />
            Products
          </h2>

          <button className="mt-7 text-[#727272] border-b border-[#727272] pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] duration-300">
            View More
          </button>

        </div>

        
        <div>

          <div className="bg-[#F9F1E7] rounded-[10px] h-[180px] flex justify-center items-center">

            <img
              src={Asgaardsofa1}
              alt="Asgaard Sofa"
              className="w-[180px] object-contain"
            />

          </div>

          <h3 className="text-[24px] font-semibold mt-5">
            Asgaard Sofa
          </h3>

          <p className="text-[18px] font-medium mt-2">
            Rs. 250,000.00
          </p>

          <div className="flex items-center gap-3 mt-3">

            <span className="font-medium">
              4.7
            </span>

            <div className="flex gap-1 text-[#FFC700]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-[#D9D9D9]" />
            </div>

            <span className="border-l pl-3 text-[#9F9F9F] text-sm">
              204 Review
            </span>

          </div>

        </div>

    
        <div>

          <div className="bg-[#F9F1E7] rounded-[10px] h-[180px] flex justify-center items-center">

            <img
              src={Asgaardsofa4}
              alt="Outdoor Sofa"
              className="w-[180px] object-contain"
            />

          </div>

          <h3 className="text-[24px] font-semibold mt-5">
            Outdoor Sofa Set
          </h3>

          <p className="text-[18px] font-medium mt-2">
            Rs. 224,000.00
          </p>

          <div className="flex items-center gap-3 mt-3">

            <span className="font-medium">
              4.2
            </span>

            <div className="flex gap-1 text-[#FFC700]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-[#D9D9D9]" />
            </div>

            <span className="border-l pl-3 text-[#9F9F9F] text-sm">
              145 Review
            </span>

          </div>

        </div>

       
        <div>

          <h3 className="text-[24px] font-semibold mb-5">
            Add A Product
          </h3>

          <div className="relative">

            <select
              className="w-full appearance-none bg-[#B88E2F] text-white rounded-md px-4 py-3 pr-10 outline-none cursor-pointer"
            >
              <option>Choose a Product</option>
              <option>Asgaard Sofa</option>
              <option>Outdoor Sofa Set</option>
            </select>

            <IoChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg pointer-events-none"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductPage1;