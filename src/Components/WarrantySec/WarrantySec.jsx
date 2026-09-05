import React from "react";

const Warranty = () => {
  return (
    <section className="w-full py-16">

      <div className="max-w-[1180px] pl-10 lg:pl-26">

       
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_1fr]">

         
          <div className="pb-10 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[#ECECEC]">

            <h2 className="text-[38px] font-semibold mb-10">
              Warranty
            </h2>

            <div className="flex flex-col gap-0 text-[20px]">

              <p>Warranty Summary</p>

              <p className="lg:pt-21">
                Warranty Service
                <br />
                Type
              </p>

              <p className="lg:pt-[120px]">Covered in Warranty</p>

              <p className="lg:pt-[158px]">
                Not Covered in
                <br />
                Warranty
              </p>

              <p className="lg:pt-[204px]">Domestic Warranty</p>

            </div>

          </div>
                 
          <div className="py-10 lg:py-0 border-b lg:border-b-0 lg:border-r border-[#ECECEC] lg:px-10">

            <div className="lg:mt-[74px] grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-y-10 text-[20px] leading-[34px]">

            
              <div className="lg:pt-6">
                1 Year Manufacturing
                <br />
                Warranty
              </div>

             
              <div>
                For Warranty Claims or
                <br />
                Any Product Related
                <br />
                Issues Please Email at
                <br />
                operations@trevifurniture.com
              </div>

            
              <div>
                Warranty Against
                <br />
                Manufacturing Defect
              </div>

            
              <div className="lg:pt-18">
                The Warranty Does Not
                <br />
                Cover Damages Due To
                <br />
                Usage Of The Product
                <br />
                Beyond Its Intended Use
                <br />
                And Wear & Tear In The
                <br />
                Natural Course Of
                <br />
                Product Usage.
              </div>

            
              <div>
                1 Year
              </div>

             
              <button className="w-[215px] h-[64px] bg-[#B88E2F] text-white text-[20px] font-medium hover:bg-[#9A7424] duration-300">
                Add To Cart
              </button>

            </div>

          </div>
                    
          <div className="pt-10 lg:pt-0 lg:px-10">

            <div className="lg:mt-[74px] grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-y-10 text-[20px] leading-[34px]">

            
              <div className="lg:pt-4">
                1.2 Year Manufacturing
                <br />
                Warranty
              </div>

             
              <div className="lg:pt-2">
                For Warranty Claims or
                <br />
                Any Product Related
                <br />
                Issues Please Email at
                <br />
                support@xyz.com
              </div>

             
              <div>
                Warranty of the product
                <br />
                is limited to
                <br />
                manufacturing defects
                <br />
                only.
              </div>

          
              <div>
                The Warranty Does Not
                <br />
                Cover Damages Due To
                <br />
                Usage Of The Product
                <br />
                Beyond Its Intended Use
                <br />
                And Wear & Tear In The
                <br />
                Natural Course Of
                <br />
                Product Usage.
              </div>

         
              <div>
                3 Months
              </div>

           
              <button className="w-[215px] h-[64px] bg-[#B88E2F] text-white text-[20px] font-medium hover:bg-[#9A7424] duration-300">
                Add To Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Warranty;