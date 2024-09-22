"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const product = formData.get("product") as string;

    if (product) {
      router.push(`/list?name=${product}`);
    }
  };

  return (
    <form
      className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        name="product"
        type="text"
        placeholder="Seach"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
