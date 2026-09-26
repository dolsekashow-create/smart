import Image from "next/image";
import { domains, images } from "@/data/site";
import { Icon } from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";

export function Domains() {
  return (
    <section id="domains" className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
      <Image src={images.domains} alt="" fill sizes="100vw" className="object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/70 to-navy-950" />
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
              <div className="group relative flex h-full min-h-64 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-6 transition hover:border-brand-400/60">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/20 transition duration-500 group-hover:via-navy-950/75" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-400/40 bg-brand-500/20 text-brand-300 backdrop-blur transition group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={d.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{d.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
