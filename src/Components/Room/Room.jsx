import React from "react";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const Room = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

         
          <div className="lg:col-span-4 text-center lg:text-left">

            <h2 className="text-[32px] lg:text-[40px] font-bold leading-tight text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h2>

            <p className="text-[#616161] mt-5 leading-7 max-w-[360px] mx-auto lg:mx-0">
              Our designer already made a lot of beautiful
              prototype of rooms that inspire you.
            </p>

            <button className="mt-8 bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#9f7a24] duration-300">
              Explore More
            </button>

          </div>

         
          <div className="lg:col-span-8 overflow-hidden">

            <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start"> 

      
        <div className="relative flex-shrink-0">
            <img src={img1} alt="" className="w-full max-w-[404px] h-[420px] sm:h-[500px] lg:h-[582px] object-cover"/>

  
       <div className="absolute bottom-6 left-6 flex items-end">

          <div className="bg-white/90 px-7 py-5">

             <p className="text-sm text-[#616161]">  01 —— Bed Room </p>

              <h3 className="text-[28px] font-bold text-[#3A3A3A] mt-2"> Inner Peace </h3>
         </div>

          <button className="w-12 h-12 bg-[#B88E2F] text-white text-2xl flex items-center justify-center">  →  </button>
       </div>

              </div>

     
       <div className="flex flex-col flex-shrink-0">

          <div className="relative">

             <img src={img2} alt="" className="w-full max-w-[350px] h-[350px] sm:h-[420px] lg:h-[486px] object-cover"/>

       
        <button className="absolute top-1/2 -right-5 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl text-[#B88E2F] text-2xl flex items-center justify-center">
             →  </button>

         </div>

     
     <div className="flex items-center gap-4 mt-8">

         <div className="w-7 h-7 rounded-full border-2 border-[#B88E2F] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#B88E2F]"></div>
                  </div>

           <div className="w-3 h-3 rounded-full bg-gray-300"></div>

          <div className="w-3 h-3 rounded-full bg-gray-300"></div>

           <div className="w-3 h-3 rounded-full bg-gray-300"></div>

       </div>

    </div>

 
       <div className="flex-shrink-0 -mr-40">
        
         <img src={img3} alt="" className="w-full max-w-[280px] h-[350px] sm:h-[420px] lg:h-[486px] object-cover hidden lg:block"/>

     </div>
        </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Room;