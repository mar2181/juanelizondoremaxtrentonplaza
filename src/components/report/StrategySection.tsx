import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import TermsGuide from "./TermsGuide";

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
          title: { es: "Oferta Inicial: $11.0M", en: "Opening Offer: $11.0M" },
          desc: { es: "Establecer un piso de negociación realista. Respaldar con: cap rate efectivo de 7.98% (no 8.31%), vacancia del 24%, flujo de caja negativo en Año 2, y las contradicciones internas del OM del vendedor (especialmente las discrepancias en datos de TruFit).", en: "Establish a realistic negotiation floor. Back with: effective cap rate of 7.98% (not 8.31%), 24% vacancy, negative Year 2 cash flow, and the seller's own OM contradictions (especially TruFit data discrepancies)." },
        },
        {
          step: 2,
          title: { es: "Solicitar Due Diligence de 90 Días", en: "Request 90-Day Due Diligence" },
          desc: { es: "Verificar el contrato real de TruFit (vencimiento Dic-29 vs. Dic-34 y renta $14.00 vs. $13.00/pie²). Obtener por escrito la postura de Cinemark sobre renovación. Solicitar las proyecciones del vendedor para un escenario de no-renovación de Cinemark — el modelo actual asume renovación como certeza (TIR de 18.14%).", en: "Verify the actual TruFit lease (expiration Dec-29 vs. Dec-34 and rent $14.00 vs. $13.00/SF). Get Cinemark's renewal stance in writing. Request the seller's projections for a Cinemark non-renewal scenario — their current model assumes renewal as certainty (18.14% IRR)." },
        },
        {
          step: 3,
          title: { es: "Precio Objetivo: $11.5M", en: "Target Price: $11.5M" },
          desc: { es: "El 'sweet spot' para un retorno ajustado al riesgo. Cap rate de ~8.85% sobre el centro. Usar la fragilidad financiera de Cinemark como palanca — utilidad neta -55% en 2025 con deuda de $1.87B. Si el ancla principal está en dificultades, el riesgo justifica un descuento.", en: "The 'sweet spot' for a risk-adjusted return. ~8.85% cap rate on the center. Use Cinemark's financial fragility as leverage — net income -55% in 2025 with $1.87B debt. If the center's main anchor is in difficulty, the risk justifies a discount." },
        },
        {
          step: 4,
          title: { es: "Techo de Retiro: $12.0M", en: "Walk-Away Ceiling: $12.0M" },
          desc: { es: "Si el vendedor no baja de $12.0M, retirarse. A ese precio los rendimientos no justifican los riesgos: 40% del ALB ocupado vence en 3 años, costos de re-arrendamiento de ~$1.18M para el ancla ($40/pie² en mejoras), y flujo de caja negativo en Año 2 después de deuda.", en: "If seller won't go below $12.0M, walk away. Returns don't justify the risks at that price: 40% of occupied GLA expires within 3 years, re-tenanting costs of ~$1.18M for the anchor ($40/SF in TI), and negative Year 2 cash flow after debt." },
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

    <TermsGuide terms={["cap-rate", "loi", "ti"]} />
  </section>
);

export default StrategySection;
