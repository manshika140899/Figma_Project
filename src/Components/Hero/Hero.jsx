import scandinavianinterior from "../../assets/scandinavian-interior.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${scandinavianinterior})`,
      }} >


  <div className="absolute right-5 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 bg-[#FFF3E3] w-[90%] 
    sm:w-[450px] md:w-[500px] lg:w-[550px] p-6 sm:p-8 lg:p-12 rounded-sm">
   <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-700 mb-3"> New Arrival</p>
   
     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B88E2F] leading-tight mb-5">
          Discover Our
          <br />
          New Collection
        </h1>
      <p className=" text-gray-700 text-sm sm:text-base mb-6 lg:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

   <button className="bg-[#B88E2F] text-white px-8 sm:px-10 py-3 sm:py-4 font-semibold hover:bg-[#9c7624] transition"> BUY NOW </button>

   </div>

    </section>
  );
};

export default Hero;