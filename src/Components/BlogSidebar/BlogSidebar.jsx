import React from "react";
import { FiSearch } from "react-icons/fi";

import Blogimg4 from "../../assets/Blogimg4.png";
import Blogimg5 from "../../assets/Blogimg5.png";
import Blogimg6 from "../../assets/Blogimg6.png";
import Blogimg7 from "../../assets/Blogimg7.png";
import Blogimg8 from "../../assets/Blogimg8.png";

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPosts = [
  {
    image: Blogimg4,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
  },
  {
    image: Blogimg5,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    image: Blogimg6,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
  },
  {
    image: Blogimg7,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
  },
  {
    image: Blogimg8,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
  },
];

const BlogSidebar = () => {
  return (
    <div className="w-full">


      <div className="relative mb-16">

        <input
          type="text"
          className="w-full h-[58px] border border-[#9F9F9F] rounded-[10px] pl-5 pr-14 outline-none"
        />

        <FiSearch
          className="absolute right-5 top-1/2 -translate-y-1/2 text-[24px] text-black"
        />

      </div>

     

      <h2 className="text-[24px] font-semibold mb-10">
        Categories
      </h2>

      <div className="space-y-8 mb-20">

        {categories.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center text-[#9F9F9F]"
          >

            <span className="text-[16px]">
              {item.name}
            </span>

            <span className="text-[16px]">
              {item.count}
            </span>

          </div>

        ))}

      </div>

   

      <h2 className="text-[24px] font-semibold mb-10">
        Recent Posts
      </h2>

      <div className="space-y-10">

        {recentPosts.map((post, index) => (

          <div
            key={index}
            className="flex items-center gap-5"
          >

            <img
              src={post.image}
              alt={post.title}
              className="w-[80px] h-[80px] rounded-[10px] object-cover flex-shrink-0"
            />

            <div>

              <h3 className="text-[14px] leading-6 font-medium text-black hover:text-[#B88E2F] duration-300 cursor-pointer">

                {post.title}

              </h3>

              <p className="text-[12px] text-[#9F9F9F] mt-2">

                {post.date}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default BlogSidebar;