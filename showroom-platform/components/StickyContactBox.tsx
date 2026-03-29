export function StickyContactBox({ whatsapp, phone }: { whatsapp: string; phone: string }) {
  return (
    <div className="sticky top-20 space-y-3 rounded-2xl border border-white/10 bg-zinc-900 p-4">
      <a href={`https://wa.me/${whatsapp}`} className="block rounded-xl bg-green-500 px-4 py-3 text-center font-semibold text-black">
        WhatsApp
      </a>
      <a href={`tel:${phone}`} className="block rounded-xl bg-white px-4 py-3 text-center font-semibold text-black">
        Call showroom
      </a>
    </div>
  );
}
