import React from "react";

import Customer1 from "../../assets/Customer1.webp";
import Customer2 from "../../assets/Customer2.jpg";
import Customer3 from "../../assets/Customer3.jpg";

import { FiStar } from "react-icons/fi";

const reviews = [
  {
    image: Customer1,
    name: "Emily Carter",
    city: "New York, USA",
    review:
      "Furniro completely transformed my living room. The furniture quality is outstanding, and the delivery experience was smooth.",
  },
  {
    image: Customer2,
    name: "Daniel Wilson",
    city: "London, UK",
    review:
      "Beautiful designs, premium quality, and excellent customer service. I highly recommend Furniro to anyone.",
  },
  {
    image: Customer3,
    name: "Sophia Brown",
    city: "Toronto, Canada",
    review:
      "The craftsmanship is exceptional. Every piece feels luxurious and perfectly matches my home interior.",
  },
];

const AboutReviews = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-20">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">


        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mt-3">
            What Our Customers Say
          </h2>

          <p className="text-[#666666] mt-5 max-w-3xl mx-auto leading-8">
            Thousands of happy customers trust Furniro for premium quality,
            timeless designs, and exceptional customer service.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300"
            >


              <div className="flex text-[#B88E2F] text-lg gap-1">

                <FiStar fill="#B88E2F" />
                <FiStar fill="#B88E2F" />
                <FiStar fill="#B88E2F" />
                <FiStar fill="#B88E2F" />
                <FiStar fill="#B88E2F" />

              </div>



              <p className="text-[#666666] leading-8 mt-6">
                "{item.review}"
              </p>


              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg text-[#3A3A3A]">
                    {item.name}
                  </h3>

                  <p className="text-[#888888]">
                    {item.city}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutReviews;