// import tower from "../assets/tower.jpeg";
// import frame4 from "../assets/Frame 11.png";
// import frame5 from "../assets/image1.png";
// import bike from "../assets/bike.jpeg";

// const BentoGrid = () => {
//   return (
//     <section className="w-full py-12 bg-[#F7F7F7]">
//       <div className="container mx-auto px-6 md:px-4">
//         {/* Header Text */}
//         <div className="text-center mb-10">
//           <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors">
//             <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
//             Who we are
//           </button>
//           <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
//             At Harlivia, we believe in creating value through innovation and
//             excellence. With a diverse portfolio spanning Agricultural
//             Production & Exports, Real Estate, Energy, and Logistics, our
//             mission is to provide premium solutions that elevate lifestyles,
//             empower businesses, and deconstruct barriers across borders.
//           </p>
//         </div>
//         <div className="text-center mb-8">
//           <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors">
//             <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
//             What we have to offer
//           </button>
//           <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
//             Whether it's bringing joy through good food, helping you find the
//             perfect home, powering communities with sustainable energy and
//             affordable metering solutions, or getting your goods where they need
//             to be, we do it with passion and purpose.
//           </p>
//         </div>

//         {/* Bento Grid Layout with improved mobile handling */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
//           {/* Properties Card */}
//           <div className="md:col-span-5 relative rounded-2xl overflow-hidden h-32 sm:h-64 md:h-auto lg:h-100">
//             <img
//               src={tower || "/placeholder.svg"}
//               alt="Modern building interior"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>

//           {/* Cargo & Logistics Card */}
//           <div className="md:col-span-7 relative rounded-2xl overflow-hidden h-[70px] sm:h-52 md:h-60 lg:h-100">
//             <img
//               src={bike || "/placeholder.svg"}
//               alt="Delivery person on motorcycle"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//             {/* Text Overlay - Positioned at the Top Left */}
//             <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 flex flex-col items-start">
//               {/* Title with Green Border */}
//               <div className="inline-block bg-green-600 rounded-lg px-3 py-1 text-black text-sm sm:text-base md:text-lg font-semibold">
//                 Cargo & Logistics
//               </div>
//               {/* Description Text */}
//               <p className="text-white text-sm sm:text-base md:text-lg font-semibold mt-2">
//                 Seamless, efficient logistics solutions <br /> designed to keep
//                 you moving."
//               </p>
//             </div>
//           </div>

//           {/* Energy Card */}
//           <div className="md:col-span-7 relative rounded-2xl overflow-hidden h-52 sm:h-64 md:h-auto">
//             <img
//               src={frame5 || "/placeholder.svg"}
//               alt="Solar panels at sunset"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>

//           {/* Agric Card */}
//           <div className="md:col-span-5 relative rounded-2xl overflow-hidden h-52 sm:h-64 md:h-auto">
//             <img
//               src={frame4 || "/placeholder.svg"}
//               alt="Grain products"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BentoGrid;

import frame2 from "../assets/Frame 6.png";
import frame4 from "../assets/Frame 11.png";
import frame5 from "../assets/image1.png";
import frame6 from "../assets/image2.png";

const BentoGrid = () => {
  return (
    <section className="w-full py-12 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        {/* Header Text */}

        <div className="text-center mb-10">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Who we are
          </button>

          <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            At Harlivia, we believe in creating value through innovation and
            ]excellence. With a diverse portfolio spanning Agricultural
            Production & Exports, Real Estate, Energy, and Logistics, our
            mission is to provide premium solutions that elevate lifestyles,
            empower businesses, and deconstruct barriers across borders.
          </p>
        </div>

        <div className="text-center mb-8">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            What we have to offer
          </button>

          <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Whether it's bringing joy through good food, helping you find the
            perfect home, powering communities with sustainable energy and //
            affordable metering solutions, or getting your goods where they need
            to be, we do it with passion and purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Properties Card */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden">
            {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
            <div className="w-full h-full  md:aspect-auto">
              <img
                src={frame2 || "/placeholder.svg"}
                alt="Modern building interior"
                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
              />
            </div>
          </div>

          {/* Cargo & Logistics Card */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden">
            {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
            <div className="w-full h-full  md:aspect-auto">
              <img
                src={frame6 || "/placeholder.svg"}
                alt="Delivery person on motorcycle"
                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
              />
            </div>
          </div>

          {/* Energy Card */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden">
            {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
            <div className="w-full h-full  md:aspect-auto">
              <img
                src={frame5 || "/placeholder.svg"}
                alt="Solar panels at sunset"
                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
              />
            </div>
          </div>

          {/* Agric Card */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden">
            {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
            <div className="w-full h-full  md:aspect-auto">
              <img
                src={frame4 || "/placeholder.svg"}
                alt="Grain products"
                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
