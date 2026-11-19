import { Bot, Code2, Paintbrush, Image, Settings2, Rocket } from "lucide-react";

export const services = [
  { slug: "web", icon: Code2, name: "تطوير المواقع", tag: "WEB DEVELOPMENT", order: "تطوير موقع ويب", description: "مواقع ويب احترافية للمحلات، الشركات، والمشاريع. سرعة فائقة وتجربة متكاملة على كل الأجهزة." },
  { slug: "logo", icon: Paintbrush, name: "تصميم لوجو", tag: "BRAND IDENTITY", order: "تصميم لوجو", description: "شعارات مميزة تعكس هوية علامتك التجارية، مصممة خصيصاً لتبقى في ذاكرة عملائك." },
  { slug: "bots", icon: Bot, name: "بوتات واتساب وتليجرام", tag: "SMART AUTOMATION", order: "بوت واتساب/تليجرام", description: "أتمتة أعمالك مع بوتات ذكية للرد الآلي، إدارة الطلبات، والخدمات اللوجستية." },
  { slug: "posts", icon: Image, name: "بوستات إعلانية", tag: "SOCIAL MEDIA DESIGN", order: "تصميم بوست إعلاني", description: "تصميم بوستات سوشيال ميديا جذابة للمحلات والمنتجات لإبراز جمالية معروضاتك." },
  { slug: "tools", icon: Settings2, name: "أدوات مخصصة", tag: "CUSTOM SOLUTIONS", order: "أدوات مخصصة/سيرفرات", description: "أدوات برمجية مخصصة وحلول سيرفرات تناسب احتياجات مشروعك وتسهّل سير أعمالك." },
  { slug: "consulting", icon: Rocket, name: "استشارات رقمية", tag: "DIGITAL CONSULTING", order: "استشارة رقمية", description: "هل تحتاج لنصيحة؟ نحن هنا لمساعدتك في التخطيط لمشروعك الرقمي والانطلاق بنجاح." },
];

export const findService = (slug: string) => services.find((s) => s.slug === slug);
