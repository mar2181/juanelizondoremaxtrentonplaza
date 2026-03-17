import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import Term from "./Term";
import TermsGuide from "./TermsGuide";

const tenants = [
  { name: "Cinemark Movie Bistro", detail: "Suite 101 · NNN", sf: "29,486", pct: "29.96%", rent: "$1.17", annual: "$412,804", exp: "Aug 2028", risk: "high" as const },
  { name: "TruFit Athletic Clubs", detail: { es: "Suite 103 · NNN · Incremento 10% Dic 2029", en: "Suite 103 · NNN · 10% bump Dec 2029" }, sf: "28,000", pct: "28.45%", rent: "$1.17", annual: "$392,000", exp: "Dec 2034", risk: "low" as const },
  { name: "Vexus Fiber", detail: "Suite 109/EC · NNN", sf: "8,036", pct: "8.16%", rent: "$1.67", annual: "$160,720", exp: "Aug 2029", risk: "low" as const },
  { name: "Koulikov Grappling Academy", detail: "Suite 104-105 · NNN", sf: "4,000", pct: "4.06%", rent: "$1.15", annual: "$55,167", exp: "Dec 2027", risk: "mod" as const },
  { name: "Smash House", detail: "Suite 106-107 · NNN", sf: "4,000", pct: "4.06%", rent: "$1.30", annual: "$62,400", exp: "Jun 2028", risk: "high" as const },
  { name: "Galaxy VR & Game Lounge", detail: "Suite 108 · NNN", sf: "2,000", pct: "2.03%", rent: "$1.33", annual: "$31,827", exp: "Dec 2027", risk: "high" as const },
];

const riskColors = {
  high: "text-destructive bg-destructive/10",
  mod: "text-warning bg-warning/10",
  low: "text-success bg-success/10",
};
const riskLabels = {
  high: { es: "Alto", en: "High" },
  mod: { es: "Med", en: "Mod" },
  low: { es: "Bajo", en: "Low" },
};

const TenantsSection = () => (
  <section id="tenants" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Inquilinos Actuales", en: "Current Tenants" }}
      title={{ es: "El Rol de Rentas", en: "The Rent Roll" }}
      subtitle={{
         es: <>Seis inquilinos ocupan 75,522 pies² a una renta promedio de $1.23/pie²/mes — significativamente por debajo del promedio del mercado de Edinburg de $2.00–2.50/pie²/mes. Todos los contratos son estructura <Term id="nnn">NNN</Term> con cuota administrativa del 15%.</>,
         en: <>Six tenants occupy 75,522 SF at an average rent of $1.23/SF/mo — significantly below the Edinburg market average of $2.00–2.50/SF/mo. All leases are <Term id="nnn">NNN</Term> structure with 15% administrative fee.</>,
      }}
    />

    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              {[
                { es: "Inquilino", en: "Tenant" },
                { es: "Pies²", en: "SF" },
                { es: "% ALB", en: "% GLA" },
                { es: "Renta/Pie²/Mes", en: "Rent/SF/Mo" },
                { es: "Renta Anual", en: "Annual Rent" },
                { es: "Venc.", en: "Exp." },
                { es: "Riesgo", en: "Risk" },
              ].map((h, i) => (
                <th key={i} className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                  <T es={h.es} en={h.en} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tenants.map((t, i) => (
              <tr key={i} className="transition-colors hover:bg-secondary/20">
                <td className="px-4 py-3.5 border-b border-border">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {typeof t.detail === "string" ? t.detail : <T es={t.detail.es} en={t.detail.en} />}
                  </div>
                </td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{t.sf}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{t.pct}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums font-semibold text-foreground">{t.rent}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums font-semibold text-foreground">{t.annual}</td>
                <td className="px-4 py-3.5 border-b border-border tabular-nums text-text-sub">{t.exp}</td>
                <td className="px-4 py-3.5 border-b border-border">
                  <span className={`inline-block text-[10px] tracking-[1px] uppercase font-bold px-2.5 py-1 rounded ${riskColors[t.risk]}`}>
                    <T es={riskLabels[t.risk].es} en={riskLabels[t.risk].en} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="callout-gradient border border-border rounded-xl p-7 mt-7">
      <h4 className="text-base font-bold text-primary mb-2">
        <T es="22,904 pies² permanecen vacantes" en="22,904 SF sits vacant" />
      </h4>
      <p className="text-sm text-text-sub leading-relaxed">
        <T
          es="Seis espacios en línea/estáticos (C1, C2, G1, G2, U1, U2), representando el 23.3% del ALB total. En un mercado donde la vacancia típica es del 4–5.5%, esto representa un lastre significativo en el valor."
          en="Across six inline/static spaces (C1, C2, G1, G2, U1, U2), representing 23.3% of total GLA. In a market where typical vacancy runs 4–5.5%, this is a significant drag on value."
        />
      </p>
    </div>

    {/* OM Contradictions in Rent Roll */}
    <div className="bg-warning/5 border border-warning/20 rounded-xl p-7 mt-5">
      <h4 className="text-base font-bold text-warning mb-3 flex items-center gap-2">
        <span className="w-1 h-[18px] bg-warning rounded-sm" />
        <T es="Contradicciones del OM en el Rol de Rentas" en="OM Contradictions in the Rent Roll" />
      </h4>
      <div className="space-y-3">
        {[
          {
            es: "TruFit Renta: El Rol de Rentas dice $14.00/pie²/año ($1.17/pie²/mes). La Descripción de Inquilinos dice $13.00/pie²/año. Discrepancia de $28,000/año.",
            en: "TruFit Rent: The Rent Roll says $14.00/SF/yr ($1.17/SF/mo). The Tenant Overview says $13.00/SF/yr. That's a $28,000/year discrepancy.",
          },
          {
            es: "TruFit Vencimiento: El Rol de Rentas dice Diciembre 2034. La Descripción de Inquilinos dice Diciembre 2029. Diferencia de 5 años sobre el 28.45% del ALB. Debe resolverse revisando el contrato real.",
            en: "TruFit Expiration: The Rent Roll says December 2034. The Tenant Overview says December 2029. A 5-year difference on 28.45% of GLA. Must be resolved by reviewing the actual lease.",
          },
          {
            es: "Koulikov Renta: Discrepancia de $1,600/año entre el Rol de Rentas ($13.79/pie²) y la Descripción de Inquilinos ($13.39/pie²).",
            en: "Koulikov Rent: $1,600/year discrepancy between the Rent Roll ($13.79/SF) and Tenant Overview ($13.39/SF).",
          },
          {
            es: "Galaxy VR Renta: Discrepancia de $920/año entre el Rol de Rentas ($15.91/pie²) y la Descripción de Inquilinos ($15.45/pie²).",
            en: "Galaxy VR Rent: $920/year discrepancy between the Rent Roll ($15.91/SF) and Tenant Overview ($15.45/SF).",
          },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-warning/10 border border-warning/20 flex items-center justify-center text-warning text-[10px] font-bold flex-shrink-0 mt-0.5">!</span>
            <p className="text-[13px] text-text-sub leading-relaxed"><T es={item.es} en={item.en} /></p>
          </div>
        ))}
      </div>
    </div>

    <TermsGuide terms={["nnn", "gla", "rent-roll"]} />
  </section>
);

export default TenantsSection;
