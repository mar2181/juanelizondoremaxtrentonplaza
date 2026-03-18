import { T } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const VerdictSection = () => (
  <>
    {/* Final Verdict */}
    <section className="verdict-gradient py-16 px-12 text-center border-b border-border relative overflow-hidden max-md:px-6 max-md:py-12">
      <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] gold-glow pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[600px] mx-auto relative"
      >
        <p className="caps text-primary mb-4"><T es="El Veredicto" en="The Verdict" /></p>
        <h2 className="font-serif text-[32px] font-black text-foreground mb-2 max-md:text-[26px]">
          <T es="Oferta Recomendada" en="Recommended Offer" />
        </h2>
        <p className="text-5xl font-black text-foreground tabular-nums tracking-tighter my-4 max-md:text-4xl">$9,500,000</p>
        <p className="text-base text-muted-foreground">
          <T es="vs. precio de venta" en="vs. asking price" /> <span className="line-through opacity-50">$12,764,000</span>
        </p>
        <div className="inline-block bg-destructive/10 text-destructive text-xs font-bold tracking-wider px-5 py-1.5 rounded-md mt-3">
          -13.8% <T es="DESCUENTO" en="DISCOUNT" />
        </div>
        <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
          <T
            es="El ION del vendedor de $1,019,071 está verificado — pero el precio sigue inflado. El cap rate efectivo sobre el precio total es 7.98%, no 8.31%. La vacancia del 24% es 4× el promedio del mercado. El flujo de caja del Año 2 se vuelve negativo después de deuda (-$11,436). Las contradicciones internas del OM en datos de TruFit crean incertidumbre adicional. Recomendamos abrir en $11.0M con due diligence de 90 días."
            en="The seller's NOI of $1,019,071 is verified — but the price remains inflated. The effective cap rate on total price is 7.98%, not 8.31%. The 24% vacancy is 4× the market average. Year 2 cash flow goes negative after debt (-$11,436). Internal OM contradictions on TruFit data create additional uncertainty. We recommend opening at $11.0M with 90-day due diligence."
          />
        </p>
      </motion.div>
    </section>

    {/* Next Steps */}
    <section id="nextsteps" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
      <div className="mb-8">
        <p className="text-[11px] tracking-[2.5px] uppercase text-primary font-bold mb-2.5 flex items-center gap-2">
          <span className="w-4 h-0.5 bg-primary inline-block" />
          <T es="Próximos Pasos" en="Next Steps" />
        </p>
        <h2 className="font-serif text-[32px] font-black text-foreground leading-tight tracking-tight max-md:text-[26px]">
          <T es="Acciones Inmediatas" en="Immediate Actions" />
        </h2>
      </div>
      <div className="space-y-4">
        {[
          { es: "Revisar este reporte con su asesor financiero y equipo legal.", en: "Review this report with your financial advisor and legal team." },
          { es: "Resolver las contradicciones del OM: obtener el contrato real de TruFit para confirmar vencimiento (Dic-29 vs. Dic-34) y renta ($14.00 vs. $13.00/pie²).", en: "Resolve OM contradictions: obtain the actual TruFit lease to confirm expiration (Dec-29 vs. Dec-34) and rent ($14.00 vs. $13.00/SF)." },
          { es: "Verificar estatus de renovación de Cinemark directamente — obtener por escrito si ejercerán su primera opción de renovación. Investigar su salud financiera: utilidad neta -55% en 2025, deuda de $1.87B.", en: "Verify Cinemark renewal status directly — get in writing whether they'll exercise their first renewal option. Investigate financial health: net income -55% in 2025, $1.87B debt." },
          { es: "Preparar carta de intención (LOI) con oferta de $11.0M y due diligence de 90 días.", en: "Prepare Letter of Intent (LOI) with $11.0M offer and 90-day due diligence." },
          { es: "Solicitar estados financieros auditados de los últimos 3 años y verificar los costos de mejoras para inquilinos ($40/pie² ancla, $25/pie² locales).", en: "Request audited financial statements for the past 3 years and verify tenant improvement costs ($40/SF anchor, $25/SF shops)." },
          { es: "Programar inspección física de la propiedad, incluyendo el terreno adicional de 3.05 AC y el estanque de retención.", en: "Schedule physical property inspection, including the additional 3.05 AC land parcel and retention pond." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0 mt-0.5">
              {i + 1}
            </div>
            <p className="text-sm text-text-sub leading-relaxed"><T es={item.es} en={item.en} /></p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer className="px-12 py-10 text-xs text-muted-foreground leading-relaxed border-t border-border max-md:px-6">
      <p>
        <T
          es="Este documento fue preparado exclusivamente para Hugo Martinez y es de carácter confidencial. Las valuaciones y opiniones expresadas se basan en datos públicos, los Memorándums de Oferta Confidenciales de CBRE, comparables del mercado, informes 10-K de la SEC, e investigación independiente."
          en="This document was prepared exclusively for Hugo Martinez and is confidential. Valuations and opinions are based on public data, CBRE's Confidential Offering Memorandums, market comparables, SEC 10-K filings, and independent research."
        />
      </p>
      <p className="mt-3">
        <T
          es="© 2026 Juan Elizondo. Todos los derechos reservados."
          en="© 2026 Juan Elizondo. All rights reserved."
        />
      </p>
    </footer>
  </>
);

export default VerdictSection;
