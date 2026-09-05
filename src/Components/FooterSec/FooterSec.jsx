import React from "react";
import {
  FaTrophy,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

const FooterSec = () => {
  const data = [
    {
      icon: <FaTrophy />,
      title: "High Quality",
      sub: "crafted from top materials",
    },
    {
      icon: <FaCheckCircle />,
      title: "Warranty Protection",
      sub: "Over 2 years",
    },
    {
      icon: <BsBoxSeam />,
      title: "Free Shipping",
      sub: "Order over 150 $",
    },
    {
      icon: <FaHeadset />,
      title: "24 / 7 Support",
      sub: "Dedicated support",
    },
  ];

  return (
    <section className="w-full bg-[#FAF3EA] pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-0 lg:pb-0 lg:h-[280px] flex items-center">

      <div className="max-w-[1440px]  mx-auto px-6 lg:px-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:pt-8">

          {data.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-5"
            >

              <div className="text-[32px] sm:text-[35px] lg:text-[50px] text-[#242424] flex-shrink-0">
                {item.icon}
              </div>

              <div>

                <h3 className="text-[20px] sm:text-[22px] lg:text-[25px] font-semibold text-[#242424] leading-tight">
                  {item.title}
                </h3>

                <p className="text-[14px] sm:text-[14px] lg:text-[18px] text-[#898989] mt-1">
                  {item.sub}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FooterSec;