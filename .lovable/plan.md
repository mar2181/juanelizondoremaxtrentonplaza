

## Plan: Add Plain-Language Glossary Tooltips for Financial Terms

### Approach
Create a reusable `<Term>` component that wraps financial jargon with a subtle dotted underline. On hover (desktop) or tap (mobile), a tooltip appears with a short, plain-language explanation of what the term means and where it comes from. Uses the existing Radix tooltip primitives already in the project.

### Glossary (terms to define)

| Term | Plain Explanation |
|------|------------------|
| **Cap Rate** | "Capitalization Rate. Annual income divided by property price. Higher = riskier but cheaper to buy. An 8% cap on $1M income = $12.5M value." |
| **NOI / ION** | "Net Operating Income. Total rent collected minus operating costs. The property's profit before mortgage payments." |
| **NNN (Triple Net)** | "A lease where tenants pay their share of taxes, insurance, and maintenance on top of rent. Reduces the landlord's expense burden." |
| **GLA / ALB** | "Gross Leasable Area. The total rentable square footage in the building." |
| **CAM** | "Common Area Maintenance. Costs to maintain shared spaces (parking, landscaping, hallways). In NNN leases, tenants reimburse this." |
| **TI (Tenant Improvements)** | "Money the landlord spends to build out a space for a new tenant. Higher TI = higher cost to fill vacancies." |
| **$/SF** | "Price per square foot. Divides total price by building size to compare properties of different sizes." |
| **IRR** | "Internal Rate of Return. The projected annual return on investment over the full holding period, accounting for cash flow and sale." |
| **Percentage Rent** | "Extra rent a tenant pays when their sales exceed a threshold. Common in retail leases." |
| **OM (Offering Memorandum)** | "The seller's marketing document with property details, financials, and tenant info. Like a prospectus for real estate." |
| **Debt Service** | "Monthly mortgage payments (principal + interest) on the loan used to buy the property." |

### Implementation

**1. New file: `src/components/report/Term.tsx`**
- A small component that wraps text in a Radix Tooltip
- Dotted underline style, gold/accent colored on hover
- Bilingual definitions using the `<T>` component
- Glossary stored as a dictionary keyed by term ID

**2. Update ~8 report files** to wrap key terms with `<Term id="cap-rate">Cap Rate</Term>` where they first appear or where they're most important:
- `StatsRow.tsx` — GLA, NOI
- `CapRatesSection.tsx` — Cap Rate, NNN
- `FinancialSection.tsx` — NOI, NNN, CAM, Percentage Rent, Debt Service
- `CompsSection.tsx` — $/SF, Cap Rate
- `TenantsSection.tsx` — NNN
- `RisksSection.tsx` — TI
- `ContradictionsSection.tsx` — OM, IRR
- `ExecutiveSummary.tsx` — Cap Rate, NOI

Each term gets the tooltip only on its first or most prominent appearance per section to avoid clutter.

### Visual Design
- Dotted underline in `text-muted-foreground`, turns `text-primary` on hover
- Tooltip: dark card background, max-width 280px, 13px text, includes term name in bold + definition
- Mobile: tap to open, tap elsewhere to close (Radix handles this)

