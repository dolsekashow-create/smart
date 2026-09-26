"use client";

import { motion } from "motion/react";

const codeLines = [
  { w: "w-3/5", c: "bg-brand-400/70" },
  { w: "w-4/5", c: "bg-slate-500/50", indent: true },
  { w: "w-2/3", c: "bg-sky-300/50", indent: true },
  { w: "w-1/2", c: "bg-slate-500/50", indent: true },
  { w: "w-3/4", c: "bg-brand-500/60" },
  { w: "w-2/5", c: "bg-slate-500/50", indent: true },
  { w: "w-3/5", c: "bg-sky-300/50", indent: true },
  { w: "w-1/3", c: "bg-brand-400/70" },
];

const bars = [40, 62, 48, 75, 58, 88, 70];

export function HeroVisual() {
  return (
    <motion.div
      dir="ltr"
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-xl [perspective:1200px]"
    >
      {/* laptop screen */}
      <div className="relative rounded-t-2xl border border-brand-400/30 bg-navy-900 p-2.5 shadow-[0_30px_80px_-20px_rgba(26,140,255,0.55)]">
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-navy-800 to-navy-950">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="ms-3 h-2 w-28 rounded bg-white/10" />
          </div>
          <div className="grid grid-cols-5 gap-3 p-4">
            <div className="col-span-3 space-y-2.5">
              {codeLines.map((l, i) => (
                <motion.div
                  key={i}
                  className={`h-2 rounded ${l.w} ${l.c} ${l.indent ? "ms-4" : ""}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                />
              ))}
            </div>
            <div className="col-span-2 flex flex-col gap-3">
              <div className="rounded-lg border border-white/5 bg-white/5 p-2.5">
                <div className="mb-2 h-1.5 w-1/2 rounded bg-white/20" />
                <div className="flex h-16 items-end gap-1">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-brand-600 to-brand-400"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.07, duration: 0.6 }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full border-[3px] border-brand-400 border-t-transparent" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-1.5 w-full rounded bg-white/20" />
                    <div className="h-1.5 w-2/3 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 px-4 pb-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-white/5 bg-white/5 p-2">
                <div className="h-1.5 w-2/3 rounded bg-brand-400/50" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* laptop base */}
      <div className="relative -mx-6 h-4 rounded-b-2xl bg-gradient-to-b from-slate-400 to-slate-600">
        <div className="mx-auto h-1.5 w-24 rounded-b-md bg-slate-700/60" />
      </div>

      {/* phone */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute -bottom-6 -right-2 w-28 rounded-[1.4rem] border border-brand-400/40 bg-navy-900 p-1.5 shadow-2xl shadow-brand-500/30 sm:-right-6 sm:w-32"
      >
        <div className="rounded-[1.1rem] bg-gradient-to-b from-navy-800 to-navy-950 p-2.5">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
          <div className="h-1.5 w-2/3 rounded bg-white/25" />
          <div className="mt-1 h-1.5 w-1/3 rounded bg-brand-400/60" />
          <svg viewBox="0 0 100 50" className="mt-3 w-full">
            <motion.path
              d="M0 42 L15 34 L30 38 L45 22 L60 28 L75 12 L100 6"
              fill="none"
              stroke="#38aaff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.3, duration: 1.2 }}
            />
          </svg>
          <div className="mt-3 space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-brand-500/60" />
                <span className="h-1.5 flex-1 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
