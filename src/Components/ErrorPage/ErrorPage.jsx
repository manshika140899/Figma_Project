import React from "react";
import ErrorLogo from "../ErrorLogo/ErrorLogo";
import ErrorLeft from "../ErrorLeft/ErrorLeft";
import ErrorRight from "../ErrorRight/ErrorRight";

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-[#FCF8F3] overflow-hidden">

      <div className="pt-10 flex justify-center">
        <ErrorLogo />
      </div>    

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-8 py-10 lg:py-20">

          <div className="w-full lg:w-[48%]">
            <ErrorLeft />
          </div>
       

          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
            <ErrorRight />
          </div>

        </div>

        <div className="flex flex-col items-center justify-center pb-12">

          <p className="flex items-center gap-3 text-[18px] text-[#3A3A3A]">

            <span className="w-8 h-8 rounded-full border-2 border-[#B88E2F] flex items-center justify-center text-[#B88E2F] font-bold">
              ?
            </span>

            Need help? Contact our support team.

          </p>

          <a
            href="mailto:support@funiru.com"
            className="mt-2 text-[20px] font-medium text-[#B88E2F] hover:underline"
          >
            support@funiru.com
          </a>

        </div>

      </div>

    </section>
  );
};

export default ErrorPage;