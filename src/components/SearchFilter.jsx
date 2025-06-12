import React from "react";
export default function SearchFilter({
  search,
  setSearch,
  filterCap,
  setFilterCap,
  currency,
  setCurrency,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Search coins"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <input
        type="number"
        placeholder="Min Market Cap"
        value={filterCap}
        onChange={(e) => setFilterCap(Number(e.target.value))}
        className="border px-3 py-2 rounded"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="inr">INR</option>
        <option value="gbp">GBP</option>
      </select>
    </div>
  );
}
