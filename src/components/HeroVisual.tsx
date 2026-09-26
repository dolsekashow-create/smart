"use client";

import { MotionConfig, motion } from "motion/react";
import { Cloud, Code2, Cpu, Database, Network, ShieldCheck } from "lucide-react";
import { LogoMark } from "./Logo";

const r3 = (n: number) => Math.round(n * 1000) / 1000;
const ORBIT = 46; // % of the box, outer ring radius
const nodes = [Code2, Database, Cloud, ShieldCheck, Cpu, Network].map((Icon, i) => {
  const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
  return { Icon, x: r3(50 + ORBIT * Math.cos(a)), y: r3(50 + ORBIT * Math.sin(a)) };
});

const spin = (duration: number, reverse = false) => ({
  animate: { rotate: reverse ? -360 : 360 },
  transition: { duration, repeat: Infinity, ease: "linear" as const },
});

const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
const bars = [35, 60, 45, 80, 55, 90, 70, 95];

export function HeroVisual() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        dir="ltr"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto aspect-square w-full max-w-[540px]"
      >
        {/* ambient glow */}
        <div className="absolute inset-[12%] rounded-full bg-brand-500/25 blur-[80px]" />

        {/* radar sweep */}
        <motion.div
          {...spin(7)}
          className="absolute inset-[4%] rounded-full [background:conic-gradient(from_0deg,transparent_0deg,transparent_290deg,rgba(56,170,255,0.28)_360deg)] [mask-image:radial-gradient(circle,transparent_22%,black_24%,black_70%,transparent_100%)]"
        />

        {/* static rings + ticks */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="hv-arc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7cc8ff" />
              <stop offset="100%" stopColor="#0b6fe0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={ORBIT} fill="none" stroke="rgba(56,170,255,0.18)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="33" fill="none" stroke="rgba(56,170,255,0.14)" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(56,170,255,0.22)" strokeWidth="0.3" />
          {ticks.map((deg) => (
            <line
              key={deg}
              x1="50"
              y1={50 - 39}
              x2="50"
              y2={50 - (deg % 30 === 0 ? 41.5 : 40.2)}
              stroke={deg % 30 === 0 ? "rgba(124,200,255,0.6)" : "rgba(56,170,255,0.25)"}
              strokeWidth={deg % 30 === 0 ? 0.35 : 0.2}
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
        </svg>

        {/* rotating arcs */}
        <motion.svg {...spin(14)} viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle
            cx="50" cy="50" r={ORBIT} fill="none" stroke="url(#hv-arc)" strokeWidth="0.7"
            strokeLinecap="round" strokeDasharray="55 234"
          />
        </motion.svg>
        <motion.svg {...spin(20, true)} viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle
            cx="50" cy="50" r="33" fill="none" stroke="#38aaff" strokeOpacity="0.55" strokeWidth="0.35"
            strokeDasharray="0.6 2.2"
          />
          <circle
            cx="50" cy="50" r="22" fill="none" stroke="#7cc8ff" strokeWidth="0.6"
            strokeLinecap="round" strokeDasharray="18 120"
          />
        </motion.svg>

        {/* particles on middle ring */}
        <motion.div {...spin(9)} className="absolute inset-0">
          {[0, 120, 240].map((deg) => (
            <span
              key={deg}
              className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300 shadow-[0_0_12px_4px_rgba(56,170,255,0.7)]"
              style={{
                left: `${r3(50 + 33 * Math.cos((deg * Math.PI) / 180))}%`,
                top: `${r3(50 + 33 * Math.sin((deg * Math.PI) / 180))}%`,
              }}
            />
          ))}
        </motion.div>

        {/* orbit: data beams + service nodes */}
        <motion.div {...spin(60)} className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {nodes.map((n, i) => (
              <motion.line
                key={i}
                x1="50" y1="50" x2={n.x} y2={n.y}
                stroke="#38aaff" strokeOpacity="0.35" strokeWidth="0.25" strokeDasharray="1 2"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </svg>
          {nodes.map(({ Icon, x, y }, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.div
                {...spin(60, true)}
                className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-400/40 bg-navy-900/80 text-brand-300 shadow-[0_0_24px_-4px_rgba(56,170,255,0.6)] backdrop-blur-md sm:h-14 sm:w-14"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400/20 to-transparent" />
                <Icon className="relative h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* core */}
        <div className="absolute inset-[35%] flex items-center justify-center">
          {[0, 1.2].map((d) => (
            <motion.span
              key={d}
              className="absolute inset-0 rounded-full border border-brand-400/60"
              animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: d, ease: "easeOut" }}
            />
          ))}
          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-brand-400/50 bg-[radial-gradient(circle_at_30%_25%,#12306a,#030b1c_70%)] shadow-[0_0_60px_-5px_rgba(26,140,255,0.8),inset_0_0_30px_rgba(56,170,255,0.25)]">
            <LogoMark className="h-auto w-[62%] drop-shadow-[0_0_14px_rgba(56,170,255,0.7)]" />
          </div>
        </div>

        {/* glass card: system status */}
        <div className="absolute top-[1%] -left-[5%] hidden animate-fade-up [animation-delay:900ms] sm:block">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-44 rounded-2xl border border-white/10 bg-navy-900/60 p-3.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              System status
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </div>
          <p className="mt-1 font-display text-2xl font-bold text-white">
            99.9<span className="text-brand-400">%</span>
          </p>
          <div className="mt-2 flex h-8 items-end gap-1">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-brand-600 to-brand-300"
                animate={{ height: [`${h}%`, `${Math.max(25, 100 - h)}%`, `${h}%`] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
        </div>

        {/* glass card: terminal */}
        <div className="absolute -right-[5%] bottom-[1%] hidden animate-fade-up [animation-delay:1100ms] sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-52 rounded-2xl border border-white/10 bg-navy-950/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="ms-auto font-mono text-[9px] text-slate-500">delta ~ zsh</span>
          </div>
          <div className="space-y-1 px-3 py-2.5 font-mono text-[10.5px] leading-relaxed">
            <p className="text-slate-300">
              <span className="text-brand-400">$</span> delta deploy --prod
            </p>
            {[
              ["✓", "build completed", "text-emerald-400"],
              ["✓", "network secured", "text-emerald-400"],
              ["●", "system online", "text-brand-300"],
            ].map(([m, t, c], i) => (
              <p
                key={t}
                className="animate-fade-up text-slate-400"
                style={{ animationDelay: `${1.5 + i * 0.5}s` }}
              >
                <span className={c}>{m}</span> {t}
              </p>
            ))}
            <p className="text-slate-300">
              <span className="text-brand-400">$</span>{" "}
              <span className="inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-brand-300" />
            </p>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
