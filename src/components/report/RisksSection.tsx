import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";

const risks = [
  {
    title: { es: "Vencimiento de Cinemark", en: "Cinemark Expiration" },
    desc: { es: "29,486 SF — el inquilino más grande — vence en Agosto 2028. Si no renueva, la ocupación cae a ~46%.", en: "29,486 SF — the largest tenant — expires August 2028. If they don't renew, occupancy drops to ~46%." },
    severity: "high" as const,
  },
  {
    title: { es: "Vacancia del 24%", en: "24% Vacancy" },
    desc: { es: "4–5 veces la norma del mercado (4–5.5%). Seis espacios vacantes generan un lastre significativo.", en: "4–5x the market norm (4–5.5%). Six vacant spaces create significant drag on value." },
    severity: "high" as const,
  },
  {
    title: { es: "Concentración Experiencial", en: "Experiential Concentration" },
    desc: { es: "Cine, gimnasio, VR y artes marciales — todos son categorías de alto riesgo post-pandemia con mayores tasas de fracaso.", en: "Theater, gym, VR, and martial arts — all high-risk post-pandemic categories with higher failure rates." },
    severity: "mod" as const,
  },
  {
    title: { es: "Rentas por Debajo del Mercado", en: "Below-Market Rents" },
    desc: { es: "Promedio de $14.76/SF vs. mercado de $20–25/SF. Potencial de crecimiento, pero también indica debilidad del centro.", en: "Average of $14.76/SF vs. market of $20–25/SF. Upside potential, but also signals center weakness." },
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
