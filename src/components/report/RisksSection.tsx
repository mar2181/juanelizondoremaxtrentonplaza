import React from "react";
import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import Term from "./Term";

const risks: { title: { es: React.ReactNode; en: React.ReactNode }; desc: { es: React.ReactNode; en: React.ReactNode }; severity: "high" | "mod" }[] = [
  {
    title: { es: "Vencimiento de Cinemark + Fragilidad Financiera", en: "Cinemark Expiration + Financial Fragility" },
    desc: { es: "29,486 SF (Suite 101) — el inquilino más grande — vence en Agosto 2028. La utilidad neta de Cinemark cayó 55% en 2025 ($309.7M → $138.2M) a pesar de alcanzar máximos post-pandemia en taquilla. Cargan $1.87 mil millones en deuda a largo plazo. Cinemark tiene 4 opciones de renovación a 5 años con incrementos del 10%, pero un inquilino bajo presión financiera puede no ejercerlas.", en: "29,486 SF (Suite 101) — the largest tenant — expires August 2028. Cinemark's net income fell 55% in 2025 ($309.7M → $138.2M) despite hitting post-pandemic box office highs. They carry $1.87B in long-term debt. Cinemark has 4 five-year renewal options at 10% bumps, but a financially strained tenant may not exercise them." },
    severity: "high" as const,
  },
  {
    title: { es: "Flujo de Caja Negativo en Año 2", en: "Year 2 Cash Flow Crater" },
    desc: { es: "El flujo de caja operativo cae de $1,004,307 (2025) a $561,281 en 2026 debido a ~$680K en costos de arrendamiento. Después de servicio de deuda, el flujo se vuelve negativo (-$11,436). Esto no se refleja en el precio.", en: "Operating cash flow drops from $1,004,307 (2025) to $561,281 in 2026 due to ~$680K in lease-up capital costs. After debt service, cash flow goes NEGATIVE (-$11,436). This is not reflected in the asking price." },
    severity: "high" as const,
  },
  {
    title: { es: "Precipicio de Renovación 2027-2028", en: "40% Rollover Cliff (2027-2028)" },
    desc: { es: "39,486 SF (40% del ALB ocupado) vencen en los próximos 3 años: Koulikov y Galaxy VR en Dic 2027, Smash House en Jun 2028, Cinemark en Ago 2028. Si TruFit realmente vence en Dic-29 (vs. Dic-34 del Rol de Rentas), ambas anclas rollan en 3-4 años.", en: "39,486 SF (40% of occupied GLA) expires within 3 years: Koulikov and Galaxy VR in Dec 2027, Smash House in Jun 2028, Cinemark in Aug 2028. If TruFit actually expires Dec-29 (vs. the Rent Roll's Dec-34), both anchors roll within 3-4 years." },
    severity: "high" as const,
  },
  {
    title: { es: "Costos de Re-Arrendamiento", en: "Re-Tenanting Cost Exposure" },
    desc: { es: <>Si Cinemark se va, re-arrendar cuesta ~$1.18M ($40/pie² en <Term id="ti">mejoras para inquilinos</Term> para nuevo ancla). Locales comerciales: $25/pie² en mejoras. Comisiones: 6% nuevos contratos, 2% renovaciones. Estos costos NO están reflejados en el precio de venta.</>, en: <>If Cinemark leaves, re-tenanting costs ~$1.18M ($40/SF in <Term id="ti">TI</Term> for new anchor). Shop spaces: $25/SF in TI. Commissions: 6% new leases, 2% renewals. These costs are NOT reflected in the asking price.</> },
    severity: "high" as const,
  },
  {
    title: { es: "Vacancia del 24%", en: "24% Vacancy" },
    desc: { es: "4–5 veces la norma del mercado (4–5.5%). Seis espacios vacantes generan un lastre significativo en el valor.", en: "4–5x the market norm (4–5.5%). Six vacant spaces create significant drag on value." },
    severity: "high" as const,
  },
  {
    title: { es: "Concentración Experiencial", en: "Experiential Concentration" },
    desc: { es: "Cine, gimnasio, VR y artes marciales — todos son categorías de alto riesgo post-pandemia con mayores tasas de fracaso.", en: "Theater, gym, VR, and martial arts — all high-risk post-pandemic categories with higher failure rates." },
    severity: "mod" as const,
  },
  {
    title: { es: "Rentas por Debajo del Mercado", en: "Below-Market Rents" },
    desc: { es: "Promedio de $1.23/pie²/mes vs. mercado de $2.00–2.50/pie²/mes. Potencial de crecimiento, pero también indica debilidad del centro.", en: "Average of $1.23/SF/mo vs. market of $2.00–2.50/SF/mo. Upside potential, but also signals center weakness." },
    severity: "mod" as const,
  },
];

const severityColors = {
  high: "text-destructive bg-destructive/10",
  mod: "text-warning bg-warning/10",
};

const RisksSection = () => (
  <section id="risks" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Análisis de Riesgo", en: "Risk Analysis" }}
      title={{ es: "Factores de Riesgo Principales", en: "Key Risk Factors" }}
    />

    <div className="grid grid-cols-2 gap-4 mt-7 max-md:grid-cols-1">
      {risks.map((r, i) => (
        <div key={i} className="bg-card border border-border rounded-xl p-6 relative transition-all hover:border-primary/20 hover:-translate-y-0.5">
          <span className="text-[28px] font-black text-foreground/5 mb-1 block">0{i + 1}</span>
          <div className="absolute top-5 right-5">
            <span className={`inline-block text-[10px] tracking-[1px] uppercase font-bold px-2.5 py-1 rounded ${severityColors[r.severity]}`}>
              {r.severity === "high" ? <T es="Alto" en="High" /> : <T es="Med" en="Mod" />}
            </span>
          </div>
          <h5 className="text-[15px] font-bold text-foreground mb-1.5"><T es={r.title.es} en={r.title.en} /></h5>
          <p className="text-[13px] text-muted-foreground leading-relaxed"><T es={r.desc.es} en={r.desc.en} /></p>
        </div>
      ))}
    </div>
  </section>
);

export default RisksSection;
