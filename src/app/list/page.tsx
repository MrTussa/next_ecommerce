import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="hidden bg-rose-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 20% off on
            <br />
            Selected Products
          </h2>
          <button className="rounded-3xl bg-pink text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="woman.png" alt="woman" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h3 className="mt-12 text-xl font-semibold">Shoes for you!</h3>
      <ProductList />
    </div>
  );
};

export default ListPage;
