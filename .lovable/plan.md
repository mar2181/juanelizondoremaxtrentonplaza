

## Trenton Plaza Report — Major Revision Plan

This is a significant content overhaul across 10 files. The core change: Juan's NOI was wrong, the seller's $1,019,071 is correct, which shifts all valuations upward and narrows the overpricing from 10-25% to 10-15%. We also revert the broker to CBRE, the suite to 101, convert rents back to $/SF/mo per your earlier preference, and weave in the OM contradictions as negotiation leverage.

---

### Rent Format Decision

Your earlier instruction was to show rents as **monthly $/SF** because "clients are not used to seeing rent per year." Your new fact-check document uses annual figures. I'll keep the **monthly format** you originally requested, but use the corrected annual figures from the OM converted to monthly (e.g., $14.00/yr → $1.17/mo). The market range becomes $2.00–$2.50/SF/mo (from $24–$30/SF/yr). If you'd prefer annual instead, let me know.

---

### File-by-File Changes

**1. ExecutiveSummary.tsx**
- Broker stays CBRE (already correct)
- Overpriced range: 10–25% → **10–15%**
- Add Cinemark's 55% earnings drop + $1.87B debt mention (already present, keep)
- Valuation table rows updated:
  - Conservative: $9.5M–$10.2M → **$10.7M–$11.3M**
  - Moderate: $10.5M–$11.2M → **$11.3M–$11.8M**  
  - Aggressive: $12.0M–$12.7M → **$11.8M–$12.2M**
  - Seller row: "Overpriced 10–25%" → **"Overpriced 10–15%"**

**2. StatsRow.tsx**
- NOI: $907,921 → **$1,019,071**

**3. TenantsSection.tsx**
- Suite number stays 101 (already correct after revert)
- Rents stay monthly $/SF format but values stay as-is (they match OM when converted)
- Market range in subtitle: keep $2.00–$2.50/SF/mo
- Add a new callout below the vacancy callout: **"OM Contradictions"** highlighting the TruFit rent discrepancy ($14.00 vs $13.00/SF), TruFit expiration discrepancy (Dec-34 vs Dec-29), Koulikov and Galaxy VR rent discrepancies. This is negotiation gold.

**4. FinancialSection.tsx** — Most significant rewrite
- **"Our Estimate" card**: Replace $907,921 with the corrected $1,019,071. Show proper NNN breakdown:
  - Scheduled Base Rent: $1,117,773
  - NNN Reimbursements: +$362,834
  - Percentage Rent: +$34,904
  - Operating Expenses: -$496,440
  - = NOI: $1,019,071
- **"Seller's Number" card**: Show seller's full waterfall from OM:
  - Gross Potential Rent: $1,393,245
  - Less Vacancy: -$275,472
  - NNN Reimbursements: +$362,834
  - Percentage Rent: +$34,904
  - Operating Expenses: -$496,440
  - = NOI: $1,019,071
- Replace the "gap" callout with: "Both calculations confirm In-Place NOI of $1,019,071. The seller's NNN methodology is verified."
- **Valuation scenarios table** updated to match ExecutiveSummary new ranges
- Add new section: **"Price Structure"** showing the two-piece breakdown ($12,264,000 center + $500,000 land) and the effective cap rate difference (8.31% vs 7.98%)
- Add new section: **"Cash Flow Warning"** — Year 2 cash flow craters to $561K due to ~$680K lease-up costs, goes negative after debt (-$11,436)

**5. RisksSection.tsx**
- Suite 116 → **Suite 101**
- Add Cinemark's **4 renewal options at 10% bumps** as context (risk is real but nuanced)
- Add new risk card: **"Year 2 Cash Flow Crater"** — operating cash flow drops from $1M to $561K, negative after debt
- Add new risk card: **"40% Rollover Cliff (2027-2028)"** — 39,486 SF at risk within 3 years
- Add new risk card: **"Re-Tenanting Cost Exposure"** — $40/SF TI for anchor ($1.18M), $25/SF for shops, 6% leasing commissions
- Keep below-market rents in monthly format

**6. OpportunitySection.tsx**
- Keep monthly $/SF format
- Add mention of Cinemark's 4 renewal options as upside (10% rent bumps each period)
- Add item: **"Exploit OM Contradictions"** — use TruFit discrepancies and outdated Cinemark data as negotiation leverage to extract price concessions

**7. CapRatesSection.tsx**
- Add note that effective cap rate on total price (incl. land) is **7.98%**, not 8.31%
- Add context about the seller's model assuming Cinemark renewal (18.14% IRR treats it as certain)

**8. CompsSection.tsx**
- Floor & Decor cap: "5.00%" → **"~5.00%*"** with footnote about unverified ground lease
- Edinburg avg cap: "~7.15%" → **"~7.33%"**
- Trenton Plaza psf: "$125" → **"$124.60"**

**9. StrategySection.tsx**
- Opening offer: $10.2M → **$11.0M**
- Target price: $10.8M → **$11.5M**
- Walk-away ceiling: $11.5M → **$12.0M**
- Update descriptions to reference OM contradictions as leverage points
- Add step about requesting **90-day due diligence** and getting Cinemark's renewal stance in writing
- Reference the Year 2 cash flow issue as negotiation ammunition

**10. VerdictSection.tsx**
- Recommended offer: $10,200,000 → **$11,000,000**
- Discount: -20.1% → **-13.8%**
- LOI amount: $10.2M → **$11.0M**
- Update rationale to reflect corrected NOI but emphasize OM contradictions and cash flow risks
- Update next steps to include: resolve TruFit contradictions, request Cinemark renewal stance in writing

**11. Sidebar.tsx** — Add new nav item
- Add **"Contradicciones del OM" / "OM Contradictions"** nav link between Financial and Risks

---

### New Section: OM Contradictions (new file)

Create **`src/components/report/ContradictionsSection.tsx`** — a dedicated section highlighting the 7 internal contradictions found in the seller's OM. Each displayed as a numbered card with the specific discrepancy, what the OM says in two places, and why it matters for negotiation. This is the strongest new content and deserves its own visual treatment.

---

### What Stays the Same
- HeroSection.tsx — no changes needed
- SectionHeader.tsx — reusable component
- Topbar.tsx — no changes
- LangContext.tsx — no changes
- Index.tsx — add the new ContradictionsSection to the page layout

---

### Summary of Impact
- 10 files modified, 1 new file created
- NOI corrected upward by $111K
- All valuations shift up ~$1M
- Discount narrows from 20% to 14%
- 7 OM contradictions added as negotiation leverage
- Cash flow and rollover risks surfaced as new content

