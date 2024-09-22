import { filters } from "@/constants";
import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2  w-24  ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2  w-24  ring-1 ring-gray-400"
        />
        {filters.map((item, index) => (
          <select
            key={index}
            name="type"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
          >
            {item.map(({ title, value }, index) => (
              <option value={value} key={index}>
                {title}
              </option>
            ))}
          </select>
        ))}
      </div>
      <div>
        <select
          name=""
          id=""
          className="text-xs rounded-2xl pl-2  w-24  ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
