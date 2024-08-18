import { prisma } from "@/lib/prisma";
import { FieldRef } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const size = parseInt(searchParams.get("size") || "10", 10);
    const search = searchParams.get("search") || "";

    const laptops = await prisma.laptop.findMany({
      where: {
        OR: [
          {
            brand: {
              contains: search as
                | string
                | FieldRef<"Laptop", "String">
                | undefined,
              mode: "insensitive",
            },
          },
          {
            model: {
              contains: search as
                | string
                | FieldRef<"Laptop", "String">
                | undefined,
              mode: "insensitive",
            },
          },
        ],
      },
      skip: (page - 1) * size,
      take: size,
    });

    if (laptops.length === 0) {
      return NextResponse.json(
        { status: "failed", message: "Product data not found" },
        { status: 404 }
      );
    }

    const totalLaptops = await prisma.laptop.count({
      where: {
        OR: [
          {
            brand: {
              contains: search as
                | string
                | FieldRef<"Laptop", "String">
                | undefined,
              mode: "insensitive",
            },
          },
          {
            model: {
              contains: search as
                | string
                | FieldRef<"Laptop", "String">
                | undefined,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return NextResponse.json(
      {
        status: "success",
        data: laptops,
        paging: {
          page,
          size,
          total_page: Math.ceil(totalLaptops / size),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while fetching data",
        error: error,
      },
      { status: 500 }
    );
  }
}
