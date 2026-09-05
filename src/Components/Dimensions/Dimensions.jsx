import React from "react";

const Dimensions = () => {
  return (
    <section className="w-full py-12 lg:mt-10">
      <div className="max-w-[1180px] pl-10 lg:pl-26">

        <div className="flex flex-col lg:flex-row">

         
          <div className="w-full lg:w-[300px] mb-8 lg:mb-0 border-b lg:border-b-0 lg:border-r border-[#ECECEC] pb-8 lg:pb-0">

            <h2 className="text-[36px] font-semibold mb-8">
              Dimensions
            </h2>

            <div className="flex flex-col gap-8 text-[20px] text-black">

              <p>Width</p>

              <p>Height</p>

              <p>Depth</p>

              <p>Weight</p>

              <p>Seat Height</p>

              <p>Leg Height</p>

            </div>

          </div>

         
          <div className="w-full lg:w-[380px] lg:border-l border-[#ECECEC] lg:pl-10 mb-8 lg:mb-0 border-b lg:border-b-0 pb-8 lg:pb-0">

            <div className="lg:mt-[80px] flex flex-col gap-8 text-[20px]">

              <p>265.32 cm</p>

              <p>76 cm</p>

              <p>167.76 cm</p>

              <p>45 KG</p>

              <p>41.52 cm</p>

              <p>5.46 cm</p>

            </div>

          </div>

         
          <div className="w-full lg:w-[360px] lg:border-l border-[#ECECEC] lg:pl-10">

            <div className="lg:mt-[80px] flex flex-col gap-8 text-[20px]">

              <p>265.32 cm</p>

              <p>76 cm</p>

              <p>167.76 cm</p>

              <p>65 KG</p>

              <p>41.52 cm</p>

              <p>5.46 cm</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Dimensions;