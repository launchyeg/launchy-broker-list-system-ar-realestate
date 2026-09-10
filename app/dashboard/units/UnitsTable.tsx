"use client";

import { useState } from "react";
import type { Unit } from "@/types/unit";
import EditUnitModal from "./EditUnitModal";

export default function UnitsTable({ units }: { units: Unit[] }) {
  const [editUnit, setEditUnit] = useState<Unit | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [list, setList] = useState<Unit[]>(units);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = list.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.destinationLabel.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || u.status === filter;
    return matchSearch && matchFilter;
  });

  async function handleDelete(slug: string) {
    const res = await fetch("/api/dashboard/units/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });

    if (res.ok) {
      setList((prev) => prev.filter((u) => u.slug !== slug));
    } else {
      const data = await res.json();
      console.error("Failed to delete:", data);
      alert("Failed to delete unit. Check console.");
    }
  }

  const statusStyle: Record<string, string> = {
    available: "bg-emerald-50 text-emerald-700",
    sold: "bg-red-50 text-red-600",
    reserved: "bg-amber-50 text-amber-700",
  };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search units..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#C9A96E] bg-white w-64"
        />
        {["all", "available", "sold", "reserved"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide transition-colors ${
              filter === s
                ? "bg-[#1B2B3A] text-white"
                : "bg-white border border-stone-200 text-stone-500 hover:border-stone-400"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr>
              {[
                "Property",
                "Destination",
                "Type",
                "Price",
                "Status",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((unit, index) => (
              <tr
                key={unit.id}
                className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-stone-400 w-2.5 text-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg bg-cover bg-center bg-stone-200 flex-shrink-0"
                      style={{ backgroundImage: `url(${unit.coverImage})` }}
                    />
                    <div>
                      <p className="font-medium text-stone-800">{unit.name}</p>
                      <p className="text-xs text-stone-400">
                        {unit.projectLabel}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-stone-600">
                  {unit.destinationLabel}
                </td>
                <td className="px-5 py-4 text-stone-600">{unit.type}</td>
                <td className="px-5 py-4 font-medium text-stone-800">
                  {unit.currency} {unit.price.toLocaleString("en-US")}
                  {unit.listingType === "rent" && <span> / Per Night</span>}
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-col gap-1">
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-medium uppercase w-fit ${statusStyle[unit.status]}`}
                    >
                      {unit.status}
                    </span>
                    <span className="px-2 text-[10px] text-stone-400 font-medium uppercase tracking-wide">
                      {unit.listingType}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditUnit(unit)}
                      className="text-xs font-medium text-[#1B2B3A] hover:text-[#C9A96E] transition-colors"
                    >
                      Edit
                    </button>
                    <a
                      href={`/properties/${unit.slug}`}
                      target="_blank"
                      className="text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors"
                    >
                      View
                    </a>
                    {confirmDelete === unit.slug ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            handleDelete(unit.slug);
                            setConfirmDelete(null);
                          }}
                          className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmDelete(unit.slug)}
                        className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-stone-400 text-sm">
            No units found.
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editUnit && (
        <EditUnitModal
          unit={editUnit}
          onClose={() => setEditUnit(null)}
          onSave={(updated) => {
            setList((prev) =>
              prev.map((u) => (u.slug === updated.slug ? updated : u)),
            );
            setEditUnit(null);
          }}
        />
      )}
    </>
  );
}
