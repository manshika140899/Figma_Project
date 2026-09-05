import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const ContSec = () => {
  return (
    <section className="w-full py-16 lg:py-24">

      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">

        

        <div className="text-center">

          <h2 className="text-[30px] sm:text-[38px] sm:font-normal lg:text-[48px] font-bold text-black">
            Get In Touch With Us
          </h2>

          <p className="max-w-[650px] mx-auto mt-4 text-[#9F9F9F] text-[15px] lg:text-[16px] leading-7">
            For More Information About Our Product & Services.
            Please Feel Free To Drop Us An Email. Our Staff
            Always Be There To Help You Out. Do Not Hesitate!
          </p>

        </div>

      

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mt-16">

          

          <div className="w-full lg:w-[35%]">

           

            <div className="flex items-start gap-7 mb-14">

              <FaMapMarkerAlt className="text-[28px] mt-2 flex-shrink-0" />

              <div>

                <h3 className="text-[22px] md:text-[24px] lg:text-[28px] font-semibold mb-2">
                  Address
                </h3>

                <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-9 text-black">
                  236 5th SE Avenue,
                  New York NY10000,
                  United States
                </p>

              </div>

            </div>

           

            <div className="flex items-start gap-7 mb-14">

              <FaPhoneAlt className="text-[22px] md:text-[24px] lg:text-[28px] mt-2 flex-shrink-0" />

              <div>

                <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold mb-2">
                  Phone
                </h3>

                <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-9 text-black">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>

              </div>

            </div>

          

            <div className="flex items-start gap-7">

              <FaClock className="text-[20px] md:text-[22px] lg:text-[25px] mt-2 flex-shrink-0" />

              <div>

                <h3 className="text-[22px] md:text-[24px] lg:text-[28px] font-semibold mb-2">
                  Working Time
                </h3>

                <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-9 text-black">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>

              </div>

            </div>

          </div>

         

          <div className="w-full lg:w-[55%]">

            <form>
                             

              <div className="mb-8">

                <label className="block text-[16px] font-medium mb-4">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Abc"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-8 text-[16px] outline-none placeholder:text-[#9F9F9F]"
                />

              </div>

            

              <div className="mb-8">

                <label className="block text-[16px] font-medium mb-4">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-8 text-[16px] outline-none placeholder:text-[#9F9F9F]"
                />

              </div>

           

              <div className="mb-8">

                <label className="block text-[16px] font-medium mb-4">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="This is an optional"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-8 text-[16px] outline-none placeholder:text-[#9F9F9F]"
                />

              </div>

              

              <div className="mb-10">

                <label className="block text-[16px] font-medium mb-4">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Hi! I'd like to ask about"
                  className="w-full border border-[#9F9F9F] rounded-[10px] px-8 py-6 text-[16px] outline-none resize-none placeholder:text-[#9F9F9F]"
                ></textarea>

              </div>
                           

              <button
                type="submit"
                className="mt-2 w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-[5px] text-[16px] font-medium hover:bg-[#9C6F1F] duration-300"
              >
                Submit
              </button>

            </form>

          </div>
          

        </div>

      </div>

    </section>
  );
};

export default ContSec;