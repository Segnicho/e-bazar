import { ShopCard } from "@/components";
import { shops } from "@/data/shops";
import Link from "next/link";
import React from "react";

const Shops = () => {
  return (
    <div>
      <div className="m-8 px-7">
        <h1 className="font-bold  mt-5 ml-3">All Shops</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
          {shops.map((shop, index) => (
            <Link href={`shops/${shop.path} `} key={index}>
              <ShopCard
                name={shop.name}
                address={shop.address}
                logo={shop.photo}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
