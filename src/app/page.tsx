"use client";

import Card from "@/components/Card";
import CardSkeleton from "@/components/CardSkeleton";
import { Laptop } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export type ResponseError = {
  status: string;
  message: string;
};

export type ProductsResponse = {
  status: "suceess";
  data: Laptop[];
  paging: {
    page: number;
    size: number;
    total_page: number;
  };
};

export default function Home() {
  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const [responseError, setResponseError] = useState<ResponseError | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const search = searchParams.get("search") || "";
      const page = searchParams.get("page") || "1";
      const size = searchParams.get("size") || "10";
      const res = await fetch(
        `http://localhost:3000/api/products?search=${search}&page=${page}&size=${size}`
      );
      const data: ProductsResponse | ResponseError = await res.json();

      if (res.status !== 200) {
        setProducts(null);
        setTotalPages(0);
        setResponseError(data as ResponseError);
      } else {
        setProducts(data as ProductsResponse);
        setTotalPages((data as ProductsResponse).paging.total_page);
        setResponseError(null);
      }
    } catch (error) {
      setProducts(null);
      setTotalPages(0);
      setResponseError({ status: "error", message: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {loading
        ? [0, 1, 3].map((_, idx) => <CardSkeleton key={idx} />)
        : products &&
          products.data.map((product, idx) => (
            <Card key={idx} product={product} />
          ))}
      {products && (
        <div className="col-span-1 flex w-full justify-center md:col-span-2 lg:col-span-3">
          <div className="my-4 flex w-fit justify-between gap-6">
            <button
              disabled={products?.paging.page === 1}
              type="button"
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.set("page", `${products.paging.page - 1}`);
                router.push(`${pathname}?${params.toString()}`);
              }}
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#c4c4c4] hover:border-none hover:bg-limegreen-700"
            >
              <FiChevronLeft className="group-hover:invert" />
            </button>
            <button
              disabled={products.paging.page === totalPages}
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.set("page", `${products.paging.page + 1}`);
                router.push(`${pathname}?${params.toString()}`);
              }}
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#c4c4c4] hover:border-none hover:bg-limegreen-700"
            >
              <FiChevronRight className="group-hover:invert" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
