import React from "react";
import { useLang } from "@/contexts/LangContext";
import { T } from "@/contexts/LangContext";

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
  | "debt-service"
  | "loi"
  | "rent-roll"
  | "10-k";

const glossary: Record<TermId, { term: string; icon: string; es: string; en: string }> = {
  "cap-rate": {
    term: "Cap Rate",
    icon: "📉",
    es: "Tasa de Capitalización. Ingreso anual ÷ precio de la propiedad. Más alto = más riesgo pero más barato de comprar. Un cap del 8% sobre $1M de ingreso = valor de $12.5M.",
    en: "Capitalization Rate. Annual income ÷ property price. Higher = riskier but cheaper to buy. An 8% cap on $1M income = $12.5M value.",
  },
  noi: {
    term: "NOI / ION",
    icon: "💰",
    es: "Ingreso Operativo Neto. Total de rentas cobradas menos costos operativos. La ganancia de la propiedad antes de pagos de hipoteca.",
    en: "Net Operating Income. Total rent collected minus operating costs. The property's profit before mortgage payments.",
  },
  nnn: {
    term: "NNN (Triple Net)",
    icon: "🏦",
    es: "Un contrato donde los inquilinos pagan su parte de impuestos, seguro y mantenimiento además de la renta. Reduce la carga de gastos del propietario.",
    en: "A lease where tenants pay their share of taxes, insurance, and maintenance on top of rent. Reduces the landlord's expense burden.",
  },
  gla: {
    term: "GLA / ALB",
    icon: "🏢",
    es: "Área Leasable Bruta. El total de pies cuadrados rentables del edificio. Se usa para calcular ocupación, vacancia y renta por pie.",
    en: "Gross Leasable Area. The total rentable square footage in the building. Used to calculate occupancy, vacancy, and rent per foot.",
  },
  cam: {
    term: "CAM",
    icon: "🔧",
    es: "Mantenimiento de Áreas Comunes. Costos de mantener espacios compartidos (estacionamiento, jardinería, pasillos). En contratos NNN, los inquilinos reembolsan esto.",
    en: "Common Area Maintenance. Costs to maintain shared spaces (parking, landscaping, hallways). In NNN leases, tenants reimburse this.",
  },
  ti: {
    term: "TI",
    icon: "🏗",
    es: "Mejoras para Inquilinos. Dinero que el propietario gasta para acondicionar un espacio para un nuevo inquilino. Mayor TI = mayor costo para llenar vacantes.",
    en: "Tenant Improvements. Money the landlord spends to build out a space for a new tenant. Higher TI = higher cost to fill vacancies.",
  },
  psf: {
    term: "$/SF",
    icon: "📐",
    es: "Precio por pie cuadrado. Divide el precio total entre el tamaño del edificio para comparar propiedades de diferentes tamaños.",
    en: "Price per square foot. Divides total price by building size to compare properties of different sizes.",
  },
  irr: {
    term: "IRR / TIR",
    icon: "📈",
    es: "Tasa Interna de Retorno. El rendimiento anual proyectado de la inversión durante todo el período de tenencia, considerando flujo de caja y venta.",
    en: "Internal Rate of Return. The projected annual return on investment over the full holding period, accounting for cash flow and sale.",
  },
  "pct-rent": {
    term: "Percentage Rent",
    icon: "🧾",
    es: "Renta Porcentual. Renta extra que un inquilino paga cuando sus ventas superan un umbral. Común en contratos de comercio minorista.",
    en: "Extra rent a tenant pays when their sales exceed a threshold. Common in retail leases.",
  },
  om: {
    term: "OM",
    icon: "📊",
    es: "Memorándum de Oferta. El documento de marketing del vendedor con detalles de la propiedad, finanzas e información de inquilinos. Es marketing, no verdad absoluta.",
    en: "Offering Memorandum. The seller's marketing document with property details, financials, and tenant info. It's marketing, not absolute truth.",
  },
  "debt-service": {
    term: "Debt Service",
    icon: "💵",
    es: "Servicio de Deuda. Pagos mensuales de hipoteca (capital + intereses) sobre el préstamo utilizado para comprar la propiedad.",
    en: "Monthly mortgage payments (principal + interest) on the loan used to buy the property.",
  },
  loi: {
    term: "LOI",
    icon: "📄",
    es: "Carta de Intención. Es el paso antes del contrato — una propuesta formal no vinculante de compra con precio y condiciones.",
    en: "Letter of Intent. The step before the contract — a formal non-binding purchase proposal with price and terms.",
  },
  "rent-roll": {
    term: "Rent Roll",
    icon: "🧾",
    es: "Lista oficial de inquilinos con sus rentas, pies cuadrados y fechas de vencimiento. Es la base para calcular el ingreso de la propiedad.",
    en: "Official list of tenants with their rents, square footage, and expiration dates. The basis for calculating property income.",
  },
  "10-k": {
    term: "10-K",
    icon: "🔍",
    es: "Reporte anual oficial de empresas públicas presentado ante la SEC. Contiene estados financieros auditados — la fuente más confiable sobre la salud de una empresa.",
    en: "Annual report filed by public companies with the SEC. Contains audited financial statements — the most reliable source on a company's health.",
  },
};

interface TermsGuideProps {
  terms: TermId[];
}

const TermsGuide: React.FC<TermsGuideProps> = ({ terms }) => {
  const { lang } = useLang();

  return (
    <div className="bg-secondary/30 border border-border rounded-xl p-5 mt-7">
      <p className="caps mb-3 flex items-center gap-2">
        <span className="text-base">📚</span>
        <T es="Términos Clave en Esta Sección" en="Key Terms in This Section" />
      </p>
      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {terms.map((id) => {
          const entry = glossary[id];
          if (!entry) return null;
          return (
            <div key={id} className="flex items-start gap-2.5">
              <span className="text-base flex-shrink-0 mt-0.5">{entry.icon}</span>
              <div>
                <span className="text-xs font-bold text-primary block">{entry.term}</span>
                <span className="text-xs text-muted-foreground leading-relaxed block">
                  {lang === "es" ? entry.es : entry.en}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsGuide;
