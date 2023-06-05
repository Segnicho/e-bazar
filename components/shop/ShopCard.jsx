// "use client";
// import { furniture } from "@/public";
// import Image from "next/image";
// import React from "react";
// import { BiMap } from "react-icons/bi";
// const ShopCard = ({
//   logo = furniture,
//   name = "Furniture Shop",
//   address = "king George VI St, Addis Ababa",
// }) => {
//   return (
//     <div className="m-2">
//       <div className="md:w-[350px] md:h-[50px] m-3">
//         <div className="bg-rose m-2 flex border-2 p-3 rounded-md">
//           <Image
//             src={logo}
//             alt="name"
//             className="rounded-full basis-1/5 scale-75"
//           />
//           <div className="flex flex-col items-start justify-center basis-4/5 ml-3 gap-1">
//             <h3 className="text-md font-semibold">{name}</h3>
//             <p className="flex">
//               <BiMap className="h-8 w-5" />
//               <address className="text-sm">{address}</address>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCard;


import { furniture } from "@/public";
import Image from "next/image";
import React from "react";
import { BiMap } from "react-icons/bi";

const ShopCard = ({
  logo = furniture,
  name = "Furniture Shop",
  address = "King George VI St, Addis Ababa",
}) => {
  return (
    <div className="m-2">
      <div className="w-full">
        <div className="bg-rose m-2 flex border-2 p-3 rounded-md">
          <Image
            src={logo}
            alt="name"
            className="rounded-full w-1/5 scale-75"
          />
          <div className="flex flex-col items-start justify-center ml-3 gap-1 flex-1">
            <h3 className="text-md font-semibold">{name}</h3>
            <p className="flex items-center">
              <BiMap className="h-8 w-5" />
              <address className="text-sm">{address}</address>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
 