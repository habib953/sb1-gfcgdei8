export type CarFilterQuery = {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  year?: number;
  maxMileage?: number;
  fuel?: "petrol" | "diesel" | "hybrid" | "electric";
  transmission?: "manual" | "automatic";
};

export function buildCarWhere(showroomId: string, query: CarFilterQuery) {
  return {
    showroomId,
    ...(query.brand ? { brand: { slug: query.brand } } : {}),
    ...(query.year ? { year: query.year } : {}),
    ...(query.fuel ? { fuel: query.fuel } : {}),
    ...(query.transmission ? { transmission: query.transmission } : {}),
    ...(query.minPrice || query.maxPrice
      ? {
          priceDzd: {
            ...(query.minPrice ? { gte: query.minPrice } : {}),
            ...(query.maxPrice ? { lte: query.maxPrice } : {}),
          },
        }
      : {}),
    ...(query.maxMileage ? { mileageKm: { lte: query.maxMileage } } : {}),
  };
}
