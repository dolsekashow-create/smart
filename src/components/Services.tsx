import Image from "next/image";
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
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-500/10">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/30 to-brand-600/10" />
                  <div className="absolute bottom-3 start-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/40">
                    <Icon name={s.icon} size={24} />
                  </div>
                  <p
                    className="absolute top-3 end-3 rounded-full border border-white/15 bg-navy-950/60 px-2.5 py-1 font-display text-[10px] font-medium text-white/90 backdrop-blur"
                    dir="ltr"
                  >
                    {s.en}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{s.text}</p>
                  <ul className="mt-auto space-y-2 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check size={16} className="shrink-0 text-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
