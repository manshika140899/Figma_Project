import React from "react";

const ProductGeneral = () => {
  return (
    <section className="w-full py-16">

      <div className="max-w-[1180px] pl-10 lg:pl-26">

        <div className="flex flex-col lg:flex-row">

         
          <div className="w-full lg:w-[300px] mb-10 lg:mb-0 pb-10 border-b border-[#ECECEC] lg:border-b-0">

            <h2 className="text-[36px] font-semibold mb-7">
              General
            </h2>

            <div className="flex flex-col gap-8 text-[20px] text-black">
              <p>Sales Package</p>
              <p>Model Number</p>
              <p>Secondary Material</p>
              <p>Configuration</p>
              <p>Upholstery Material</p>
              <p>Upholstery Color</p>
            </div>

          </div>

         
          <div className="w-full lg:w-[380px] lg:border-l border-[#ECECEC] lg:pl-10 mb-10 lg:mb-0 pt-10 lg:pt-0 pb-10 border-b border-[#ECECEC] lg:border-b-0">

            <div className="lg:mt-[84px] flex flex-col gap-8 text-[20px]">

              <p>1 sectional sofa</p>
              <p>TFCBLIGRBL6SRHS</p>
              <p>Solid Wood</p>
              <p>L-shaped</p>
              <p>Fabric + Cotton</p>
              <p>Bright Grey & Lion</p>

            </div>

          </div>

         
          <div className="w-full lg:w-[360px] lg:border-l border-[#ECECEC] lg:pl-10 pt-10 lg:pt-0">

            <div className="lg:mt-[82px] flex flex-col gap-8 text-[20px]">

              <p>
                1 Three Seater, 2 Single
                <br />
                Seater
              </p>

              <p>DTUBLIGRBL568</p>

              <p>Solid Wood</p>

              <p>L-shaped</p>

              <p>Fabric + Cotton</p>

              <p>Bright Grey & Lion</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductGeneral;