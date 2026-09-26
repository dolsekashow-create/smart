import { Check } from "lucide-react";
import { services } from "@/data/site";
import { Icon } from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="خدماتنا"
          title="ما الذي نقدمه لك؟"
          text="مجموعة متكاملة من خدمات تكنولوجيا المعلومات والحلول الرقمية تغطي دورة حياة مشروعك التقني بالكامل."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-500/10">
                <div className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-gradient-to-l from-brand-400 to-brand-600 transition duration-500 group-hover:scale-x-100" />
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/25">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-0.5 font-display text-xs text-slate-400" dir="ltr" style={{ textAlign: "right" }}>
                  {s.en}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{s.text}</p>
                <ul className="mt-auto space-y-2 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="shrink-0 text-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
