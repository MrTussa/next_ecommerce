"use client";

import useCartStore from "@/hooks/useCartStore";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";

const CartModal = () => {
  const { cart, isLoading, removeItem } = useCartStore();

  const wixClient = useWixClient();

  return (
    <div className=" w-max absolute p-4 rounded-md shadow-card bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {/* {isLoading ? (
        "Loading"
      ) : */}
      {cart.lineItems?.length === 0 ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems!.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt="product"
                    width={72}
                    height={72}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-sm">
                        $
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-gray-600">
                            {item.quantity} *
                          </div>
                        )}
                        {item.price?.amount}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">
                      {item.availability?.status}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">QTY {item.quantity}</span>
                    <span
                      className="text-blue-500"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex items-center font-semibold">
              <span>Subtotal</span>
              {/* <span>${cart.subtotal ? cart.subtotal?.amount || "0"}</span> */}
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes included at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">
                View cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
