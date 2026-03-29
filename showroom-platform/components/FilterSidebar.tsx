"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    router.push(`?${params.toString()}`);
  }

  return (
    <aside className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900 p-4">
      <h2 className="text-lg font-semibold text-white">Filters</h2>
      <select onChange={(e) => setParam("fuel", e.target.value)} className="w-full rounded-lg bg-zinc-800 p-2 text-white">
        <option value="">Fuel</option>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
        <option value="hybrid">Hybrid</option>
        <option value="electric">Electric</option>
      </select>
      <select onChange={(e) => setParam("transmission", e.target.value)} className="w-full rounded-lg bg-zinc-800 p-2 text-white">
        <option value="">Transmission</option>
        <option value="manual">Manual</option>
        <option value="automatic">Automatic</option>
      </select>
    </aside>
  );
}
