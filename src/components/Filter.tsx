"use client";

import { filters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2  w-24  ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2  w-24  ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {filters.map((item, index) => (
          <select
            key={index}
            name={item.name}
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 cursor-pointer"
            onChange={handleFilterChange}
          >
            {item.items.map(({ title, value }, index) => (
              <option value={value} key={index}>
                {title}
              </option>
            ))}
          </select>
        ))}
      </div>
      <div>
        <select
          name="sort"
          id=""
          className="text-xs rounded-2xl py-2 px-4 w-24  ring-1 ring-gray-400 cursor-pointer"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lasUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
