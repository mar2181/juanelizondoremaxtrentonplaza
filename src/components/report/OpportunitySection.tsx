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
          desc: { es: "22,904 SF vacantes a $18–22/SF = potencial de $412K–$504K en ingresos adicionales anuales.", en: "22,904 SF vacant at $18–22/SF = potential $412K–$504K in additional annual income." },
        },
        {
          title: { es: "Renegociar Rentas", en: "Re-Negotiate Rents" },
          desc: { es: "Rentas actuales $5–10/SF por debajo del mercado. Al renovar contratos, llevar a niveles de mercado.", en: "Current rents $5–10/SF below market. At renewal, push toward market rates." },
        },
        {
          title: { es: "Renovar Cinemark", en: "Renew Cinemark" },
          desc: { es: "Si Cinemark renueva a tasa de mercado ($18+/SF), se eliminan 29,486 SF de riesgo y se añaden ~$118K/año.", en: "If Cinemark renews at market rate ($18+/SF), it eliminates 29,486 SF of risk and adds ~$118K/year." },
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
