

## Plan: Update Negotiation Strategy to New Numbers

The new strategy is significantly more aggressive. Here's every place that needs to change and what the new content will be.

### New Strategy Numbers
| Point | Old | New |
|-------|-----|-----|
| Opening Offer | $11.0M | **$9.5M** |
| Due Diligence | 90 days | **60 days** |
| Target Price | $11.5M | **$10.5M** |
| Walk-Away Ceiling | $12.0M | **$11.3M** |

### Derived Numbers That Change
- **Discount %**: Was -13.8%. New: ($12,764,000 - $9,500,000) / $12,764,000 = **-25.6%**
- **Overpriced range**: Was 10-15%. New: **~12-25%** (walk-away at $11.3M = 11.5% below asking; opening at $9.5M = 25.6% below)
- **Valuation table ranges** need to shift down. The cap rate math on $1,019,071 NOI:
  - $9.5M → 10.7% cap | $10.5M → 9.7% cap | $11.3M → 9.0% cap

### Files to Change (4 files)

**1. StrategySection.tsx** — All 4 steps rewritten:
- Step 1: "Oferta Inicial: **$9.5M**" — aggressive floor backed by 24% vacancy, Year 2 negative cash flow, OM contradictions, Cinemark risk
- Step 2: "Solicitar Due Diligence de **60 Días**" — verify TruFit lease, get Cinemark renewal in writing
- Step 3: "Precio Objetivo: **$10.5M**" — sweet spot, ~9.7% cap rate, uses Cinemark fragility as leverage
- Step 4: "Techo de Retiro: **$11.3M**" — above this, walk away; 40% GLA rollover, re-tenanting costs, negative Year 2

**2. VerdictSection.tsx**:
- Recommended offer: $11,000,000 → **$9,500,000**
- Discount badge: -13.8% → **-25.6%**
- Rationale text: update to reference $9.5M opening with 60-day due diligence
- Next Steps item 4: LOI with **$9.5M offer and 60-day due diligence**

**3. ExecutiveSummary.tsx** — Valuation table:
- Conservative row: $10,700,000–$11,300,000 → **$9,300,000–$9,800,000** / "Opening offer"
- Moderate row: $11,300,000–$11,800,000 → **$10,200,000–$10,800,000** / "Target price"
- Aggressive row: $11,800,000–$12,200,000 → **$10,800,000–$11,500,000** / "Walk-away ceiling"
- Seller row: "Overpriced 10–15%" → **"Overpriced 12–25%"**
- Paragraph: "overpriced by 10–15%" → **"overpriced by 12–25%"**

**4. FinancialSection.tsx** — Valuation scenarios table:
- Conservative: $10.7M–$11.3M / 9.0%–9.5% → **$9.3M–$9.8M / 10.4%–11.0%**
- Moderate: $11.3M–$11.8M / 8.5%–8.75% → **$10.2M–$10.8M / 9.4%–10.0%**
- Aggressive: $11.8M–$12.2M / 8.0%–8.5% → **$10.8M–$11.5M / 8.9%–9.4%**

### What Does NOT Change
- NOI ($1,019,071) — unchanged
- Rent roll, tenant data, comps, cap rate benchmarks — unchanged
- OM contradictions, risks, opportunities — unchanged
- The analytical findings stay the same; only the negotiation posture shifts

### Risk Note
The new strategy is much more aggressive (25.6% below asking vs. previous 13.8%). The underlying NOI analysis supports a fair value around $10.5M-$11.3M at 9.0-9.7% cap rates, so the $9.5M opening is a hard negotiation anchor rather than a valuation-derived number. This is a valid strategy — it gives room to negotiate up to the $10.5M target. No analytical errors are introduced.

