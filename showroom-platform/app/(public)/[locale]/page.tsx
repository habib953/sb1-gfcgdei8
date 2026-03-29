import { CarCard } from "@/components/CarCard";

const featuredCars = [
  {
    slug: "bmw-x5-2022",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    title: "BMW X5 2022",
    priceDzd: 14500000,
    year: 2022,
    mileageKm: 24000,
  },
];

export default async function HomePage({ params }: { params: Promise<{ locale: "ar" | "fr" }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-4xl font-bold md:text-6xl">Premium Cars, Trusted Showroom</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">Explore luxury, sports, and daily premium vehicles curated for Algerian buyers.</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:grid-cols-3">
        {featuredCars.map((car) => (
          <CarCard key={car.slug} locale={locale} car={car} />
        ))}
      </section>
    </main>
  );
}
