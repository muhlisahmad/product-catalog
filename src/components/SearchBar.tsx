"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("search", query);
      params.delete("page");
      query !== ""
        ? router.replace(`${pathname}?${params.toString()}`)
        : router.replace(`${pathname}`);
    }, 300);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <span className="flex w-full items-center gap-2 rounded-full border-4 border-neutral-300 bg-neutral-100 px-3 py-2">
      <FiSearch
        className="min-w-fit text-xl text-neutral-300"
        strokeWidth={"4px"}
      />
      <input
        type="text"
        className="w-full text-lg text-neutral-500 outline-none placeholder:text-neutral-500"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </span>
  );
};

export default SearchBar;
