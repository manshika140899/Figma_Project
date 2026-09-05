import React from "react";

import Furniruimg1 from "../../assets/Furniruimg1.png";
import Furniruimg2 from "../../assets/Furniruimg2.png";
import Furniruimg3 from "../../assets/Furniruimg3.png";
import Furniruimg4 from "../../assets/Furniruimg4.png";
import Furniruimg5 from "../../assets/Furniruimg5.png";
import Furniruimg6 from "../../assets/Furniruimg6.png";
import Furniruimg7 from "../../assets/Furniruimg7.png";
import Furniruimg8 from "../../assets/Furniruimg8.png";
import Furniruimg9 from "../../assets/Furniruimg9.png";

const GridCard2 = () => {
  return (
    <section className="w-full bg-white overflow-hidden">

      <div className="text-center pt-6 lg:pt-[60px]">
        <p className="text-[#616161] text-lg font-medium">
          Share your setup with
        </p>

        <h2 className="text-[32px] md:text-[40px] font-bold text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-4
          px-4
          pt-8
          lg:hidden
        "
      >
        <img
          src={Furniruimg1}
          alt=""
          className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
        />

        <img
          src={Furniruimg2}
          alt=""
          className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
        />

        <img
          src={Furniruimg3}
          alt=""
          className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
        />

        <img
          src={Furniruimg4}
          alt=""
          className="w-full h-[180px] sm:h-[240px] md:h-[280px] object-cover"
        />

        <img
          src={Furniruimg5}
          alt=""
          className="w-full h-[220px] sm:h-[300px] md:h-[340px] object-cover"
        />

        <img
          src={Furniruimg6}
          alt=""
          className="w-full h-[180px] sm:h-[240px] md:h-[280px] object-cover"
        />

        <img
          src={Furniruimg7}
          alt=""
          className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
        />

        <img
          src={Furniruimg8}
          alt=""
          className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
        />

        <img
          src={Furniruimg9}
          alt=""
          className="
            col-span-2
            w-full
            h-[200px]
            sm:h-[260px]
            md:h-[320px]
            object-cover
          "
        />
      </div>


      <div className="hidden lg:block w-full overflow-hidden pt-8">

        <div
          className="
            mx-auto
            flex
            flex-row
            justify-center
            items-center
            gap-[14px]
            w-[96%]
            max-w-[1600px]
          "
        >


          <div className="flex flex-col gap-[14px] shrink-0">

            <div className="flex gap-[14px] items-end">

              <img
                src={Furniruimg1}
                alt=""
                className="
                  w-[12vw]
                  max-w-[210px]
                  min-w-[150px]
                  h-[420px]
                  object-cover
                  flex-shrink-0
                "
              />

              <img
                src={Furniruimg2}
                alt=""
                className="
                  w-[25vw]
                  max-w-[430px]
                  min-w-[280px]
                  h-[260px]
                  object-cover
                  flex-shrink-0
                "
              />

            </div>


            <div className="flex gap-[14px]">

              <img
                src={Furniruimg6}
                alt=""
                className="
                  w-[11vw]
                  max-w-[180px]
                  min-w-[130px]
                  h-[329px]
                  object-cover
                  flex-shrink-0
                "
              />

              <img
                src={Furniruimg7}
                alt=""
                className="
                  w-[20vw]
                  max-w-[338px]
                  min-w-[220px]
                  h-[210px]
                  object-cover
                  flex-shrink-0
                "
              />

            </div>

          </div>


          <div className="flex justify-center shrink-0">

            <img
              src={Furniruimg3}
              alt=""
              className="
                w-[19vw]
                max-w-[320px]
                min-w-[220px]
                h-[390px]
                object-cover
              "
            />

          </div>


          <div className="flex flex-col gap-[14px] shrink-0">

            <div className="flex gap-[14px] items-end">

              <img
                src={Furniruimg4}
                alt=""
                className="
                  w-[18vw]
                  max-w-[305px]
                  min-w-[220px]
                  h-[330px]
                  object-cover
                "
              />

              <img
                src={Furniruimg5}
                alt=""
                className="
                  w-[19vw]
                  max-w-[320px]
                  min-w-[230px]
                  h-[430px]
                  object-cover
                "
              />

            </div>


            <div className="flex gap-[14px]">

              <img
                src={Furniruimg8}
                alt=""
                className="
                  w-[15vw]
                  max-w-[260px]
                  min-w-[190px]
                  h-[260px]
                  object-cover
                "
              />

              <img
                src={Furniruimg9}
                alt=""
                className="
                  w-[17vw]
                  max-w-[295px]
                  min-w-[210px]
                  h-[210px]
                  object-cover
                "
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default GridCard2;