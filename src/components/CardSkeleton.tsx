"use client";

import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex h-fit max-h-52 flex-wrap gap-2 rounded-lg border p-4 shadow-high">
      <span className="w-full">
        <span className="h-6 w-full animate-pulse py-1">
          <span className="inline-block h-4 w-full rounded-full bg-neutral-300"></span>
        </span>
        <span className="h-6 w-full animate-pulse py-1">
          <span className="inline-block h-4 w-full rounded-full bg-neutral-300"></span>
        </span>
        <span className="h-6 w-3/4 animate-pulse py-1">
          <span className="inline-block h-4 w-full rounded-full bg-neutral-300"></span>
        </span>
      </span>
      <span className="h-5 w-full animate-pulse">
        <span className="inline-block h-[14px] w-2/3 rounded-full bg-neutral-300"></span>
      </span>
      <span className="h-6 w-full animate-pulse">
        <span className="inline-block h-5 w-2/3 rounded-full bg-neutral-300"></span>
      </span>
      <span className="h-6 w-full animate-pulse">
        <span className="inline-block h-4 w-2/12 rounded-full bg-neutral-300"></span>
      </span>
    </div>
  );
};

export default CardSkeleton;
