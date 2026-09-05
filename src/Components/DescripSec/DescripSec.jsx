import React from "react";

import Asgaardsofa2 from "../../assets/Asgaardsofa2.png";
import Asgaardsofa3 from "../../assets/Asgaardsofa3.png";

const DescripSec = () => {
  return (
    <section className="border-t border-[#D9D9D9] py-14">

      <div className="max-w-7xl mx-auto px-5">

      

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-14">

          <h2 className="text-[24px] font-medium text-black cursor-pointer">
            Description
          </h2>

          <h2 className="text-[24px] font-medium text-[#9F9F9F] cursor-pointer">
            Additional Information
          </h2>

          <h2 className="text-[24px] font-medium text-[#9F9F9F] cursor-pointer">
            Reviews [5]
          </h2>

        </div>

       

        <div className="max-w-5xl mx-auto mt-10 space-y-8">

          <p className="text-[#9F9F9F] text-[16px] leading-8 text-justify">
            Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>

          <p className="text-[#9F9F9F] text-[16px] leading-8 text-justify">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>

        </div>
               

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">

         
          <div className="bg-[#F9F1E7] rounded-[10px] flex justify-center items-center p-8">

            <img
              src={Asgaardsofa2}
              alt="Asgaard Sofa"
              className="w-full max-w-[560px] object-contain"
            />

          </div>

          
          <div className="bg-[#F9F1E7] rounded-[10px] flex justify-center items-center p-8">

            <img
              src={Asgaardsofa3}
              alt="Asgaard Sofa"
              className="w-full max-w-[560px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default DescripSec;