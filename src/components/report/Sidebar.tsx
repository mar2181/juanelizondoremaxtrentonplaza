import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const sections = [
  { id: "summary", es: "Resumen Ejecutivo", en: "Executive Summary" },
  { id: "tenants", es: "Inquilinos", en: "Tenants" },
  { id: "caprates", es: "Cap Rates", en: "Cap Rates" },
  { id: "comps", es: "Comparables", en: "Comparables" },
  { id: "financial", es: "Análisis Financiero", en: "Financial Analysis" },
  { id: "contradictions", es: "Contradicciones del OM", en: "OM Contradictions" },
  { id: "risks", es: "Riesgos", en: "Risks" },
  { id: "opportunity", es: "Oportunidad", en: "Opportunity" },
  { id: "strategy", es: "Estrategia", en: "Strategy" },
  { id: "nextsteps", es: "Próximos Pasos", en: "Next Steps" },
];

interface Props {
  activeSection: string;
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeSection, open, onClose }: Props) => {
  const { lang } = useLang();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[998] lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-[260px] bg-surface border-r border-border flex flex-col z-[999] transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="py-5">
          <p className="caps px-5 pb-2">{lang === "es" ? "Navegación" : "Navigation"}</p>
          <nav className="flex flex-col">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={onClose}
                className={`flex items-center gap-2.5 px-5 py-2.5 text-[13px] font-medium border-l-[3px] transition-all duration-150
                  ${activeSection === s.id
                    ? "text-primary sidebar-active-bg border-l-primary"
                    : "text-sidebar-foreground border-l-transparent hover:text-foreground hover:bg-secondary/30"
                  }`}
              >
                {lang === "es" ? s.es : s.en}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-auto px-5 py-4 border-t border-border text-[11px] text-muted-foreground leading-relaxed">
          {lang === "es" ? (
            <>Preparado por Juan Elizondo<br />Para Hugo Martinez<br />Marzo 2026</>
          ) : (
            <>Prepared by Juan Elizondo<br />For Hugo Martinez<br />March 2026</>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
