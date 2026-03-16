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
          title: { es: "Renovar Cinemark", en: "Renew Cinemark" },
          desc: { es: "Si Cinemark renueva a tasa de mercado ($1.50+/pie²/mes), se eliminan 29,486 SF de riesgo. Pero dada su caída de utilidades del 55%, prepárese para negociar desde una posición fuerte — o para un escenario de reemplazo.", en: "If Cinemark renews at market rate ($1.50+/SF/mo), it eliminates 29,486 SF of risk. But given their 55% earnings decline, prepare to negotiate from a position of strength — or for a replacement scenario." },
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
