import { navLinks, services, site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7">{site.description}</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">روابط سريعة</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-brand-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">خدماتنا</h3>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition hover:text-brand-300">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {site.nameAr}. جميع الحقوق محفوظة.</p>
          <p className="font-display" dir="ltr">
            {site.nameEn} — {site.taglineEn}
          </p>
        </div>
      </div>
    </footer>
  );
}
