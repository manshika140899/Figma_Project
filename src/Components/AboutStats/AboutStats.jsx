import React from "react";

const stats = [
  {
    number: "50K+",
    title: "Happy Customers",
    description: "Satisfied families who trust Furniro for beautiful living spaces.",
  },
  {
    number: "500+",
    title: "Premium Products",
    description: "Carefully designed furniture collections for every room.",
  },
  {
    number: "25+",
    title: "Countries Served",
    description: "Delivering premium furniture to customers around the world.",
  },
  {
    number: "10+",
    title: "Years of Excellence",
    description: "A decade of craftsmanship, innovation, and quality service.",
  },
];

const AboutStats = () => {
  return (
    <section className="w-full bg-[#F9F1E7] py-20">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">


        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold">
            Our Achievements
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mt-3">
            Trusted By Thousands
          </h2>

          <p className="text-[#666666] mt-5 max-w-3xl mx-auto leading-8">
            Every milestone reflects our passion for creating elegant,
            functional, and timeless furniture for modern homes.
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <h3 className="text-5xl font-bold text-[#B88E2F]">
                {item.number}
              </h3>

              <h4 className="mt-5 text-2xl font-semibold text-[#3A3A3A]">
                {item.title}
              </h4>

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

export default AboutStats;