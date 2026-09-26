import { highlights } from "@/data/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-x-reverse lg:divide-slate-200">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08} className="px-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                <Icon name={h.icon} size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy-900">{h.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
