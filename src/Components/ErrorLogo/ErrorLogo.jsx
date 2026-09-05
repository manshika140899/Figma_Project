import React from "react";
import navicon from "../../assets/navicon.png";

const ErrorLogo = () => {
  return (
    <div className="flex flex-col items-center">

      <img
        src={navicon}
        alt="Funiro Logo"
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
      />   

      <h1 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-bold tracking-[0.08em] text-[#3A3A3A]">
        Funiro
      </h1>    

      <div className="mt-4 w-20 h-[3px] rounded-full bg-[#B88E2F]"></div>

    </div>
  );
};

export default ErrorLogo;