import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-24">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-lg px-8 md:px-16 py-16">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">


            <div className="max-w-[620px]">

              <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold mb-4">

                Let's Create Together

              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] leading-tight">

                Ready To Transform
                <br />
                Your Living Space?

              </h2>

              <p className="text-[#666666] text-lg leading-8 mt-8">

                Discover beautifully crafted furniture that combines
                elegance, comfort, and functionality. Start designing
                your dream home with Furniro today.

              </p>

            </div>


            <div className="flex flex-col sm:flex-row gap-5">

              <Link to="/shop">

                <button className="bg-[#B88E2F] hover:bg-[#9c7624] duration-300 text-white font-semibold px-10 py-4 rounded-lg">

                  Explore Collection

                </button>

              </Link>

              <Link to="/contact">

                <button className="border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300 font-semibold px-10 py-4 rounded-lg">

                  Contact Us

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;