import React from "react";
import { Link } from "react-router-dom";

import Shopbgimg from "../../assets/Shopbgimg.png";
import navicon from "../../assets/navicon.png";

const Product = ({
  title = "Product Comparison",
  page = "Comparison",
}) => {
  return (
    <section
      className="relative w-full h-[250px] md:h-[320px] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${Shopbgimg})` }}
    >
     
      <div className="absolute inset-0 bg-white/50"></div>

     
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src={navicon}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain mb-2"
        />

        <h1 className="text-4xl md:text-5xl font-semibold text-black">
          {title}
        </h1>

        <div className="flex items-center gap-2 mt-3 text-sm md:text-base">
          <Link to="/" className="font-medium hover:text-[#B88E2F]">
            Home
          </Link>

          <span>&gt;</span>

          <span className="font-semibold">
            {page}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Product;
