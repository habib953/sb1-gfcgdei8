const fakeRows = [
  { id: "1", model: "BMW X5", year: 2022, price: 14500000, status: "available" },
  { id: "2", model: "Audi Q8", year: 2021, price: 13900000, status: "sold" },
];

export default function AdminCarsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <button className="rounded-xl bg-white px-4 py-2 font-semibold text-black">Add car</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-zinc-900 text-zinc-400">
            <tr>
              <th className="p-4">Model</th>
              <th className="p-4">Year</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {fakeRows.map((row) => (
              <tr key={row.id} className="border-t border-white/10">
                <td className="p-4">{row.model}</td>
                <td className="p-4">{row.year}</td>
                <td className="p-4">{row.price.toLocaleString()} DZD</td>
                <td className="p-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
