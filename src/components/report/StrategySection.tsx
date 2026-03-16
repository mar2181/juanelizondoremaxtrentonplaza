import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";

const StrategySection = () => (
  <section id="strategy" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Estrategia de Negociación", en: "Negotiation Strategy" }}
      title={{ es: "Cómo Abordar Esta Compra", en: "How to Approach This Deal" }}
    />

    <div className="space-y-6 mt-7">
      {[
        {
          step: 1,
          title: { es: "Oferta Inicial: $10.2M", en: "Opening Offer: $10.2M" },
          desc: { es: "Establecer un piso de negociación realista. Respaldar con la vacancia del 24%, la fragilidad financiera de Cinemark (utilidad neta -55% en 2025, $1.87B en deuda), y comparables del mercado.", en: "Establish a realistic negotiation floor. Back with 24% vacancy, Cinemark's financial fragility (net income -55% in 2025, $1.87B in debt), and market comps." },
        },
        {
          step: 2,
          title: { es: "Solicitar Due Diligence Extendido", en: "Request Extended Due Diligence" },
          desc: { es: "90 días mínimo. Verificar estados financieros de inquilinos, historial de mantenimiento, y status de renovación de Cinemark. Solicitar proyecciones del vendedor para el escenario de no-renovación de Cinemark.", en: "90 days minimum. Verify tenant financials, maintenance history, and Cinemark renewal status. Request the seller's projections for a Cinemark non-renewal scenario." },
        },
        {
          step: 3,
          title: { es: "Precio Objetivo: $10.8M", en: "Target Price: $10.8M" },
          desc: { es: "El 'sweet spot' para un retorno ajustado al riesgo. Cap rate de 8.75% en el mercado de Edinburg. Usar la caída de utilidades de Cinemark como palanca — si el ancla principal del centro está en dificultades financieras, el riesgo justifica un descuento mayor.", en: "The 'sweet spot' for a risk-adjusted return. 8.75% cap rate in the Edinburg market. Use Cinemark's earnings decline as leverage — if the center's main anchor is in financial difficulty, the risk justifies a steeper discount." },
        },
        {
          step: 4,
          title: { es: "Techo de Retiro: $11.5M", en: "Walk-Away Ceiling: $11.5M" },
          desc: { es: "Si el vendedor no baja de $11.5M, retirarse. A ese precio los rendimientos no justifican el riesgo, especialmente considerando que Cinemark podría exigir rentas más bajas o abandonar el espacio al vencimiento de su contrato.", en: "If seller won't go below $11.5M, walk away. Returns don't justify the risk at that price, especially considering Cinemark may demand lower rents or vacate at lease expiration." },
        },
      ].map((item) => (
        <div key={item.step} className="flex gap-5 items-start">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-base flex-shrink-0">
            {item.step}
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

export default StrategySection;
