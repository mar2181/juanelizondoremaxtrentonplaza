import { T } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="summary" className="hero-gradient relative overflow-hidden px-12 pt-16 pb-12 border-b border-border max-md:px-6 max-md:pt-10 max-md:pb-8">
    <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] gold-glow pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <p className="text-[11px] tracking-[3px] uppercase text-primary font-bold mb-4">
        <T es="Estudio Independiente de Valuación" en="Independent Valuation Study" />
      </p>
      <h1 className="font-serif text-5xl font-black leading-[1.1] mb-2 tracking-tight max-md:text-[32px]">
        Trenton Plaza
      </h1>
      <p className="text-base text-text-sub mb-8">
        2001 W. Trenton Rd, Edinburg, TX 78504
      </p>

      <div className="flex flex-wrap gap-8 text-[13px] text-muted-foreground">
        {[
          { label: { es: "Preparado para", en: "Prepared for" }, value: "Hugo Martinez" },
          { label: { es: "Preparado por", en: "Prepared by" }, value: "Juan Elizondo" },
          { label: { es: "Fecha", en: "Date" }, value: "13 Marzo 2026" },
          { label: { es: "Tipo de Propiedad", en: "Property Type" }, value: { es: "Centro Comercial Vecinal", en: "Neighborhood Shopping Center" } },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <span><T es={item.label.es} en={item.label.en} /></span>
            <span className="text-foreground font-medium">
              {typeof item.value === "string" ? item.value : <T es={item.value.es} en={item.value.en} />}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
