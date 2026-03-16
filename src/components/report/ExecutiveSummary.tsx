import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";

const ExecutiveSummary = () => (
  <section className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Resumen Ejecutivo", en: "Executive Summary" }}
      title={{ es: "El Precio de Venta No Cuadra", en: "The Asking Price Doesn't Add Up" }}
    />

    <div className="text-[15px] leading-relaxed text-text-sub max-w-[780px] space-y-4">
      <p>
        <T
          es="Trenton Plaza es un centro comercial vecinal de 98,426 pies² en 15.13 acres en Edinburg, Texas, listado por CBRE a un precio total de venta de $12,764,000. El vendedor presenta un cap rate actual de 8.31% basado en un Ingreso Operativo Neto (ION) de $1,019,071."
          en="Trenton Plaza is a 98,426 SF neighborhood shopping center on 15.13 acres in Edinburg, Texas, listed by CBRE at a total asking price of $12,764,000. The seller presents an in-place cap rate of 8.31% based on a Net Operating Income of $1,019,071."
        />
      </p>
      <p>
        <T
          es="Después de realizar una investigación independiente usando comparables del mercado, referencias de cap rate, análisis de riesgo de inquilinos y múltiples enfoques de valuación, consideramos que la propiedad está sobrevaluada entre un 10–25%."
          en="After conducting independent research using market comps, cap rate benchmarks, tenant risk analysis, and multiple valuation approaches, we believe the property is overpriced by 10–25%."
        />
      </p>
    </div>

    {/* Valuation Summary Card */}
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="px-6 py-4 border-b border-border flex items-center gap-2">
        <span className="w-1 h-[18px] bg-primary rounded-sm" />
        <h4 className="text-base font-bold text-foreground">
          <T es="Nuestra Valuación Independiente" en="Our Independent Valuation" />
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                <T es="Escenario" en="Scenario" />
              </th>
              <th className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                <T es="Rango de Valor" en="Value Range" />
              </th>
              <th className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                <T es="Recomendación" en="Recommendation" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-success/5">
              <td className="px-4 py-3.5 border-b border-border text-success font-semibold">
                <T es="Conservador (Estado Actual)" en="Conservative (As-Is)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border tabular-nums text-success font-semibold">$9,500,000 – $10,200,000</td>
              <td className="px-4 py-3.5 border-b border-border text-success">
                <T es="Oferta inicial" en="Opening offer" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Moderado (Ocupación Parcial)" en="Moderate (Partial Lease-Up)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border tabular-nums text-foreground font-semibold">$10,500,000 – $11,200,000</td>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Precio objetivo" en="Target price" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Agresivo (Estabilización Total)" en="Aggressive (Full Stabilization)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border tabular-nums text-foreground font-semibold">$12,000,000 – $12,700,000</td>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Precio máximo de retiro" en="Walk-away ceiling" />
              </td>
            </tr>
            <tr className="bg-destructive/5">
              <td className="px-4 py-3.5 text-destructive font-semibold">
                <T es="Precio del Vendedor" en="Seller's Asking Price" />
              </td>
              <td className="px-4 py-3.5 tabular-nums text-destructive font-semibold">$12,764,000</td>
              <td className="px-4 py-3.5 text-destructive">
                <T es="Sobrevaluado 10–25%" en="Overpriced 10–25%" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ExecutiveSummary;
