import React from "react";
import fimg1 from "../../assets/fimg1.jpg";

const ErrorRight = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
  
      <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#F9F1E7]"></div>

      <div className="absolute top-10 left-6 w-5 h-5 rounded-full bg-[#B88E2F]/30"></div>

      <div className="absolute bottom-16 right-10 w-8 h-8 rounded-full bg-[#B88E2F]/20"></div>

      <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-[#B88E2F]/40"></div>

     

      <img
        src={fimg1}
        alt="Furnitureimg2"
        className="relative z-10
        w-[300px]
        sm:w-[400px]
        md:w-[500px]
        lg:w-[620px]
        xl:w-[700px]
        object-contain drop-shadow-2xl rounded-2xl"
      />

    </div>
  );
};

export default ErrorRight;