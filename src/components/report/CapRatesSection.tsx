import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import Term from "./Term";

const benchmarks = [
  { label: { es: "Inquilino Único NNN (Crédito)", en: "Single-Tenant NNN (Credit)" }, value: "5.0 – 6.0%", pct: 27 },
  { label: { es: "Centro Anclado por Supermercado", en: "Grocery-Anchored Center" }, value: "6.0 – 6.5%", pct: 33 },
  { label: { es: "Comercio Minorista Texas", en: "Texas Retail Overall" }, value: "6.0 – 7.0%", pct: 38 },
  { label: { es: "Centros Comerciales McAllen", en: "McAllen Shopping Ctrs (Avg)" }, value: "7.12%", pct: 47 },
  { label: { es: "Promedio Edinburg", en: "Edinburg Average" }, value: "~7.33%", pct: 50 },
  { label: { es: "Centro Comercial Sin Ancla", en: "Unanchored Strip Center" }, value: "7.0 – 8.0%", pct: 55 },
  { label: { es: "Trenton Plaza (Nuestra Est.)", en: "Trenton Plaza (Our Est.)" }, value: "8.5 – 9.5%", pct: 78 },
];

const CapRatesSection = () => (
  <section id="caprates" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Panorama del Mercado", en: "Market Overview" }}
      title={{ es: "Cómo los Cap Rates Determinan el Valor", en: "How Cap Rates Drive Value" }}
      subtitle={{
        es: "Entender dónde se ubica Trenton Plaza en el espectro de cap rates es fundamental. Cada punto porcentual desplaza el valor en más de $1 millón.",
        en: "Understanding where Trenton Plaza falls in the cap rate spectrum is critical. Every percentage point shifts value by over $1 million.",
      }}
    />

    <div className="bg-card border border-border rounded-xl p-8 mt-7 max-md:p-5">
      <h4 className="text-base font-bold text-foreground mb-1">
        <T es={<>Referencias de <Term id="cap-rate">Cap Rate</Term></>} en={<><Term id="cap-rate">Cap Rate</Term> Benchmarks</>} />
      </h4>
      <p className="text-xs text-muted-foreground mb-6">
        <T es="Mercado McAllen-Edinburg · Datos 2025–2026" en="McAllen-Edinburg Market · 2025–2026 Data" />
      </p>
      <div className="space-y-4">
        {benchmarks.map((b, i) => (
          <div key={i} className="flex items-center gap-4 max-md:flex-wrap">
            <span className="w-[200px] max-md:w-[140px] text-[13px] text-text-sub text-right flex-shrink-0 max-md:text-[11px]">
              <T es={b.label.es} en={b.label.en} />
            </span>
            <div className="flex-1 h-7 bg-secondary/40 rounded-md overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${b.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-md accent-gradient"
              />
            </div>
            <span className="w-[120px] max-md:w-[90px] text-right text-sm font-semibold text-foreground tabular-nums flex-shrink-0">
              {b.value}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="callout-gradient border border-border rounded-xl p-7 mt-7">
      <h4 className="text-base font-bold text-primary mb-2">
        <T es="¿Por qué 8.5% – 9.5%?" en="Why 8.5% – 9.5%?" />
      </h4>
      <p className="text-sm text-text-sub leading-relaxed">
        <T
          es="El promedio de McAllen de 7.12% es para propiedades estabilizadas. Añadimos una prima de riesgo de 1.4–2.4% por: vacancia del 24%, mezcla de anclas sin supermercado, vencimiento de Cinemark en 2.5 años agravado por su caída de utilidades del 55% y deuda de $1.87B, inquilinos experienciales con mayores tasas de fracaso, y posicionamiento en submercado secundario."
          en="The McAllen average of 7.12% is for stabilized, well-occupied properties. We add a 1.4–2.4% risk premium for: 24% vacancy, non-grocery anchor mix, Cinemark lease expiring in 2.5 years compounded by their 55% earnings decline and $1.87B debt load, experiential tenants with higher failure rates, and secondary submarket positioning."
        />
      </p>
    </div>

    <div className="bg-warning/5 border border-warning/20 rounded-xl p-7 mt-5">
      <h4 className="text-base font-bold text-warning mb-2">
        <T es="Nota: Cap Rate Efectivo vs. Declarado" en="Note: Effective vs. Stated Cap Rate" />
      </h4>
      <p className="text-sm text-text-sub leading-relaxed">
        <T
          es="El vendedor declara un cap rate de 8.31%, pero ese cálculo usa solo el precio del centro ($12,264,000). Incluyendo el terreno adicional de $500,000, el cap rate efectivo sobre el precio total de $12,764,000 es 7.98%. Además, el modelo de flujo de caja del vendedor (TIR de 18.14%) asume que Cinemark EJERCERÁ su opción de renovación — trata la renovación como certeza, no como probabilidad."
          en="The seller states an 8.31% cap rate, but that calculation uses only the center price ($12,264,000). Including the $500,000 additional land, the effective cap rate on the total $12,764,000 price is 7.98%. Furthermore, the seller's cash flow model (18.14% IRR) assumes Cinemark WILL exercise their renewal option — it treats renewal as certainty, not probability."
        />
      </p>
    </div>
  </section>
);

export default CapRatesSection;
