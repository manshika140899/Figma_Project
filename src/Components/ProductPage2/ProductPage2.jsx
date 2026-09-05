import React from "react";

const ProductPage2 = () => {
  return (
    <section className="w-full py-2">

      <div className="max-w-[1180px] pl-10 lg:pl-26">

        <div className="flex flex-col lg:flex-row">

         
          <div className="w-full lg:w-[300px] mb-10 lg:mb-0 border-b lg:border-b-0 lg:border-r border-[#ECECEC] pb-10 lg:pb-0">

            <h2 className="text-[36px] font-semibold mb-7">
              Product
            </h2>

            <div className="flex flex-col gap-8 text-[20px] text-black">

              <p>Filling Material</p>

              <p>Finish Type</p>

              <p>Adjustable Headrest</p>

              <p>
                Maximum Load
                <br />
                Capacity
              </p>

              <p>Origin of Manufacture</p>

            </div>

          </div>

         
          <div className="w-full lg:w-[380px] lg:border-r border-[#ECECEC] lg:px-10 py-10 lg:py-0 border-b lg:border-b-0">

            <div className="flex flex-col gap-8 lg:mt-[86px] text-[20px]">

              <p>Foam</p>

              <p>Bright Grey & Lion</p>

              <p>No</p>

              <p>280 KG</p>

              <p>India</p>

            </div>

          </div>

         
          <div className="w-full lg:w-[360px] lg:pl-10 pt-10 lg:pt-0">

            <div className="flex flex-col gap-8 lg:mt-[86px] text-[20px]">

              <p>Matte</p>

              <p>Bright Grey & Lion</p>

              <p>yes</p>

              <p>300 KG</p>

              <p>India</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductPage2;