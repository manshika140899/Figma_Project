// import React from 'react'
// import Nav from '../../Nav/Nav'
// import ShoppingCard from '../../ShoppingCard/ShoppingCard'
// import AsgaardSofa from '../../AsgaardSofa/AsgaardSofa'
// import DescripSec from '../../DescripSec/DescripSec'
// import RelatedProducts from '../../RelatedProducts/RelatedProducts'
// import Footer from '../../Footer/Footer'
// import { useState } from 'react'

// const Details = () => {
//       const [isOpen, setIsOpen] = useState(true);
//        console.log(isOpen);
//   return (
//     <div>
//       <Nav/>
//          <ShoppingCard
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//       />
//       <AsgaardSofa/>
//       <DescripSec/>
//       <RelatedProducts/>
//       <Footer/>
//     </div>
//   )
// }

// export default Details;



// import React from "react";
// import { useParams } from "react-router-dom";

// import Nav from "../../Nav/Nav";
// import AboutHero from "../../AboutHero/AboutHero";
// import AsgaardSofa from "../../AsgaardSofa/AsgaardSofa";
// import DescripSec from "../../DescripSec/DescripSec";
// import RelatedProducts from "../../RelatedProducts/RelatedProducts";
// import FooterSec from "../../FooterSec/FooterSec";
// import Footer from "../../Footer/Footer";

// const Details = () => {

//   const { id } = useParams();

//   return (
//     <div>

//       <Nav />
//       <AsgaardSofa id={id} />
//       <DescripSec />
//       <RelatedProducts />
//       <FooterSec />
//       <Footer marginTop="mt-1" />

//     </div>
//   );
// };

// export default Details;


import React from "react";

const Details = () => {
  console.log("NEW DETAILS CODE 123");
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-red-500">
        DETAILS PAGE TEST
      </h1>
    </div>
  );
};

export default Details;