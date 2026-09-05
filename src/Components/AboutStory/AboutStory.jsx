import React from "react";
import Productimg8 from "../../assets/Productimg8.png";
import { Link } from "react-router-dom";

const AboutStory = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center">


          <div>

            <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold mb-3">
              Our Story
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] leading-tight">

              Crafting Beautiful
              <br />
              Living Spaces

            </h2>

            <p className="text-[#666666] text-lg leading-8 mt-8">

              At Furniro, we believe furniture is more than just décor —
              it's a part of your everyday life. Since our beginning, we've
              been dedicated to creating elegant, comfortable, and timeless
              furniture that transforms every house into a warm and welcoming
              home.

            </p>

            <p className="text-[#666666] text-lg leading-8 mt-6">

              Every piece is thoughtfully designed using premium materials
              and modern craftsmanship, ensuring lasting quality while adding
              beauty to your living space.

            </p>

            <Link to="/shop">

              <button className="mt-10 bg-[#B88E2F] text-white px-10 py-4 font-semibold rounded hover:bg-[#9c7624] duration-300">

                Explore Collection

              </button>

            </Link>

          </div>


          <div className="relative">


            <div className="absolute inset-0 flex justify-center items-center">

              <div className="w-[420px] h-[420px] rounded-full bg-[#F9F1E7]"></div>

            </div>

            <img
              src={Productimg8}
              alt="About Furniro"
              className="relative z-10 w-full max-w-[550px] mx-auto object-cover rounded-xl shadow-xl hover:scale-105 duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutStory;