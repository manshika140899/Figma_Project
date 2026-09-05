import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const ErrorLeft = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center lg:text-left">

   

      <h1 className="text-[90px] sm:text-[120px] lg:text-[140px] font-extrabold leading-none text-[#B88E2F]">
        404
      </h1>

     

      <h2 className="mt-4 text-[34px] md:text-[46px] font-bold leading-tight text-[#3A3A3A]">
        Oops!
        <br />
        Page Not Found
      </h2>

    

      <p className="mt-6 max-w-[520px] mx-auto lg:mx-0 text-[16px] md:text-[18px] leading-8 text-[#7A7A7A]">
        The page you are looking for might have been removed,
        renamed, or is temporarily unavailable.
        Don't worry — let's get you back to exploring
        beautiful furniture.
      </p>

   

      <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

       

        <Link
          to="/"
          className="w-full sm:w-[210px] h-[58px] rounded-[12px] bg-[#B88E2F] text-white font-semibold text-[18px] flex items-center justify-center gap-3 hover:bg-[#9C7724] duration-300 shadow-lg"
        >
          <FaHome />
          Back Home
        </Link>

      

        <button
          onClick={() => navigate(-1)}
          className="w-full sm:w-[210px] h-[58px] rounded-[12px] border-2 border-[#B88E2F] text-[#B88E2F] font-semibold text-[18px] flex items-center justify-center gap-3 hover:bg-[#B88E2F] hover:text-white duration-300"
        >
          <FaArrowLeft />
          Go Back
        </button>

      </div>

      

      <p className="mt-10 text-[15px] text-[#A1A1A1]">
        Need help? Contact our support team anytime.
      </p>

    </div>
  );
};

export default ErrorLeft;