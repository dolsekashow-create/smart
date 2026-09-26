import { domains } from "@/data/site";
import { Icon } from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";

export function Domains() {
  return (
    <section id="domains" className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute top-1/2 start-0 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          dark
          eyebrow="مجالات العمل"
          title="أبعد من الخدمات… نصنع الابتكار"
          text="نعمل في مجالات استراتيجية تدعم صناعة تكنولوجيا المعلومات والاتصالات والبحث العلمي وريادة الأعمال."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-brand-400/50 hover:bg-white/[0.07]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-500/10 text-brand-300 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={d.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{d.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
