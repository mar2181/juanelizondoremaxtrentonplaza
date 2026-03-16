import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";

const FinancialSection = () => (
  <section id="financial" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Análisis Financiero", en: "Financial Analysis" }}
      title={{ es: "ION: Nuestra Cifra vs. La del Vendedor", en: "NOI: Our Number vs. Seller's" }}
      subtitle={{
        es: "Comparación lado a lado del Ingreso Operativo Neto para entender de dónde proviene la diferencia de $111,150.",
        en: "Side-by-side comparison of Net Operating Income to understand where the $111,150 gap comes from.",
      }}
    />

    <div className="grid grid-cols-2 gap-5 mt-7 max-md:grid-cols-1">
      {/* Our NOI */}
      <div className="bg-card border border-border rounded-xl p-7 border-t-[3px] border-t-primary">
        <h4 className="caps mb-2"><T es="Nuestra Estimación" en="Our Estimate" /></h4>
        <p className="text-[32px] font-extrabold text-primary tabular-nums tracking-tight mb-5">$907,921</p>
        <div className="space-y-0">
          {[
            { label: { es: "Cinemark Movie Bistro", en: "Cinemark Movie Bistro" }, val: "$412,804" },
            { label: { es: "TruFit Athletic Clubs", en: "TruFit Athletic Clubs" }, val: "$392,000" },
            { label: { es: "Vexus Fiber", en: "Vexus Fiber" }, val: "$160,720" },
            { label: { es: "Koulikov Grappling", en: "Koulikov Grappling" }, val: "$55,167" },
            { label: { es: "Smash House", en: "Smash House" }, val: "$62,400" },
            { label: { es: "Galaxy VR", en: "Galaxy VR" }, val: "$31,827" },
            { label: { es: "Menos: Gastos Operativos", en: "Less: Operating Expenses" }, val: "-$206,997", negative: true },
          ].map((item, i) => (
            <div key={i} className="flex justify-between py-2 text-[13px] border-b border-border last:border-b-0">
              <span className="text-muted-foreground"><T es={item.label.es} en={item.label.en} /></span>
              <span className={`font-semibold tabular-nums ${item.negative ? "text-destructive" : "text-text-sub"}`}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seller's NOI */}
      <div className="bg-card border border-border rounded-xl p-7 border-t-[3px] border-t-muted-foreground">
        <h4 className="caps mb-2"><T es="Cifra del Vendedor" en="Seller's Number" /></h4>
        <p className="text-[32px] font-extrabold text-foreground tabular-nums tracking-tight mb-5">$1,019,071</p>
        <div className="space-y-0">
          {[
            { label: { es: "Ingreso Bruto Declarado", en: "Stated Gross Income" }, val: "$1,275,639" },
            { label: { es: "Menos: Gastos Operativos", en: "Less: Operating Expenses" }, val: "-$256,568", negative: true },
          ].map((item, i) => (
            <div key={i} className="flex justify-between py-2 text-[13px] border-b border-border last:border-b-0">
              <span className="text-muted-foreground"><T es={item.label.es} en={item.label.en} /></span>
              <span className={`font-semibold tabular-nums ${item.negative ? "text-destructive" : "text-text-sub"}`}>{item.val}</span>
            </div>
          ))}
        </div>
        <div className="callout-gradient border border-border rounded-lg p-4 mt-5">
          <p className="text-xs text-text-sub leading-relaxed">
            <T
              es="La diferencia de $111,150 surge porque el vendedor puede estar incluyendo ingresos pro-forma de espacios vacantes o usando suposiciones de gastos diferentes."
              en="The $111,150 gap arises because the seller may be including pro-forma income from vacant spaces or using different expense assumptions."
            />
          </p>
        </div>
      </div>
    </div>

    {/* Valuation Scenarios */}
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="px-6 py-4 border-b border-border flex items-center gap-2">
        <span className="w-1 h-[18px] bg-primary rounded-sm" />
        <h4 className="text-base font-bold text-foreground">
          <T es="Escenarios de Valuación" en="Valuation Scenarios" />
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="caps px-4 py-3 text-left border-b border-border bg-primary/5 text-primary">
                <T es="Escenario" en="Scenario" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-primary/5 text-primary">
                <T es="Rango de Valor" en="Value Range" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-primary/5 text-primary">Cap Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-success/5">
              <td className="px-4 py-3.5 border-b border-border text-success font-semibold">
                <T es="Conservador (Estado Actual)" en="Conservative (As-Is)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-success font-semibold">$9.5M – $10.2M</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-success">9.0% – 9.5%</td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Moderado (Ocupación Parcial)" en="Moderate (Partial Lease-Up)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">$10.5M – $11.2M</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">8.25% – 8.75%</td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Agresivo (Estabilización Total)" en="Aggressive (Full Stabilization)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">$12.0M – $12.7M</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">7.5% – 8.0%</td>
            </tr>
            <tr className="bg-destructive/5">
              <td className="px-4 py-3.5 text-destructive font-semibold">
                <T es="Precio del Vendedor" en="Seller's Asking Price" />
              </td>
              <td className="px-4 py-3.5 text-right tabular-nums text-destructive font-semibold">$12,764,000</td>
              <td className="px-4 py-3.5 text-right tabular-nums text-destructive">8.31%*</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default FinancialSection;
