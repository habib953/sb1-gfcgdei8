import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildCarWhere } from "@/lib/car-filters";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const showroomId = searchParams.get("showroomId");
  if (!showroomId) return NextResponse.json({ error: "showroomId is required" }, { status: 400 });

  const where = buildCarWhere(showroomId, {
    brand: searchParams.get("brand") ?? undefined,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    year: searchParams.get("year") ? Number(searchParams.get("year")) : undefined,
    maxMileage: searchParams.get("maxMileage") ? Number(searchParams.get("maxMileage")) : undefined,
    fuel: (searchParams.get("fuel") as "petrol" | "diesel" | "hybrid" | "electric" | null) ?? undefined,
    transmission: (searchParams.get("transmission") as "manual" | "automatic" | null) ?? undefined,
  });

  const cars = await prisma.car.findMany({
    where,
    include: {
      brand: true,
      images: { orderBy: { sortOrder: "asc" } },
      translations: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(cars);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const car = await prisma.car.create({
    data: {
      showroomId: body.showroomId,
      brandId: body.brandId,
      model: body.model,
      slug: body.slug,
      year: body.year,
      priceDzd: body.priceDzd,
      mileageKm: body.mileageKm,
      fuel: body.fuel,
      transmission: body.transmission,
      status: body.status ?? "available",
      translations: {
        create: [
          { language: "ar", title: body.titleAr, description: body.descriptionAr },
          { language: "fr", title: body.titleFr, description: body.descriptionFr },
        ],
      },
      images: {
        create: (body.images ?? []).map((img: { imageUrl: string; publicId?: string }, index: number) => ({
          showroomId: body.showroomId,
          imageUrl: img.imageUrl,
          publicId: img.publicId,
          sortOrder: index,
        })),
      },
    },
    include: { translations: true, images: true },
  });

  return NextResponse.json(car, { status: 201 });
}
