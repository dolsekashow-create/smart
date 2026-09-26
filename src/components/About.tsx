import { Eye, Target } from "lucide-react";
import { process, stats } from "@/data/site";
import { Counter } from "./Counter";
import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold text-brand-500">من نحن</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy-900 md:text-4xl" dir="ltr" style={{ textAlign: "right" }}>
              Delta Smart System
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              دلتا سمارت سيستم شركة مصرية متخصصة في تقديم خدمات تكنولوجيا المعلومات والحلول الرقمية،
              انطلاقاً من محافظة الإسماعيلية. نؤمن بأن التقنية ليست مجرد أدوات، بل وسيلة لخلق فرص
              جديدة وتحقيق نمو حقيقي لعملائنا.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              نغطي طيفاً واسعاً من الأنشطة: من تحليل وتصميم البرمجيات وقواعد البيانات، والنظم المدمجة
              ومعدات الحاسبات، إلى مشروعات البنية الأساسية والشبكات، والمحتوى الرقمي، والتدريب
              والاستشارات، والبحث والتطوير.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-surface p-5">
                <Target className="mb-3 text-brand-500" size={26} />
                <h3 className="font-bold text-navy-900">رسالتنا</h3>
                <p className="mt-1.5 text-sm leading-7 text-slate-600">
                  تقديم حلول تقنية موثوقة ومبتكرة تمكّن المؤسسات من التحول الرقمي بكفاءة.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-surface p-5">
                <Eye className="mb-3 text-brand-500" size={26} />
                <h3 className="font-bold text-navy-900">رؤيتنا</h3>
                <p className="mt-1.5 text-sm leading-7 text-slate-600">
                  أن نكون شريكاً تقنياً رائداً في مصر والمنطقة في مجالات المعلومات والاتصالات.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 md:p-10">
              <div className="bg-grid absolute inset-0 opacity-70" />
              <LogoMark className="absolute -bottom-10 -start-10 h-56 w-auto opacity-[0.07]" />
              <div className="relative grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                    <div className="font-display text-3xl font-extrabold text-white md:text-4xl" dir="ltr">
                      <Counter to={s.value} />
                      <span className="text-brand-400">{s.suffix}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* آلية العمل */}
        <div className="mt-24">
          <Reveal className="mb-12 text-center">
            <span className="text-sm font-semibold text-brand-500">آلية العمل</span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900">كيف ننفذ مشروعك؟</h2>
          </Reveal>
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute inset-x-[12%] top-8 hidden h-px bg-gradient-to-l from-brand-400/0 via-brand-400/60 to-brand-400/0 lg:block" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-400 to-brand-600 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/30">
                  {p.step}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
