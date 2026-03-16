import { useState, useEffect } from "react";
import { LangProvider } from "@/contexts/LangContext";
import Topbar from "@/components/report/Topbar";
import Sidebar from "@/components/report/Sidebar";
import HeroSection from "@/components/report/HeroSection";
import StatsRow from "@/components/report/StatsRow";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import TenantsSection from "@/components/report/TenantsSection";
import CapRatesSection from "@/components/report/CapRatesSection";
import CompsSection from "@/components/report/CompsSection";
import FinancialSection from "@/components/report/FinancialSection";
import RisksSection from "@/components/report/RisksSection";
import OpportunitySection from "@/components/report/OpportunitySection";
import StrategySection from "@/components/report/StrategySection";
import VerdictSection from "@/components/report/VerdictSection";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("summary");

  useEffect(() => {
    const sections = ["summary", "tenants", "caprates", "comps", "financial", "risks", "opportunity", "strategy", "nextsteps"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <Topbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar activeSection={activeSection} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="lg:ml-[260px] mt-16 min-h-[calc(100vh-64px)]">
          <HeroSection />
          <StatsRow />
          <ExecutiveSummary />
          <TenantsSection />
          <CapRatesSection />
          <CompsSection />
          <FinancialSection />
          <RisksSection />
          <OpportunitySection />
          <StrategySection />
          <VerdictSection />
        </main>
      </div>
    </LangProvider>
  );
};

export default Index;
