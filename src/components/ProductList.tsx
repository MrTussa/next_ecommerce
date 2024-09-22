import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-1 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">213</span>
        </div>
        <div className="text-sm text-gray-500">descrip</div>
        <button className="rounded-2xl ring-1 ring-pink text-pink w-max py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
