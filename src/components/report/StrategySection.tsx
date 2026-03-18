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
          title: { es: "Oferta Inicial: $9.5M", en: "Opening Offer: $9.5M" },
          desc: { es: "Establecer un ancla agresiva de negociación. Respaldar con: cap rate efectivo de 7.98% (no 8.31%), vacancia del 24% (4× el promedio del mercado), flujo de caja negativo en Año 2 después de deuda, contradicciones internas del OM del vendedor (discrepancias en datos de TruFit), y el riesgo inminente de no-renovación de Cinemark con utilidad neta -55% en 2025 y deuda de $1.87B.", en: "Establish an aggressive negotiation anchor. Back with: effective cap rate of 7.98% (not 8.31%), 24% vacancy (4× market average), negative Year 2 cash flow after debt, the seller's own OM contradictions (TruFit data discrepancies), and the imminent Cinemark non-renewal risk with net income -55% in 2025 and $1.87B debt." },
        },
        {
          step: 2,
          title: { es: "Solicitar Due Diligence de 60 Días", en: "Request 60-Day Due Diligence" },
          desc: { es: "Verificar el contrato real de TruFit (vencimiento Dic-29 vs. Dic-34 y renta $14.00 vs. $13.00/pie²). Obtener por escrito la postura de Cinemark sobre renovación. Solicitar las proyecciones del vendedor para un escenario de no-renovación de Cinemark — el modelo actual asume renovación como certeza (TIR de 18.14%). Período acelerado de 60 días para mantener presión en la negociación.", en: "Verify the actual TruFit lease (expiration Dec-29 vs. Dec-34 and rent $14.00 vs. $13.00/SF). Get Cinemark's renewal stance in writing. Request the seller's projections for a Cinemark non-renewal scenario — their current model assumes renewal as certainty (18.14% IRR). Accelerated 60-day period to maintain negotiation pressure." },
        },
        {
          step: 3,
          title: { es: "Precio Objetivo: $10.5M", en: "Target Price: $10.5M" },
          desc: { es: "El 'sweet spot' para un retorno ajustado al riesgo. Cap rate de ~9.7% sobre el precio total — significativamente superior al 7.98% efectivo del vendedor. Usar la fragilidad financiera de Cinemark como palanca — utilidad neta -55% en 2025 con deuda de $1.87B. Si el ancla principal está en dificultades, el riesgo justifica un descuento sustancial.", en: "The 'sweet spot' for a risk-adjusted return. ~9.7% cap rate on total price — significantly above the seller's effective 7.98%. Use Cinemark's financial fragility as leverage — net income -55% in 2025 with $1.87B debt. If the center's main anchor is in difficulty, the risk justifies a substantial discount." },
        },
        {
          step: 4,
          title: { es: "Techo de Retiro: $11.3M", en: "Walk-Away Ceiling: $11.3M" },
          desc: { es: "Si el vendedor no baja de $11.3M, retirarse. A ese precio (9.0% cap rate) los rendimientos apenas justifican los riesgos: 40% del ALB ocupado vence en 3 años, costos de re-arrendamiento de ~$1.18M para el ancla ($40/pie² en mejoras), y flujo de caja negativo en Año 2 después de deuda.", en: "If seller won't go below $11.3M, walk away. At that price (9.0% cap rate) returns barely justify the risks: 40% of occupied GLA expires within 3 years, re-tenanting costs of ~$1.18M for the anchor ($40/SF in TI), and negative Year 2 cash flow after debt." },
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
