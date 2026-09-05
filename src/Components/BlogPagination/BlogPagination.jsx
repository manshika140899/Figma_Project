import React from "react";

const BlogPagination = () => {
  return (
    <section className="w-full mt-10 lg:mt-16">

      <div className="flex justify-center items-center gap-5 flex-wrap">

       

        <button className="w-[60px] h-[60px] rounded-[10px] bg-[#B88E2F] text-white text-[20px] font-medium">
          1
        </button>

        

        <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-[20px] font-medium hover:bg-[#B88E2F] hover:text-white duration-300">
          2
        </button>

       

        <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-[20px] font-medium hover:bg-[#B88E2F] hover:text-white duration-300">
          3
        </button>

       

        <button className="w-[98px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-[20px] font-medium hover:bg-[#B88E2F] hover:text-white duration-300">
          Next
        </button>

      </div>

    </section>
  );
};

export default BlogPagination;