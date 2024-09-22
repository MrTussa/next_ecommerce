import { company, help, shop } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 ">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            impedit?
          </p>
          <span className="font-semibold">somemail@text.com</span>
          <span className="font-semibold">+998 99 123 45 67</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h4 className="font-medium text-lg">COMPANY</h4>
            <div className="flex flex-col gap-6">
              {company.map((item, index) => (
                <Link href={item.url} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="font-medium text-lg">SHOP</h4>
            <div className="flex flex-col gap-6">
              {shop.map((item, index) => (
                <Link href={item.url} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="font-medium text-lg">HELP</h4>
            <div className="flex flex-col gap-6">
              {help.map((item, index) => (
                <Link href={item.url} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h4 className="font-medium text-lg">SUBSCRIBE</h4>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-pink text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>2024 Lama Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
