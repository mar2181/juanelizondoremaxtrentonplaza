import React from "react";
import { useLang } from "@/contexts/LangContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TermId =
  | "cap-rate"
  | "noi"
  | "nnn"
  | "gla"
  | "cam"
  | "ti"
  | "psf"
  | "irr"
  | "pct-rent"
  | "om"
  | "debt-service";

const glossary: Record<TermId, { term: string; es: string; en: string }> = {
  "cap-rate": {
    term: "Cap Rate",
    es: "Tasa de Capitalización. Ingreso anual dividido entre el precio de la propiedad. Más alto = más riesgo pero más barato de comprar. Un cap del 8% sobre $1M de ingreso = valor de $12.5M.",
    en: "Capitalization Rate. Annual income divided by property price. Higher = riskier but cheaper to buy. An 8% cap on $1M income = $12.5M value.",
  },
  noi: {
    term: "NOI / ION",
    es: "Ingreso Operativo Neto. Total de rentas cobradas menos costos operativos. La ganancia de la propiedad antes de pagos de hipoteca.",
    en: "Net Operating Income. Total rent collected minus operating costs. The property's profit before mortgage payments.",
  },
  nnn: {
    term: "NNN (Triple Net)",
    es: "Un contrato donde los inquilinos pagan su parte de impuestos, seguro y mantenimiento además de la renta. Reduce la carga de gastos del propietario.",
    en: "A lease where tenants pay their share of taxes, insurance, and maintenance on top of rent. Reduces the landlord's expense burden.",
  },
  gla: {
    term: "GLA / ALB",
    es: "Área Leasable Bruta. El total de pies cuadrados rentables en el edificio.",
    en: "Gross Leasable Area. The total rentable square footage in the building.",
  },
  cam: {
    term: "CAM",
    es: "Mantenimiento de Áreas Comunes. Costos de mantener espacios compartidos (estacionamiento, jardinería, pasillos). En contratos NNN, los inquilinos reembolsan esto.",
    en: "Common Area Maintenance. Costs to maintain shared spaces (parking, landscaping, hallways). In NNN leases, tenants reimburse this.",
  },
  ti: {
    term: "TI",
    es: "Mejoras para Inquilinos. Dinero que el propietario gasta para acondicionar un espacio para un nuevo inquilino. Mayor TI = mayor costo para llenar vacantes.",
    en: "Tenant Improvements. Money the landlord spends to build out a space for a new tenant. Higher TI = higher cost to fill vacancies.",
  },
  psf: {
    term: "$/SF",
    es: "Precio por pie cuadrado. Divide el precio total entre el tamaño del edificio para comparar propiedades de diferentes tamaños.",
    en: "Price per square foot. Divides total price by building size to compare properties of different sizes.",
  },
  irr: {
    term: "IRR / TIR",
    es: "Tasa Interna de Retorno. El rendimiento anual proyectado de la inversión durante todo el período de tenencia, considerando flujo de caja y venta.",
    en: "Internal Rate of Return. The projected annual return on investment over the full holding period, accounting for cash flow and sale.",
  },
  "pct-rent": {
    term: "Percentage Rent",
    es: "Renta Porcentual. Renta extra que un inquilino paga cuando sus ventas superan un umbral. Común en contratos de comercio minorista.",
    en: "Extra rent a tenant pays when their sales exceed a threshold. Common in retail leases.",
  },
  om: {
    term: "OM",
    es: "Memorándum de Oferta. El documento de marketing del vendedor con detalles de la propiedad, finanzas e información de inquilinos. Como un prospecto para bienes raíces.",
    en: "Offering Memorandum. The seller's marketing document with property details, financials, and tenant info. Like a prospectus for real estate.",
  },
  "debt-service": {
    term: "Debt Service",
    es: "Servicio de Deuda. Pagos mensuales de hipoteca (capital + intereses) sobre el préstamo utilizado para comprar la propiedad.",
    en: "Monthly mortgage payments (principal + interest) on the loan used to buy the property.",
  },
};

interface TermProps {
  id: TermId;
  children: React.ReactNode;
}

const Term: React.FC<TermProps> = ({ id, children }) => {
  const { lang } = useLang();
  const entry = glossary[id];
  if (!entry) return <>{children}</>;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="border-b border-dotted border-muted-foreground/50 hover:border-primary hover:text-primary cursor-help transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="max-w-[280px] bg-card border-border text-[13px] leading-relaxed p-3"
        >
          <span className="font-bold text-primary block mb-1">{entry.term}</span>
          <span className="text-muted-foreground">{lang === "es" ? entry.es : entry.en}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Term;
