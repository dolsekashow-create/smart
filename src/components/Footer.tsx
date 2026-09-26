import { ArrowUpLeft } from "lucide-react";
import { navLinks, services, site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7">{site.description}</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              الهاتف:{" "}
              <a href={site.contact.phoneHref} dir="ltr" className="text-slate-200 hover:text-brand-300">
                {site.contact.phone}
              </a>
            </li>
            <li>
              واتساب:{" "}
              <a
                href={`https://wa.me/${site.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="text-slate-200 hover:text-brand-300"
              >
                {site.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              البريد:{" "}
              <a href={`mailto:${site.contact.email}`} className="text-slate-200 hover:text-brand-300">
                {site.contact.email}
              </a>
            </li>
          </ul>
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
          <a
            href="https://www.zero--nine.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition hover:border-brand-400/50 hover:bg-brand-500/10"
          >
            <span>تم تطوير الموقع بواسطة</span>
            <span
              className="font-display font-bold tracking-wide text-white transition group-hover:text-brand-300"
              dir="ltr"
            >
              Zero Nine
            </span>
            <ArrowUpLeft
              size={14}
              className="text-brand-400 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
