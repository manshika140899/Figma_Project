import React from "react";
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

import Blogimg1 from "../../assets/Blogimg1.png";
import Blogimg2 from "../../assets/Blogimg2.png";
import Blogimg3 from "../../assets/Blogimg3.png";

import BlogSidebar from "../BlogSidebar/BlogSidebar";
import BlogPagination from "../BlogPagination/BlogPagination";

const blogs = [
  {
    id: 1,
    image: Blogimg1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    tag: "Wood",
  },
  {
    id: 2,
    image: Blogimg2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    tag: "Handmade",
  },
  {
    id: 3,
    image: Blogimg3,
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    tag: "Wood",
  },
];

const BlogSec2 = () => {
  return (
    <section className="w-full py-16">

      <div className="max-w-[1240px] mx-auto px-5">

        <div className="flex flex-col lg:flex-row gap-16">

          

          <div className="w-full lg:w-[68%]">

            {blogs.map((blog) => (

              <div key={blog.id} className="mb-20">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[260px] sm:h-[350px] lg:h-[500px] object-cover rounded-[10px]"
                />

              

                <div className="flex flex-wrap items-center gap-6 mt-8 text-[#9F9F9F] text-[14px] lg:text-[16px]">

                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>Admin</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaTag />
                    <span>{blog.tag}</span>
                  </div>

                </div>

               

                <h2 className="text-[24px] lg:text-[30px] font-medium mt-5 text-black">
                  {blog.title}
                </h2>

                

                <p className="text-[#9F9F9F] leading-8 mt-5 text-[15px] lg:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Mus mauris vitae ultricies leo integer malesuada
                  nunc. In nulla posuere sollicitudin aliquam ultrices.
                  Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                  Libero enim sed faucibus turpis in. Cursus mattis molestie
                  a iaculis at erat. Nibh cras pulvinar mattis nunc sed
                  blandit libero. Pellentesque elit ullamcorper dignissim
                  cras tincidunt.
                </p>

               

                <button className="mt-8 text-[18px] font-medium border-b-2 border-black pb-2 hover:text-[#B88E2F] hover:border-[#B88E2F] duration-300">
                  Read more
                </button>

              </div>

            ))}

          </div>

        

          <div className="w-full lg:w-[32%]">

            <BlogSidebar />

          </div>

        </div>

       

        <BlogPagination />

      </div>

    </section>
  );
};

export default BlogSec2;