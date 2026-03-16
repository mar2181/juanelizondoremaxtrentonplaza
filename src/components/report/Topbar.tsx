import { useLang } from "@/contexts/LangContext";

interface Props {
  onMenuToggle: () => void;
}

const Topbar = ({ onMenuToggle }: Props) => {
  const { lang, toggle } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background/85 backdrop-blur-xl border-b border-border z-[1000] flex items-center justify-between pr-6">
      <div className="flex items-center gap-3 px-6 h-full w-[260px] border-r border-border max-lg:w-auto max-lg:border-r-0">
        <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center font-black text-sm text-primary-foreground">
          TP
        </div>
        <div>
          <span className="font-bold text-[15px] tracking-tight">
            Trenton <span className="text-primary">Plaza</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Language toggle */}
        <div className="flex items-center gap-1 bg-card p-1 rounded-lg border border-border">
          <button
            onClick={() => lang === "en" && toggle()}
            className={`px-3.5 py-1 rounded-md text-xs font-bold tracking-wide transition-all ${
              lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => lang === "es" && toggle()}
            className={`px-3.5 py-1 rounded-md text-xs font-bold tracking-wide transition-all ${
              lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            EN
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={onMenuToggle} className="lg:hidden p-2 text-foreground">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
