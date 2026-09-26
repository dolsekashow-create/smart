# Delta Smart System — دلتا سمارت سيستم

الموقع التعريفي لشركة دلتا سمارت سيستم لخدمات تكنولوجيا المعلومات والحلول الرقمية.

**التقنيات:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Lucide Icons

## التشغيل محلياً

```bash
npm install
npm run dev
```

ثم افتح http://localhost:3000

## تعديل المحتوى

كل النصوص والبيانات (الخدمات، المجالات، الأرقام، بيانات التواصل) موجودة في ملف واحد:
`src/data/site.ts`

## الرفع على Vercel

1. ارفع المشروع على GitHub.
2. من vercel.com اختر **Add New → Project** واختر الـ repo.
3. Vercel هيتعرف على Next.js تلقائياً — اضغط **Deploy**.
4. بعد الربط بالدومين، عدّل `url` في `src/data/site.ts`.
