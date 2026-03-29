import { StickyContactBox } from "@/components/StickyContactBox";

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1fr_320px]">
      <section className="space-y-4">
        <div className="aspect-video rounded-2xl bg-zinc-900" />
        <h1 className="text-3xl font-bold text-white">{slug.replaceAll("-", " ")}</h1>
        <p className="text-zinc-300">Full translated description, specs, and image gallery go here.</p>
      </section>
      <StickyContactBox whatsapp="213555000111" phone="+213555000111" />
    </main>
  );
}
