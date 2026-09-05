import React from "react";
import {
  FiFlag,
  FiBox,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

const timeline = [
  {
    year: "2021",
    icon: <FiFlag />,
    title: "Brand Founded",
    text: "Furniro began its journey with a vision to create elegant and timeless furniture."
  },
  {
    year: "2022",
    icon: <FiBox />,
    title: "500+ Products",
    text: "Expanded our collection with premium furniture for every modern home."
  },
  {
    year: "2024",
    icon: <FiUsers />,
    title: "50K+ Happy Customers",
    text: "Earned the trust of thousands of families through quality craftsmanship."
  },
  {
    year: "2026",
    icon: <FiGlobe />,
    title: "Worldwide Delivery",
    text: "Serving customers globally with secure shipping and outstanding service."
  },
];

const AboutTimeline = () => {
  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-[1200px] mx-auto px-6">


        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold">
            Our Journey
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mt-3">
            Growing With Every Home
          </h2>

          <p className="text-[#666666] mt-5 max-w-2xl mx-auto leading-8">
            Every milestone reflects our commitment to creating beautiful,
            comfortable, and inspiring living spaces.
          </p>

        </div>


        <div className="relative">


          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-[#F9F1E7]"></div>

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >


                <div className="md:w-1/2">

                  <div className="bg-[#FCF8F3] rounded-2xl p-8 shadow hover:shadow-xl duration-300">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-full bg-[#B88E2F] text-white flex items-center justify-center text-2xl">

                        {item.icon}

                      </div>

                      <div>

                        <h3 className="text-[#B88E2F] text-xl font-bold">
                          {item.year}
                        </h3>

                        <h4 className="text-2xl font-semibold text-[#3A3A3A]">
                          {item.title}
                        </h4>

                      </div>

                    </div>

                    <p className="mt-6 text-[#666666] leading-7">
                      {item.text}
                    </p>

                  </div>

                </div>


                <div className="hidden md:flex w-14 justify-center">

                  <div className="w-6 h-6 rounded-full bg-[#B88E2F] border-[6px] border-[#FFF3E3]"></div>

                </div>


                <div className="hidden md:block md:w-1/2"></div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutTimeline;