import React from "react";
import Shopbgimg from "../../assets/Shopbgimg.png";
import navicon from "../../assets/navicon.png";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[260px] md:h-[320px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Shopbgimg})` }}
    >
      <div className="absolute inset-0 bg-white/45"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">

        <img
          src={navicon}
          alt="Furniro Logo"
          className="w-12 md:w-14 mb-2"
        />

        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Furniro
        </h2>

        <h1 className="mt-3 text-2xl md:text-4xl font-semibold text-black">
          About
        </h1>

        <div className="flex items-center gap-2 mt-3 text-sm md:text-base">

          <Link
            to="/"
            className="font-semibold hover:text-[#B88E2F] transition"
          >
            Home
          </Link>

          <span>{">"}</span>

          <span className="text-[#6B7280]">
            About
          </span>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;