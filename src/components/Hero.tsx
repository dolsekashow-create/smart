"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { images } from "@/data/site";
import { HeroVisual } from "./HeroVisual";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-navy-950 via-navy-950/80 to-navy-950/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 start-1/2 h-[520px] w-[520px] rounded-full bg-brand-600/25 blur-[140px]" />
      <div className="absolute bottom-0 end-0 h-[380px] w-[380px] rounded-full bg-brand-400/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-lg font-bold text-brand-400"
          >
            شريكك في التحول الرقمي
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-3 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl xl:text-6xl"
            dir="ltr"
            style={{ textAlign: "right" }}
          >
            Delta <span className="text-gradient">Smart System</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-4 text-xl font-bold text-white md:text-2xl"
          >
            خدمات تكنولوجيا المعلومات والحلول الرقمية
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-5 max-w-xl leading-8 text-slate-300"
          >
            نساعدك على بناء مستقبل رقمي أقوى من خلال حلول تقنية متكاملة — من تطوير البرمجيات
            والنظم المدمجة، إلى البنية التحتية والشبكات ورقمنة المحتوى — تجمع بين الكفاءة والأمان
            والابتكار.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
            >
              تواصل معنا
              <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/25 px-7 py-3.5 font-bold text-white transition hover:border-brand-400 hover:bg-white/5"
            >
              اكتشف خدماتنا
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
