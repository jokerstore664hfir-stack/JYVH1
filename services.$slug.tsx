import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { findService } from "@/lib/services";
import { orderUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData && findService(loaderData.slug);
    const title = s ? `${s.name} | JYVH` : "القسم غير موجود | JYVH";
    const description = s?.description ?? "القسم غير موجود.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ] };
  },
  notFoundComponent: () => <div className="service-page site-width"><h1>القسم غير موجود</h1><Button variant="electric" asChild><Link to="/">الرئيسية</Link></Button></div>,
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = findService(slug)!;
  return <div className="studio-page">
    <header className="studio-header"><div className="site-width header-inner">
      <Link to="/" className="wordmark" dir="ltr">JY<span>VH</span><i /></Link>
      <nav className="header-nav"><Link to="/">الرئيسية</Link></nav>
    </div></header>
    <main className="service-page site-width">
      <div className="service-icon"><service.icon strokeWidth={1.5} /></div>
      <div className="service-tag" dir="ltr">{service.tag}</div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <div className="service-detail-actions">
        <Button variant="electric" size="lg" onClick={() => window.open(orderUrl(service.order), "_blank", "noopener,noreferrer")}>اطلب الآن <ArrowUpLeft /></Button>
        <Button variant="ghost" size="lg" asChild><Link to="/" hash="services"><ArrowRight /> رجوع للأقسام</Link></Button>
      </div>
    </main>
  </div>;
}
