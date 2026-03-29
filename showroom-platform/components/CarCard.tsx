import Link from "next/link";

type CarCardProps = {
  locale: "ar" | "fr";
  car: {
    slug: string;
    image: string;
    title: string;
    priceDzd: number;
    year: number;
    mileageKm: number;
  };
};

export function CarCard({ locale, car }: CarCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold text-white">{car.title}</h3>
        <div className="flex items-center justify-between text-sm text-zinc-300">
          <span>{car.year}</span>
          <span>{car.mileageKm.toLocaleString()} km</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-white">{car.priceDzd.toLocaleString()} DZD</p>
          <Link
            href={`/${locale}/cars/${car.slug}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
