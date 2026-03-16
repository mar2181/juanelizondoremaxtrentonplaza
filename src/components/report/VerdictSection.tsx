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
        <p className="text-5xl font-black text-foreground tabular-nums tracking-tighter my-4 max-md:text-4xl">$10,200,000</p>
        <p className="text-base text-muted-foreground">
          <T es="vs. precio de venta" en="vs. asking price" /> <span className="line-through opacity-50">$12,764,000</span>
        </p>
        <div className="inline-block bg-destructive/10 text-destructive text-xs font-bold tracking-wider px-5 py-1.5 rounded-md mt-3">
          -20.1% <T es="DESCUENTO" en="DISCOUNT" />
        </div>
        <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
          <T
            es="El vendedor está fijando precio de activo Clase A estabilizado. La vacancia del 24% es 4× el promedio del mercado. La caída del 55% en las utilidades netas de Cinemark y su deuda de $1.87B hacen que la renovación del ancla sea incierta. Recomendamos abrir en $10.2M para establecer un piso de negociación realista."
            en="The seller is pricing this as a stabilized Class A asset. The 24% vacancy is 4× the market average. Cinemark's 55% net income decline and $1.87B debt load make anchor renewal uncertain. We recommend opening at $10.2M to establish a realistic negotiation floor."
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
          { es: "Preparar carta de intención (LOI) con oferta de $10.2M.", en: "Prepare Letter of Intent (LOI) with $10.2M offer." },
          { es: "Solicitar estados financieros auditados de los últimos 3 años.", en: "Request audited financial statements for the past 3 years." },
          { es: "Verificar estatus de renovación de Cinemark directamente — e investigar su salud financiera corporativa.", en: "Verify Cinemark renewal status directly — and investigate their corporate financial health." },
          { es: "Programar inspección física de la propiedad.", en: "Schedule physical property inspection." },
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
          es="Este documento fue preparado exclusivamente para Hugo Martinez y es de carácter confidencial. Las valuaciones y opiniones expresadas se basan en datos públicos, comparables del mercado e investigación independiente."
          en="This document was prepared exclusively for Hugo Martinez and is confidential. Valuations and opinions are based on public data, market comparables, and independent research."
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
