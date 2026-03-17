import { T } from "@/contexts/LangContext";

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: { es: React.ReactNode; en: React.ReactNode };
  title: { es: React.ReactNode; en: React.ReactNode };
  subtitle?: { es: React.ReactNode; en: React.ReactNode };
}) => (
  <div className="mb-8">
    <p className="text-[11px] tracking-[2.5px] uppercase text-primary font-bold mb-2.5 flex items-center gap-2">
      <span className="w-4 h-0.5 bg-primary inline-block" />
      <T es={eyebrow.es} en={eyebrow.en} />
    </p>
    <h2 className="font-serif text-[32px] font-black leading-tight tracking-tight text-foreground max-md:text-[26px]">
      <T es={title.es} en={title.en} />
    </h2>
    {subtitle && (
      <p className="text-[15px] leading-relaxed text-text-sub max-w-[780px] mt-4">
        <T es={subtitle.es} en={subtitle.en} />
      </p>
    )}
  </div>
);

export default SectionHeader;
