import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";

const comps = [
  {
    name: "Palms Crossing",
    detail: { es: "McAllen, TX · Inquilinos nacionales de crédito", en: "McAllen, TX · National credit tenants" },
    sf: "339,000", occ: "98%", price: "$81.6M", psf: "$241", cap: "N/D",
    status: { es: "Vendido", en: "Sold" }, statusType: "sold" as const,
  },
  {
    name: "New-Build Retail Center",
    detail: { es: "McAllen, TX · Cerca de Sam's Club · Clase B", en: "McAllen, TX · Near Sam's Club · Class B" },
    sf: "19,671", occ: { es: "Nuevo", en: "New" }, price: "~$7.4M", psf: "$376", cap: "6.50%",
    status: { es: "Activo", en: "Active" }, statusType: "mod" as const,
  },
  {
    name: "Floor & Decor NNN",
    detail: { es: "McAllen, TX · Arrendamiento de terreno a 55 años", en: "McAllen, TX · 55-year ground lease" },
    sf: "65,000", occ: "100%", price: "$7.0M", psf: "$108", cap: "5.00%",
    status: { es: "Vendido", en: "Sold" }, statusType: "sold" as const,
  },
  {
    name: "Edinburg Shopping Centers (Avg)",
    detail: { es: "Edinburg, TX · Promedio del mercado", en: "Edinburg, TX · Market average all types" },
    sf: { es: "Varía", en: "Varies" }, occ: { es: "Varía", en: "Varies" }, price: { es: "Varía", en: "Varies" }, psf: "~$175", cap: "~7.15%",
    status: { es: "Referencia", en: "Benchmark" }, statusType: "low" as const,
  },
  {
    name: "Trenton Plaza",
    detail: { es: "Edinburg, TX · 76% ocupado", en: "Edinburg, TX · 76% occupied" },
    sf: "98,426", occ: "76%", price: "$12.8M", psf: "$125", cap: "8.31%",
    status: { es: "Precio Vendedor", en: "Seller's Ask" }, statusType: "high" as const,
  },
];

const tagColors = {
  high: "text-destructive bg-destructive/10",
  mod: "text-warning bg-warning/10",
  low: "text-success bg-success/10",
  sold: "text-success bg-success/10",
};

const renderCell = (v: string | { es: string; en: string }) =>
  typeof v === "string" ? v : <T es={v.es} en={v.en} />;

const CompsSection = () => (
  <section id="comps" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Transacciones Comparables", en: "Comparable Transactions" }}
      title={{ es: "Hoja Completa de Comparables", en: "Full Comp Sheet" }}
      subtitle={{
        es: "Todas las transacciones comparables utilizadas en este análisis. Cada entrada ayuda a establecer el corredor de precios de Trenton Plaza.",
        en: "All comparable transactions used in this analysis. Each entry helps establish the pricing corridor for Trenton Plaza.",
      }}
    />

    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              {[
                { es: "Propiedad", en: "Property" },
                { es: "Pies²", en: "SF" },
                { es: "Ocupación", en: "Occupancy" },
                { es: "Precio", en: "Price" },
                { es: "$/SF", en: "$/SF" },
                { es: "Cap Rate", en: "Cap Rate" },
                { es: "Estatus", en: "Status" },
              ].map((h, i) => (
                <th key={i} className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                  <T es={h.es} en={h.en} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comps.map((c, i) => (
              <tr key={i} className="transition-colors hover:bg-secondary/20">
                <td className="px-4 py-3.5 border-b border-border">
                  <div className="font-semibold text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{renderCell(c.detail)}</div>
                </td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{renderCell(c.sf)}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{renderCell(c.occ)}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums font-semibold text-foreground">{renderCell(c.price)}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{c.psf}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{c.cap}</td>
                <td className="px-4 py-3.5 border-b border-border">
                  <span className={`inline-block text-[10px] tracking-[1px] uppercase font-bold px-2.5 py-1 rounded ${tagColors[c.statusType]}`}>
                    {renderCell(c.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default CompsSection;
