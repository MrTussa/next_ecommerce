"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  { id: 1, url: "https://www.pexels.com/ru-ru/photo/28462495/" },
  { id: 2, url: "https://www.pexels.com/ru-ru/photo/27576233/" },
  { id: 3, url: "https://www.pexels.com/ru-ru/photo/18998608/" },
  { id: 4, url: "https://www.pexels.com/ru-ru/photo/28501949/" },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="product image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map(({ id, url }, index) => (
          <div
            key={id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(index)}
          >
            <Image
              src={url}
              alt="product image"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
