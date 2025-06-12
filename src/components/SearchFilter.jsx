import React from "react";
export default function SearchFilter({
  search,
  setSearch,
  filterCap,
  setFilterCap,
}) {
  return (
    <div className="mb-4 flex gap-4">
      <input
        type="text"
        placeholder="Search coins..."
        className="border px-2 py-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min market cap"
        className="border px-2 py-1"
        value={filterCap}
        onChange={(e) => setFilterCap(Number(e.target.value))}
      />
    </div>
  );
}
