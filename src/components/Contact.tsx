"use client";

import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { images, services, site } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const input =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

export function Contact() {
  const [sent, setSent] = useState(false);

  // بدون سيرفر: الرسالة بتتفتح في واتساب جاهزة للإرسال
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `الاسم: ${f.get("name")}`,
      `الهاتف: ${f.get("phone")}`,
      `الخدمة: ${f.get("service")}`,
      `التفاصيل: ${f.get("message")}`,
    ].join("\n");
    window.open(
      `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  const info = [
    { Icon: MapPin, label: "العنوان", value: site.contact.address },
    { Icon: Phone, label: "الهاتف", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}`, ltr: true },
    { Icon: Mail, label: "البريد الإلكتروني", value: site.contact.email, href: `mailto:${site.contact.email}`, ltr: true },
  ];

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="جاهزين نبدأ مشروعك"
          text="احكِ لنا عن فكرتك أو احتياجك، وفريقنا هيتواصل معاك في أسرع وقت."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy-950 p-8 text-white">
              <Image src={images.contact} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-950/85 to-navy-950" />
              <div className="bg-grid absolute inset-0 opacity-50" />
              <div className="relative">
                <h3 className="text-xl font-bold">بيانات التواصل</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  يسعدنا استقبال استفساراتك وزيارتك في مقر الشركة.
                </p>
                <ul className="mt-8 space-y-6">
                  {info.map(({ Icon, label, value, href, ltr }) => (
                    <li key={label} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="text-xs text-slate-400">{label}</p>
                        {href ? (
                          <a href={href} dir={ltr ? "ltr" : undefined} className="mt-0.5 block font-semibold hover:text-brand-300">
                            {value}
                          </a>
                        ) : (
                          <p className="mt-0.5 font-semibold leading-7">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold transition hover:bg-emerald-600"
                >
                  <MessageCircle size={20} />
                  راسلنا على واتساب
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-navy-900">الاسم</span>
                  <input name="name" required className={input} placeholder="اسمك بالكامل" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-navy-900">رقم الهاتف</span>
                  <input name="phone" type="tel" required dir="ltr" className={`${input} text-right`} placeholder="01xxxxxxxxx" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-navy-900">الخدمة المطلوبة</span>
                  <select name="service" className={input} defaultValue={services[0].title}>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>أخرى</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-navy-900">تفاصيل المشروع</span>
                  <textarea name="message" required rows={5} className={`${input} resize-none`} placeholder="اكتب نبذة عن احتياجك..." />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 sm:w-auto"
              >
                إرسال الطلب
                <Send size={18} className="-scale-x-100" />
              </button>
              {sent && (
                <p className="mt-4 text-sm font-semibold text-emerald-600">
                  تم تجهيز رسالتك في واتساب — اضغط إرسال هناك لإتمام الطلب.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
