import React from "react";
import {
  FiTruck,
  FiShield,
  FiAward,
  FiCreditCard,
} from "react-icons/fi";

const features = [
  {
    icon: <FiTruck />,
    title: "Free Delivery",
    description:
      "Fast and reliable delivery across the country with secure packaging.",
  },
  {
    icon: <FiAward />,
    title: "Premium Quality",
    description:
      "Crafted from carefully selected materials for exceptional durability.",
  },
  {
    icon: <FiShield />,
    title: "Warranty Protection",
    description:
      "Every product comes with quality assurance and warranty support.",
  },
  {
    icon: <FiCreditCard />,
    title: "Secure Payment",
    description:
      "Multiple trusted payment options with complete transaction security.",
  },
];

const AboutFeatures = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-20">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mt-3">
            Designed For Better Living
          </h2>

          <p className="text-[#666666] mt-5 max-w-3xl mx-auto leading-8">

            We combine elegant design, premium craftsmanship, and reliable
            service to create furniture that makes every home beautiful,
            comfortable, and timeless.

          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 text-center"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-[#FFF3E3] flex items-center justify-center text-[#B88E2F] text-4xl">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#3A3A3A]">

                {item.title}

              </h3>

              <p className="mt-4 text-[#666666] leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutFeatures;