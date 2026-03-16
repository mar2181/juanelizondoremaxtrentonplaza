import { T } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const stats = [
  { label: { es: "ALB Total", en: "Total GLA" }, value: "98,426", suffix: { es: "Pies²", en: "SF" } },
  { label: { es: "Terreno", en: "Land" }, value: "15.13", suffix: { es: "AC", en: "AC" } },
  { label: { es: "Año", en: "Year Built" }, value: "2008", suffix: null },
  { label: { es: "Ocupación", en: "Occupancy" }, value: "76%", suffix: null, danger: true },
  { label: { es: "ION Actual", en: "In-Place NOI" }, value: "$1,019,071", suffix: null },
  { label: { es: "Precio de Venta", en: "Asking Price" }, value: "$12,764,000", suffix: null },
];

const StatsRow = () => (
  <div className="grid grid-cols-6 border-b border-border max-lg:grid-cols-3 max-md:grid-cols-2">
    {stats.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="px-5 py-6 text-center border-r border-border last:border-r-0 bg-surface hover:bg-card transition-colors"
      >
        <p className="caps mb-1.5"><T es={s.label.es} en={s.label.en} /></p>
        <p className={`text-xl font-extrabold tracking-tight tabular-nums ${s.danger ? "text-destructive" : "text-foreground"}`}>
          {s.value}
          {s.suffix && <span className="text-xs text-muted-foreground ml-1"><T es={s.suffix.es} en={s.suffix.en} /></span>}
        </p>
      </motion.div>
    ))}
  </div>
);

export default StatsRow;
