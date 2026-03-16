import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";

const OpportunitySection = () => (
  <section id="opportunity" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "La Oportunidad", en: "The Opportunity" }}
      title={{ es: "Potencial de Creación de Valor", en: "Value-Add Potential" }}
      subtitle={{
        es: "A pesar de los riesgos, existen palancas claras para mejorar el rendimiento si la adquisición se realiza al precio correcto.",
        en: "Despite the risks, there are clear levers to improve performance if acquired at the right price.",
      }}
    />

    <div className="space-y-4 mt-7">
      {[
        {
          title: { es: "Llenar Vacancia", en: "Fill Vacancy" },
          desc: { es: "22,904 SF vacantes a $1.50–1.83/pie²/mes = potencial de $412K–$504K en ingresos adicionales anuales.", en: "22,904 SF vacant at $1.50–1.83/SF/mo = potential $412K–$504K in additional annual income." },
        },
        {
          title: { es: "Renegociar Rentas", en: "Re-Negotiate Rents" },
          desc: { es: "Rentas actuales $0.75–0.83/pie²/mes por debajo del mercado. Al renovar contratos, llevar a niveles de mercado ($2.00–2.50/pie²/mes).", en: "Current rents $0.75–0.83/SF/mo below market. At renewal, push toward market rates ($2.00–2.50/SF/mo)." },
        },
        {
          title: { es: "Opciones de Renovación de Cinemark", en: "Cinemark Renewal Options" },
          desc: { es: "Cinemark negoció 4 opciones de renovación a 5 años con incrementos del 10% cada una. Si ejercen, la renta pasa de $1.17 a $1.28/pie²/mes. Un inquilino que negocia 4 períodos de renovación generalmente planea quedarse — pero su fragilidad financiera actual añade incertidumbre.", en: "Cinemark negotiated 4 five-year renewal options at 10% bumps each. If exercised, rent increases from $1.17 to $1.28/SF/mo. A tenant that negotiates 4 renewal periods typically plans to stay — but their current financial fragility adds uncertainty." },
        },
        {
          title: { es: "Explotar Contradicciones del OM", en: "Exploit OM Contradictions" },
          desc: { es: "Las discrepancias internas en los datos de TruFit, los datos desactualizados de Cinemark (el OM dice 502 teatros; el 10-K dice 496), y la demografía selectiva ($112K vs. $63,600 de ingreso real) son palancas de negociación concretas para extraer concesiones de precio.", en: "Internal discrepancies on TruFit data, outdated Cinemark data (OM says 502 theaters; 10-K says 496), and cherry-picked demographics ($112K vs. actual $63,600 income) are concrete negotiation levers to extract price concessions." },
        },
      ].map((item, i) => (
        <div key={i} className="flex gap-5 items-start">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-base flex-shrink-0">
            {i + 1}
          </div>
          <div>
            <h5 className="text-[15px] font-bold text-foreground mb-1"><T es={item.title.es} en={item.title.en} /></h5>
            <p className="text-sm text-muted-foreground leading-relaxed"><T es={item.desc.es} en={item.desc.en} /></p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OpportunitySection;
