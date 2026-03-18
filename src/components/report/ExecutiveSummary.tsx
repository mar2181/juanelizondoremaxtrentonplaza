import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import Term from "./Term";
import TermsGuide from "./TermsGuide";

const ExecutiveSummary = () => (
  <section className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Resumen Ejecutivo", en: "Executive Summary" }}
      title={{ es: "El Precio de Venta No Cuadra", en: "The Asking Price Doesn't Add Up" }}
    />

    <div className="text-[15px] leading-relaxed text-text-sub max-w-[780px] space-y-4">
      <p>
        <T
           es={<>Trenton Plaza es un centro comercial vecinal de 98,426 pies² en 15.13 acres en Edinburg, Texas, listado por CBRE a un precio total de venta de $12,764,000. El vendedor presenta un <Term id="cap-rate">cap rate</Term> actual de 8.31% basado en un <Term id="noi">Ingreso Operativo Neto (ION)</Term> de $1,019,071. Sin embargo, ese cap rate se calcula únicamente sobre el centro comercial ($12,264,000) — el precio total incluye un terreno adicional de 3.05 acres por $500,000, lo que reduce el cap rate efectivo a 7.98%.</>}
           en={<>Trenton Plaza is a 98,426 SF neighborhood shopping center on 15.13 acres in Edinburg, Texas, listed by CBRE at a total asking price of $12,764,000. The seller presents an in-place <Term id="cap-rate">cap rate</Term> of 8.31% based on a <Term id="noi">Net Operating Income (NOI)</Term> of $1,019,071. However, that cap rate is calculated only on the shopping center ($12,264,000) — the total price includes an additional 3.05-acre land parcel at $500,000, which drops the effective cap rate to 7.98%.</>}
        />
      </p>
      <p>
        <T
          es="Después de verificar el ION del vendedor y realizar investigación independiente usando comparables del mercado, referencias de cap rate y análisis de riesgo, consideramos que la propiedad está sobrevaluada entre un 10–15%. Los factores clave: una tasa de vacancia del 24% (4–5 veces la norma del mercado), el vencimiento próximo del contrato del ancla Cinemark (agosto 2028) — agravado por la caída del 55% en las utilidades netas de Cinemark en 2025 y su deuda de $1.87 mil millones — contradicciones internas en el Memorándum de Oferta del vendedor, y un flujo de caja del Año 2 que se vuelve negativo después de deuda."
          en="After verifying the seller's NOI and conducting independent research using market comps, cap rate benchmarks, and risk analysis, we believe the property is overpriced by 12–25%. The key drivers: a 24% vacancy rate (4–5x the market norm), the near-term expiration of the Cinemark anchor lease (August 2028) — compounded by Cinemark's 55% drop in net income in 2025 and their $1.87 billion in long-term debt — internal contradictions in the seller's Offering Memorandum, and Year 2 cash flow that goes negative after debt service."
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
              <td className="px-4 py-3.5 border-b border-border tabular-nums text-success font-semibold">$10,700,000 – $11,300,000</td>
              <td className="px-4 py-3.5 border-b border-border text-success">
                <T es="Oferta inicial" en="Opening offer" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Moderado (Ocupación Parcial)" en="Moderate (Partial Lease-Up)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border tabular-nums text-foreground font-semibold">$11,300,000 – $11,800,000</td>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Precio objetivo" en="Target price" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Agresivo (Estabilización Total)" en="Aggressive (Full Stabilization)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border tabular-nums text-foreground font-semibold">$11,800,000 – $12,200,000</td>
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
                <T es="Sobrevaluado 10–15%" en="Overpriced 10–15%" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <TermsGuide terms={["cap-rate", "noi", "om"]} />
  </section>
);

export default ExecutiveSummary;
