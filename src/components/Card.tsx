"use client";

import { Laptop } from "@prisma/client";
import React from "react";
import Rating from "./Rating";

const Card = ({ product }: { product: Laptop }) => {
  return (
    <div className="flex max-h-52 flex-wrap gap-2 rounded-lg border p-4 shadow-high">
      <h1 className="line-clamp-3 w-full font-bold">
        {`Laptop ${product.brand ? `${product.brand}` : ""} ${product.model ? `${product.model}` : ""} ${product.screen_size ? `${product.screen_size}` : ""} ${product.graphics ? `${product.graphics}` : ""} ${product.graphics_coprocessor ? `${product.graphics_coprocessor}` : ""} ${product.ram ? `${product.ram} RAM` : ""} ${product.harddisk ? `${product.harddisk}` : ""} ${product.cpu ? `${product.cpu}` : ""} ${product.cpu_speed ? `${product.cpu_speed}` : ""} ${product.OS ? `${product.OS}` : ""} ${product.color ? `${product.color}` : ""}`
          .trim()
          .replace(/\s+/g, " ")}
      </h1>
      <p className="text-display line-clamp-1 w-full text-sm">{`${product.special_features ? product.special_features : "Tidak ada fitur tambahan"}`}</p>
      <span className="flex w-full gap-2">
        <Rating rating={product.rating ? parseFloat(`${product.rating}`) : 0} />
        <p className="text-display">
          {product.rating
            ? `${parseFloat(`${product.rating}`)}/5.0`
            : "0.0/5.0"}
        </p>
      </span>
      <p className="text-display font-bold">{`${product.price ? product.price : "Habis"}`}</p>
    </div>
  );
};

export default Card;
