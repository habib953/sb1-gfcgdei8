import { FilterSidebar } from "@/components/FilterSidebar";

export default function CarsPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-[280px_1fr]">
      <FilterSidebar />
      <section>
        <h1 className="mb-6 text-3xl font-bold text-white">Cars</h1>
      </section>
    </main>
  );
}
