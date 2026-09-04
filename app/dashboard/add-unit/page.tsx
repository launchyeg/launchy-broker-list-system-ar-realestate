"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import siteConfig from "@/siteConfig";
import CustomSelect from "@/components/dashboard/CustomSelect";
import ArrayField from "@/components/dashboard/ArrayField";
import ImageInput from "@/components/dashboard/ImageInput";
import GalleryInput from "@/components/dashboard/GalleryInput";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function formatPrice(price: number, currency: string) {
  return `${currency} ${price.toLocaleString("en-US")}`;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AddUnitPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    destination: "",
    destinationLabel: "",
    project: "",
    projectLabel: "",
    price: 0,
    currency: "",
    beds: "",
    baths: "",
    size: "",
    type: "",
    status: "",
    featured: false,
    coverImage: "",
    gallery: [] as string[],
    description: "",
    highlights: [],
    deliveryYear: "",
    listingType: "",
  });

  function update(field: string, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        id: `unit-${Date.now()}`,
        slug: slugify(form.name),
        highlights: form.highlights.filter(Boolean),
        deliveryYear: form.deliveryYear || null,
      };
      const res = await fetch("/api/dashboard/units/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      router.push("/dashboard/units");
    } catch {
      setError("Failed to add unit. Please try again.");
      setSaving(false);
    }
  }

  const inputClass =
    "w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white hover:border-stone-300";
  const labelClass =
    "block text-xs font-medium text-stone-400 mb-1 uppercase tracking-wide";

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-stone-800 mb-1">
          Add New Unit
        </h1>
        <p className="text-stone-400 text-sm">
          Fill in the details to add a new property.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-stone-200 p-6 space-y-5"
      >
        {/* Name — auto generates slug */}
        <div>
          <label className={labelClass}>
            Property Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            className={inputClass}
            placeholder="The Ivory Penthouse"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {form.name && (
            <p className="text-[11px] text-stone-400 mt-1">
              Slug:{" "}
              <span className="text-[#C9A96E] font-mono">
                {slugify(form.name)}
              </span>
            </p>
          )}
        </div>

        {/* Destination + Project + Listing Type */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>
              Destination <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              required={true}
              value={form.destination}
              placeholder="Select destination"
              onChange={(val) => {
                const dest = (siteConfig.destinations as any[]).find(
                  (d) => d.slug === val,
                );
                update("destination", val);
                update("destinationLabel", dest?.label || "");
              }}
              options={(siteConfig.destinations as any[]).map((d) => ({
                value: d.slug,
                label: d.label,
              }))}
            />
          </div>
          <div>
            <label className={labelClass}>Project</label>
            <CustomSelect
              value={form.project}
              placeholder="Select project"
              onChange={(val) => {
                const proj = (siteConfig.projects as any[]).find(
                  (p) => p.slug === val,
                );
                update("project", val);
                update("projectLabel", proj?.label || "");
              }}
              options={(siteConfig.projects as any[]).map((p) => ({
                value: p.slug,
                label: p.label,
              }))}
            />
          </div>
          <div>
            <label className={labelClass}>
              Listing Type <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              required={true}
              value={form.listingType}
              onChange={(val) => update("listingType", val)}
              options={[
                { value: "primary", label: "Primary" },
                { value: "resale", label: "Resale" },
                { value: "rent", label: "Rent" },
              ]}
            />
          </div>
        </div>

        {/* Price */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className={labelClass}>
              Price <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="number"
              className={inputClass}
              placeholder="8900000"
              value={form.price || ""}
              onChange={(e) => update("price", +e.target.value)}
            />
            {form.price > 0 && (
              <p className="text-[11px] text-stone-400 mt-1">
                {formatPrice(form.price, form.currency)}
              </p>
            )}
          </div>
          <div>
            <label className={labelClass}>
              Currency <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              required={true}
              value={form.currency}
              onChange={(val) => update("currency", val)}
              options={[
                { value: "EGP", label: "EGP" },
                { value: "USD", label: "USD" },
                { value: "EUR", label: "EUR" },
              ]}
            />
          </div>
        </div>

        {/* Type + Status */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Type <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              required={true}
              value={form.type}
              onChange={(val) => update("type", val)}
              options={[
                { value: "Villa", label: "Villa" },
                { value: "Townhouse", label: "Townhouse" },
                { value: "Penthouse", label: "Penthouse" },
                { value: "Apartment", label: "Apartment" },
                { value: "Studio", label: "Studio" },
              ]}
            />
          </div>
          <div>
            <label className={labelClass}>
              Status <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              required={true}
              value={form.status}
              onChange={(val) => update("status", val)}
              options={[
                { value: "available", label: "Available" },
                { value: "sold", label: "Sold" },
                { value: "reserved", label: "Reserved" },
              ]}
            />
          </div>
        </div>

        {/* Beds / Baths / Size */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>
              Beds <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="number"
              className={inputClass}
              value={form.beds}
              placeholder="1"
              onChange={(e) => update("beds", +e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>
              Baths <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="number"
              className={inputClass}
              value={form.baths}
              placeholder="1"
              onChange={(e) => update("baths", +e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>
              Size m² <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="number"
              className={inputClass}
              placeholder="100"
              value={form.size || ""}
              onChange={(e) => update("size", +e.target.value)}
            />
          </div>
        </div>

        {/* Delivery Year */}
        <div>
          <label className={labelClass}>Delivery Year</label>
          <input
            type="number"
            className={inputClass}
            placeholder="Optional — e.g. 2026"
            value={form.deliveryYear ?? ""}
            onChange={(e) =>
              update("deliveryYear", e.target.value ? +e.target.value : null)
            }
          />
        </div>

        {/* Cover Image */}
        <ImageInput
          required
          label="Cover Image"
          value={form.coverImage}
          onChange={(val) => update("coverImage", val)}
        />

        {/* Gallery */}
        <GalleryInput
          images={form.gallery ?? []}
          onChange={(imgs) => update("gallery", imgs)}
        />

        {/* Description */}
        <div>
          <label className={labelClass}>
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            className={inputClass}
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </div>

        {/* Highlights */}
        <ArrayField
          label="Highlights"
          values={form.highlights ?? []}
          onChange={(vals) => update("highlights", vals)}
          placeholder="e.g. Private rooftop terrace with 360° views"
        />

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={form.featured}
            onChange={(e) => update("featured", e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="text-sm text-stone-600">
            Mark as Featured (PROJECT badge)
          </label>
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => router.push("/dashboard/units")}
            className="flex-1 py-3 border border-stone-200 text-stone-600 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex-1 py-3 bg-[#1B2B3A] text-white text-sm font-medium rounded-lg hover:bg-[#2D4258] transition-colors disabled:opacity-60"
          >
            {saving ? "Adding..." : "Add Unit"}
          </button>
        </div>
      </form>
    </div>
  );
}
