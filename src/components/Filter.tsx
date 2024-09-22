import { filters } from "@/constants";
import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6">
        {filters.map((item) => (
          <select
            name="type"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
          >
            {item.map(({ title, value }) => (
              <option value={value}>{title}</option>
            ))}
          </select>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
