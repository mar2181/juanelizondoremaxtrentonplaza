import { T } from "@/contexts/LangContext";
import SectionHeader from "./SectionHeader";
import Term from "./Term";
import TermsGuide from "./TermsGuide";

const FinancialSection = () => (
  <section id="financial" className="px-12 py-14 border-b border-border max-md:px-6 max-md:py-10">
    <SectionHeader
      eyebrow={{ es: "Análisis Financiero", en: "Financial Analysis" }}
      title={{ es: "ION Verificado y Estructura de Precio", en: "Verified NOI & Price Structure" }}
      subtitle={{
        es: "Después de revisar los dos Memorándums de Oferta del vendedor línea por línea, el ION declarado de $1,019,071 es correcto. La metodología NNN está verificada.",
        en: "After reviewing the seller's two Offering Memorandums line by line, the stated NOI of $1,019,071 is correct. The NNN methodology is verified.",
      }}
    />

    <div className="grid grid-cols-2 gap-5 mt-7 max-md:grid-cols-1">
      {/* Verified NOI Breakdown */}
      <div className="bg-card border border-border rounded-xl p-7 border-t-[3px] border-t-primary">
        <h4 className="caps mb-2"><T es={<>Desglose Verificado del <Term id="noi">ION</Term></>} en={<>Verified <Term id="noi">NOI</Term> Breakdown</>} /></h4>
        <p className="text-[32px] font-extrabold text-primary tabular-nums tracking-tight mb-5">$1,019,071</p>
        <div className="space-y-0">
          {[
            { label: { es: "Renta Base Programada", en: "Scheduled Base Rent" }, val: "$1,117,773" },
            { label: { es: "Reembolsos NNN", en: "NNN Reimbursements" }, val: "+$362,834", termId: "nnn" },
            { label: { es: "Renta Porcentual", en: "Percentage Rent" }, val: "+$34,904", termId: "pct-rent" },
            { label: { es: "Menos: Gastos Operativos", en: "Less: Operating Expenses" }, val: "-$496,440", negative: true },
          ].map((item, i) => (
            <div key={i} className="flex justify-between py-2 text-[13px] border-b border-border last:border-b-0">
              <span className="text-muted-foreground">
                {(item as any).termId ? <Term id={(item as any).termId}><T es={item.label.es} en={item.label.en} /></Term> : <T es={item.label.es} en={item.label.en} />}
              </span>
              <span className={`font-semibold tabular-nums ${item.negative ? "text-destructive" : "text-text-sub"}`}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seller's Full Waterfall */}
      <div className="bg-card border border-border rounded-xl p-7 border-t-[3px] border-t-muted-foreground">
        <h4 className="caps mb-2"><T es="Cascada Completa del Vendedor" en="Seller's Full Waterfall" /></h4>
        <p className="text-[32px] font-extrabold text-foreground tabular-nums tracking-tight mb-5">$1,019,071</p>
        <div className="space-y-0">
          {[
            { label: { es: "Renta Potencial Bruta", en: "Gross Potential Rent" }, val: "$1,393,245" },
            { label: { es: "Menos: Vacancia", en: "Less: Vacancy" }, val: "-$275,472", negative: true },
            { label: { es: "Reembolsos NNN", en: "NNN Reimbursements" }, val: "+$362,834" },
            { label: { es: "Renta Porcentual", en: "Percentage Rent" }, val: "+$34,904" },
            { label: { es: "Menos: Gastos Operativos", en: "Less: Operating Expenses" }, val: "-$496,440", negative: true },
          ].map((item, i) => (
            <div key={i} className="flex justify-between py-2 text-[13px] border-b border-border last:border-b-0">
              <span className="text-muted-foreground"><T es={item.label.es} en={item.label.en} /></span>
              <span className={`font-semibold tabular-nums ${item.negative ? "text-destructive" : "text-text-sub"}`}>{item.val}</span>
            </div>
          ))}
        </div>
        <div className="callout-gradient border border-border rounded-lg p-4 mt-5">
          <p className="text-xs text-text-sub leading-relaxed">
            <T
              es="Ambos cálculos confirman un ION Actual de $1,019,071. La metodología NNN del vendedor está verificada — los inquilinos reembolsan $362,834 (73%) de los $496,440 en gastos operativos."
              en="Both calculations confirm an In-Place NOI of $1,019,071. The seller's NNN methodology is verified — tenants reimburse $362,834 (73%) of the $496,440 in operating expenses."
            />
          </p>
        </div>
      </div>
    </div>

    {/* Price Structure */}
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="px-6 py-4 border-b border-border flex items-center gap-2">
        <span className="w-1 h-[18px] bg-primary rounded-sm" />
        <h4 className="text-base font-bold text-foreground">
          <T es="Estructura del Precio" en="Price Structure" />
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                <T es="Componente" en="Component" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-secondary/30">
                <T es="Precio" en="Price" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-secondary/30">
                <T es="Detalle" en="Detail" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub font-semibold">
                <T es="Centro Comercial (98,426 SF)" en="Shopping Center (98,426 SF)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">$12,264,000</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">$124.60/SF · Cap 8.31%</td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub font-semibold">
                <T es="Terreno Adicional (3.05 AC)" en="Additional Land (3.05 AC)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">$500,000</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">
                <T es="$3.28/PSF · Incluye estanque de retención" en="$3.28/PSF · Includes retention pond" />
              </td>
            </tr>
            <tr className="bg-destructive/5">
              <td className="px-4 py-3.5 text-destructive font-semibold">
                <T es="Precio Total" en="Total Price" />
              </td>
              <td className="px-4 py-3.5 text-right tabular-nums text-destructive font-semibold">$12,764,000</td>
              <td className="px-4 py-3.5 text-right tabular-nums text-destructive">
                <T es="Cap Efectivo: 7.98%" en="Effective Cap: 7.98%" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Cash Flow Warning */}
    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-7 mt-7">
      <h4 className="text-base font-bold text-destructive mb-2 flex items-center gap-2">
        <span className="w-1 h-[18px] bg-destructive rounded-sm" />
        <T es="Alerta de Flujo de Caja: Año 2" en="Cash Flow Warning: Year 2" />
      </h4>
      <p className="text-sm text-text-sub leading-relaxed">
        <T
           es={<>El flujo de caja operativo cae de $1,004,307 (2025) a $561,281 en 2026 debido a ~$680K en costos de arrendamiento y <Term id="ti">mejoras para inquilinos</Term>. Después del <Term id="debt-service">servicio de deuda</Term>, el flujo se vuelve NEGATIVO (-$11,436). Esto no se refleja en el precio de venta del vendedor.</>}
           en={<>Operating cash flow drops from $1,004,307 (2025) to $561,281 in 2026 due to ~$680K in lease-up capital costs (<Term id="ti">TI</Term> and commissions). After <Term id="debt-service">debt service</Term>, cash flow goes NEGATIVE (-$11,436). This is not reflected in the seller's asking price.</>}
        />
      </p>
    </div>

    {/* Expense Breakdown */}
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="px-6 py-4 border-b border-border flex items-center gap-2">
        <span className="w-1 h-[18px] bg-primary rounded-sm" />
        <h4 className="text-base font-bold text-foreground">
          <T es="Desglose de Gastos (del OM)" en="Expense Breakdown (from OM)" />
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="caps px-4 py-3 text-left border-b border-border bg-secondary/30">
                <T es="Gasto" en="Expense" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-secondary/30">
                <T es="Monto Anual" en="Annual Amount" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-secondary/30">
                <T es="Por Pie²" en="Per SF" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: { es: "Mantenimiento de Áreas Comunes", en: "Common Area Maintenance" }, amount: "$131,273", psf: "$1.33", termId: "cam" },
              { label: { es: "Cuota de Administración", en: "Management Fee" }, amount: "$45,465", psf: "$0.46" },
              { label: { es: "Seguro", en: "Insurance" }, amount: "$73,007", psf: "$0.74" },
              { label: { es: "Impuestos", en: "Real Estate Taxes" }, amount: "$246,695", psf: "$2.51" },
            ].map((item, i) => (
              <tr key={i}>
                <td className="px-4 py-3.5 border-b border-border text-text-sub">
                   {(item as any).termId ? <Term id={(item as any).termId}><T es={item.label.es} en={item.label.en} /></Term> : <T es={item.label.es} en={item.label.en} />}
                </td>
                <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">{item.amount}</td>
                <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">{item.psf}</td>
              </tr>
            ))}
            <tr className="bg-secondary/20">
              <td className="px-4 py-3.5 text-foreground font-bold">Total</td>
              <td className="px-4 py-3.5 text-right tabular-nums text-foreground font-bold">$496,440</td>
              <td className="px-4 py-3.5 text-right tabular-nums text-foreground font-bold">$5.04</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 bg-secondary/10 text-xs text-muted-foreground">
        <T
          es="De este total, $362,834 (73%) se recupera mediante reembolsos NNN. La carga neta real del propietario es ~$133,606/año. Nota: El contrato de Cinemark tiene un tope de CAM del 3%."
          en="Of this total, $362,834 (73%) is recovered through NNN reimbursements. The landlord's true net expense burden is ~$133,606/year. Note: Cinemark's lease has a 3% CAM cap."
        />
      </div>
    </div>

    {/* Valuation Scenarios */}
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-7">
      <div className="px-6 py-4 border-b border-border flex items-center gap-2">
        <span className="w-1 h-[18px] bg-primary rounded-sm" />
        <h4 className="text-base font-bold text-foreground">
          <T es="Escenarios de Valuación" en="Valuation Scenarios" />
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="caps px-4 py-3 text-left border-b border-border bg-primary/5 text-primary">
                <T es="Escenario" en="Scenario" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-primary/5 text-primary">
                <T es="Rango de Valor" en="Value Range" />
              </th>
              <th className="caps px-4 py-3 text-right border-b border-border bg-primary/5 text-primary">Cap Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-success/5">
              <td className="px-4 py-3.5 border-b border-border text-success font-semibold">
                <T es="Conservador (Estado Actual)" en="Conservative (As-Is)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-success font-semibold">$10.7M – $11.3M</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-success">9.0% – 9.5%</td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Moderado (Ocupación Parcial)" en="Moderate (Partial Lease-Up)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">$11.3M – $11.8M</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">8.5% – 8.75%</td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 border-b border-border text-text-sub">
                <T es="Agresivo (Estabilización Total)" en="Aggressive (Full Stabilization)" />
              </td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-foreground font-semibold">$11.8M – $12.2M</td>
              <td className="px-4 py-3.5 border-b border-border text-right tabular-nums text-text-sub">8.0% – 8.5%</td>
            </tr>
            <tr className="bg-destructive/5">
              <td className="px-4 py-3.5 text-destructive font-semibold">
                <T es="Precio del Vendedor" en="Seller's Asking Price" />
              </td>
              <td className="px-4 py-3.5 text-right tabular-nums text-destructive font-semibold">$12,764,000</td>
              <td className="px-4 py-3.5 text-right tabular-nums text-destructive">
                <T es="8.31%* (solo centro)" en="8.31%* (center only)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default FinancialSection;
