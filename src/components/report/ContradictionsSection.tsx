import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import Term from "./Term";
import TermsGuide from "./TermsGuide";

const contradictions = [
  {
    title: { es: "Renta de TruFit: $14.00 vs. $13.00/pie²", en: "TruFit Rent: $14.00 vs. $13.00/SF" },
    desc: { es: "El Rol de Rentas dice $14.00/pie²/año ($392,000/año). La Descripción de Inquilinos dice $13.00/pie². Discrepancia de $28,000/año en el segundo inquilino más grande.", en: "The Rent Roll says $14.00/SF/yr ($392,000/yr). The Tenant Overview says $13.00/SF. That's a $28,000/year discrepancy on the second-largest tenant." },
    severity: "high" as const,
  },
  {
    title: { es: "Vencimiento de TruFit: Dic-34 vs. Dic-29", en: "TruFit Expiration: Dec-34 vs. Dec-29" },
    desc: { es: "El Rol de Rentas dice Diciembre 2034. La Descripción de Inquilinos dice Diciembre 2029. Una diferencia de 5 años sobre el 28.45% del ALB. Debe resolverse revisando el contrato real.", en: "The Rent Roll says December 2034. The Tenant Overview says December 2029. A 5-year difference on 28.45% of GLA. Must be resolved by reviewing the actual lease." },
    severity: "high" as const,
  },
  {
    title: { es: "Renta de Koulikov: $13.79 vs. $13.39/pie²", en: "Koulikov Rent: $13.79 vs. $13.39/SF" },
    desc: { es: "Discrepancia de $1,600/año entre el Rol de Rentas y la Descripción de Inquilinos.", en: "$1,600/year discrepancy between the Rent Roll and Tenant Overview." },
    severity: "mod" as const,
  },
  {
    title: { es: "Renta de Galaxy VR: $15.91 vs. $15.45/pie²", en: "Galaxy VR Rent: $15.91 vs. $15.45/SF" },
    desc: { es: "Otra discrepancia de $920/año entre las dos secciones del OM.", en: "Another $920/year discrepancy between the two OM sections." },
    severity: "mod" as const,
  },
  {
    title: { es: "Datos de Cinemark Desactualizados", en: "Cinemark Company Data Outdated" },
    desc: { es: "El OM dice '502 teatros y 5,708 pantallas a marzo 2024.' El 10-K de 2025 de Cinemark dice 496 teatros y 5,637 pantallas. Cinemark se redujo, no creció.", en: "OM says '502 theatres and 5,708 screens as of March 2024.' Cinemark's 2025 10-K says 496 theaters and 5,637 screens. Cinemark actually shrank, not grew." },
    severity: "mod" as const,
  },
  {
    title: { es: "Ciudad de la Propiedad: ¿Edinburg o McAllen?", en: "Property City: Edinburg or McAllen?" },
    desc: { es: "La página de Perfil del Cliente lista la dirección como 'McAllen, TX 78504.' La propiedad está en Edinburg, no en McAllen.", en: "The Customer Profile page lists the address as 'McAllen, TX 78504.' The property is in Edinburg, not McAllen." },
    severity: "mod" as const,
  },
  {
    title: { es: "Demografía Selectiva", en: "Cherry-Picked Demographics" },
    desc: { es: "El Resumen Ejecutivo del OM dice '$112,000 dentro de un radio de una milla.' Pero el ingreso real del área comercial (Placer.ai) es $63,600 — casi la mitad.", en: "The OM Executive Summary says '$112,000 within a one-mile radius.' But the actual trade area income (Placer.ai) is $63,600 — almost half." },
    severity: "high" as const,
  },
];

const severityColors = {
  high: "text-destructive bg-destructive/10",
  mod: "text-warning bg-warning/10",
};

const ContradictionsSection = () => (
  <section id="contradictions" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Contradicciones del OM", en: "OM Contradictions" }}
      title={{ es: "Lo Que el Vendedor Se Contradice", en: "Where the Seller Contradicts Itself" }}
       subtitle={{
         es: <>Encontramos 7 contradicciones internas en los <Term id="om">Memorándums de Oferta</Term> del vendedor. Cada una representa una palanca de negociación concreta.</>,
         en: <>We found 7 internal contradictions in the seller's <Term id="om">Offering Memorandums</Term>. Each represents a concrete negotiation lever.</>,
       }}
    />

    <div className="grid grid-cols-2 gap-4 mt-7 max-md:grid-cols-1">
      {contradictions.map((c, i) => (
        <div key={i} className="bg-card border border-border rounded-xl p-6 relative transition-all hover:border-warning/30 hover:-translate-y-0.5">
          <span className="text-[28px] font-black text-foreground/5 mb-1 block">0{i + 1}</span>
          <div className="absolute top-5 right-5">
            <span className={`inline-block text-[10px] tracking-[1px] uppercase font-bold px-2.5 py-1 rounded ${severityColors[c.severity]}`}>
              {c.severity === "high" ? <T es="Crítico" en="Critical" /> : <T es="Notable" en="Notable" />}
            </span>
          </div>
          <h5 className="text-[15px] font-bold text-foreground mb-1.5 pr-16"><T es={c.title.es} en={c.title.en} /></h5>
          <p className="text-[13px] text-muted-foreground leading-relaxed"><T es={c.desc.es} en={c.desc.en} /></p>
        </div>
      ))}
    </div>

    <div className="callout-gradient border border-border rounded-xl p-7 mt-7">
       <h4 className="text-base font-bold text-primary mb-2">
         <T es={<>Suposición Crítica del Modelo</>} en={<>Critical Modeling Assumption</>} />
      </h4>
      <p className="text-sm text-text-sub leading-relaxed">
        <T
           es={<>El modelo de flujo de caja del vendedor asume que Cinemark EJERCERÁ su opción de renovación. La <Term id="irr">TIR</Term> de 18.14% trata la renovación como certeza, no como probabilidad. Dada la caída de utilidades del 55% de Cinemark y su deuda de $1.87B, esta suposición debe cuestionarse.</>}
           en={<>The seller's cash flow model assumes Cinemark WILL exercise their renewal option. The 18.14% <Term id="irr">IRR</Term> treats Cinemark renewal as certainty, not probability. Given Cinemark's 55% earnings decline and $1.87B debt load, this assumption must be challenged.</>}
        />
      </p>
    </div>
  </section>
);

export default ContradictionsSection;
