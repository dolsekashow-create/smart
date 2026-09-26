import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-900/85 to-brand-700/70" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Reveal className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            عندك فكرة مشروع تقني؟
          </h2>
          <p className="mt-3 max-w-xl leading-8 text-slate-200">
            من الاستشارة الأولى وحتى التشغيل والتدريب — فريق دلتا سمارت سيستم معاك في كل خطوة.
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-navy-900 shadow-xl transition hover:bg-slate-100"
        >
          ابدأ مشروعك الآن
          <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}
