import React from "react";

const links = [
  { id: 1, title: "Home" },
  { id: 2, title: "Shop" },
  { id: 3, title: "About" },
  { id: 4, title: "Contact" },
];

const help = [
  { id: 1, title: "Payment Options" },
  { id: 2, title: "Returns" },
  { id: 3, title: "Privacy Policies" },
];

const Footer = ({ marginTop = "mt-20" }) => {
  return (
    
    <footer
  className={`border-t border-gray-200 ${marginTop}`}
>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Funiro.
            </h2>

            <p className="text-gray-500 leading-7 text-sm">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

         
          <div>
            <h3 className="text-gray-400 font-medium mb-6">
              Links
            </h3>

            <ul className="space-y-5">
                {links.map((item) => (
                <li key={item.id}>
                    <a href="#" className="font-medium hover:text-yellow-700 duration-300">
                    {item.title} </a> </li> ))}
            </ul>
          </div>

       
    <div>
      <h3 className="text-gray-400 font-medium mb-6"> Help </h3>

            <ul className="space-y-5">
              {help.map((item) => (
                <li key={item.id}>
                  <a href="#" className="font-medium hover:text-yellow-700 duration-300">
                    {item.title}</a> </li> ))}
            </ul>
          </div>

        <div>
            <h3 className="text-gray-400 font-medium mb-6"> Newsletter </h3>

            <form className="flex flex-wrap gap-3">
              <input type="email" placeholder="Enter Your Email Address"
                className="border-b border-black outline-none pb-2 flex-1 text-sm"/>

              <button className="border-b border-black font-semibold uppercase text-sm pb-2" > Subscribe </button>
            </form>
          </div>

        </div>

         <div className="border-t border-gray-200 mt-14 pt-8">
          <p className="text-sm text-gray-600"> 2023 Funiro. All rights reserved. </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;