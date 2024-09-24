"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const stock = 4;

  const handleQuantity = (type: "increace" | "decreace") => {
    if (type === "decreace" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "increace" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-medium ">Choose a Quantity</h5>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("decreace")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("increace")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left! <br />{" "}
            {"Don't"}
            miss it
          </div>
        </div>
        <button className="w-26 text-sm rounded-3xl ring-1 ring-pink text-pink py-2 px-4 hover:bg-pink hover:text-white disabled:cursor-not-allowed disabled:bg-rose-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
