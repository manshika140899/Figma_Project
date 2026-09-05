import React from "react";

import { FaTrophy } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const features = [
  {
    id: 1,
    icon: <FaTrophy className="text-[42px] text-[#242424]" />,
    title: "High Quality",
    desc: "crafted from top materials",
  },
  {
    id: 2,
    icon: <BsPatchCheck className="text-[42px] text-[#242424]" />,
    title: "Warranty Protection",
    desc: "Over 2 years",
  },
  {
    id: 3,
    icon: <TbTruckDelivery className="text-[42px] text-[#242424]" />,
    title: "Free Shipping",
    desc: "Order over 150 $",
  },
  {
    id: 4,
    icon: <RiCustomerService2Line className="text-[42px] text-[#242424]" />,
    title: "24 / 7 Support",
    desc: "Dedicated support",
  },
];

const ShopSec = () => {
  return (
    <section className="bg-[#FAF3EA] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-5"
            >

              <div className="flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <h3 className="text-[24px] font-semibold text-[#242424]">
                  {item.title}
                </h3>

                <p className="text-[#898989] text-[18px] mt-1">
                  {item.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ShopSec;