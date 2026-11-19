import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ArrowDown, ArrowUpLeft, Phone, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jyvh-logo.png.asset.json";
import { orderUrl, phones } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JYVH | تصميم، تطوير، ابتكار" },
    { name: "description", content: "شريكك الإبداعي لتطوير المواقع وتصميم الهويات والبوتات والحلول البرمجية. اطلب خدمتك من JYVH عبر واتساب." },
    { property: "og:title", content: "JYVH | تصميم، تطوير، ابتكار" },
    { property: "og:description", content: "نحوّل أفكارك إلى واقع رقمي فخم. اكتشف خدمات التصميم والتطوير وتواصل معنا مباشرة." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function order(service: string) {
  window.open(orderUrl(service), "_blank", "noopener,noreferrer");
}

function Index() {
  return <div className="studio-page">
    <header className="studio-header">
      <div className="site-width header-inner">
        <a href="#" className="wordmark" aria-label="JYVH الرئيسية" dir="ltr">JY<span>VH</span><i /></a>
        <nav aria-label="القائمة الرئيسية" className="header-nav">
          <a href="#services">خدماتنا</a><a href="#contact">تواصل معنا</a>
        </nav>
        <span className="header-motto" dir="ltr">DESIGN <b>•</b> DEVELOP <b>•</b> INNOVATE</span>
      </div>
    </header>

    <main>
      <section className="studio-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-logo"><img src={logo.url} alt="شعار JYVH للتصميم والتطوير" fetchPriority="high" /></div>
          <div className="eyebrow"><span /> إبداع بلا حدود. حلول تصنع الفرق.</div>
          <h1>مرحباً بك في <span dir="ltr">JYVH</span></h1>
          <p>شريكك الإبداعي لبناء المواقع، تصميم الهويات، وحلول البرمجة المتكاملة.<br className="desktop-break" /> نحول أفكارك إلى واقع رقمي فخم.</p>
          <Button variant="electric" size="lg" asChild><a href="#services">اكتشف خدماتنا <ArrowDown /></a></Button>
          <div className="hero-signature" dir="ltr"><span /> DESIGN. DEVELOP. MAKE A DIFFERENCE. <span /></div>
        </div>
      </section>

      <section id="services" className="services-section site-width">
        <div className="section-heading">
          <div><div className="section-kicker" dir="ltr">WHAT WE DO <span> / 01</span></div><h2>كل ما يحتاجه <span>مشروعك.</span></h2></div>
          <p>من الفكرة الأولى إلى آخر تفصيلة،<br /> نصنع لك حضوراً رقمياً يليق بطموحك.</p>
        </div>
        <nav className="service-big-links" aria-label="أقسام الخدمات">
          {services.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="service-big-link">
            <service.icon strokeWidth={1.5} /><span>{service.name}</span><ArrowUpLeft />
          </Link>)}
        </nav>
      </section>

      <section id="contact" className="contact-section">
        <div className="site-width contact-inner">
          <div className="contact-heading"><div className="section-kicker" dir="ltr">LET’S CREATE <span> / 02</span></div><h2>فكرتك تستحق <span>أن ترى النور.</span></h2><p>تواصل معنا مباشرة، ولنبدأ مشروعك القادم.</p></div>
          <Button variant="electric" size="lg" onClick={() => order("بدء مشروع جديد")}><MessageCircle /> تحدث معنا على واتساب <ArrowUpLeft /></Button>
          <div className="contact-numbers">{phones.map((phone) => <a key={phone} href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer"><Phone size={15} /><span dir="ltr">0{phone.slice(2)}</span><ArrowUpLeft size={14} /></a>)}</div>
        </div>
      </section>
    </main>
    <footer className="studio-footer site-width"><a href="#" className="wordmark" dir="ltr">JY<span>VH</span></a><p dir="ltr">© 2026 JYVH. All rights reserved.</p><span><Sparkles size={14} /> صُنع بشغف. صُمم ليلهم.</span></footer>
  </div>;
}
