import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import {
  ClipboardCheck, Calculator, Receipt, Wallet, Users, TrendingUp, Package, BarChart3,
  Award, HeartHandshake, Target, Sparkles, ArrowRight, Phone, MapPin, Mail, MessageCircle,
  UtensilsCrossed, Wine, Hotel, Building2, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Kaizen GB S.A.S. — Auditoría, Contabilidad y Asesoría Financiera en Bogotá" },
      { name: "description", content: "Más de 20 años impulsando la eficiencia financiera de las empresas. Auditoría, contabilidad, control de costos, gestión tributaria y consultoría empresarial." },
      { property: "og:title", content: "Kaizen GB S.A.S. — Eficiencia Financiera" },
      { property: "og:description", content: "Expertos en auditoría, contabilidad, control de costos y asesoría empresarial en Colombia." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Kaizen GB S.A.S.",
        description: "Firma de auditoría, contabilidad y asesoría financiera con más de 20 años de experiencia.",
        telephone: "+57 304 486 3405",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. 68 #75a – 50",
          addressLocality: "Bogotá, Colombia",
          addressCountry: "CO",
        },
        areaServed: "CO",
      }),
    }],
  }),
  component: Home,
}));

const services = [
  { icon: ClipboardCheck, title: "Auditoría Contable", desc: "Revisión integral de estados financieros con rigor técnico y cumplimiento normativo NIIF." },
  { icon: Calculator, title: "Auditoría y Control de Costos", desc: "Análisis detallado de estructura de costos para identificar desviaciones y oportunidades de mejora." },
  { icon: Receipt, title: "Administración Contable", desc: "Manejo completo y organizado de la contabilidad bajo estándares colombianos." },
  { icon: Wallet, title: "Gestión Tributaria", desc: "Cumplimiento, planeación tributaria y optimización fiscal según la normativa DIAN." },
  { icon: Users, title: "Manejo de Nómina", desc: "Liquidación de nómina, prestaciones sociales y aportes parafiscales con total exactitud." },
  { icon: TrendingUp, title: "Presupuestos y Análisis Financiero", desc: "Diseño de presupuestos, proyecciones y análisis para decisiones informadas." },
  { icon: Package, title: "Control de Inventarios", desc: "Implementación de sistemas de control para reducir mermas y optimizar capital de trabajo." },
  { icon: BarChart3, title: "Informes Financieros y Estadísticos", desc: "Reportes claros y oportunos que reflejan el desempeño real de su negocio." },
];

const sectors = [
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Wine, label: "Bares" },
  { icon: Hotel, label: "Hoteles" },
  { icon: Building2, label: "Otros Sectores" },
];

const reasons = [
  { icon: Award, title: "+20 años de experiencia", desc: "Trayectoria sólida atendiendo empresas de diversos sectores en Colombia." },
  { icon: HeartHandshake, title: "Atención personalizada", desc: "Cada cliente es único. Diseñamos soluciones a medida para cada operación." },
  { icon: Target, title: "Especialización en costos", desc: "Expertos en estructuras de costos para sectores de alta rotación operativa." },
  { icon: TrendingUp, title: "Optimización financiera", desc: "Procesos enfocados en maximizar rentabilidad y eficiencia." },
  { icon: BarChart3, title: "Apoyo en decisiones", desc: "Información clara y oportuna para que la gerencia decida con confianza." },
  { icon: Sparkles, title: "Filosofía Kaizen", desc: "Mejora continua aplicada a cada proceso, cada reporte, cada relación." },
];

// CLIENTES — reemplaza los src="" con las rutas reales de los logos en src/assets/
// Ejemplo: logo: new URL("@/assets/logo-cliente1.png", import.meta.url).href
const clients = [
  { name: "Cliente 1", logo: "" },
  { name: "Cliente 2", logo: "" },
  { name: "Cliente 3", logo: "" },
  { name: "Cliente 4", logo: "" },
  { name: "Cliente 5", logo: "" },
  { name: "Cliente 6", logo: "" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Sectors />
        <Clients />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  const waLink = `https://wa.me/573044863405?text=${encodeURIComponent("Hola Kaizen GB, quisiera solicitar asesoría.")}`;
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Firma de Consultoría Financiera
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            Más de <span className="text-primary">20 años</span> impulsando la eficiencia financiera de las empresas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75 md:text-xl">
            Expertos en auditoría, contabilidad, control de costos y asesoría empresarial.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90">
              Solicitar Asesoría <ArrowRight className="h-4 w-4" />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-secondary-foreground/30 px-7 py-3.5 font-semibold text-secondary-foreground transition-all hover:bg-secondary-foreground hover:text-secondary">
              <MessageCircle className="h-4 w-4" /> Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "+20", label: "Años de experiencia" },
    { value: "100%", label: "Cumplimiento normativo" },
    { value: "+25", label: "Empresas atendidas" },
    { value: "24/7", label: "Soporte disponible" },
  ];
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tag}</div>
      <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Quiénes Somos</div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Filosofía <span className="text-primary">Kaizen</span>: mejora continua aplicada a cada cifra.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              En <strong className="text-foreground">Kaizen GB S.A.S.</strong> creemos que la excelencia financiera nace
              de pequeños cambios sostenidos en el tiempo. Inspirados en la filosofía japonesa <em>Kaizen</em>, aplicamos
              mejora continua a cada proceso contable, cada auditoría y cada decisión estratégica que acompañamos.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Más de dos décadas asesorando a empresas colombianas nos han enseñado que la confianza se construye con
              <strong className="text-foreground"> profesionalismo, transparencia y resultados tangibles</strong>.
            </p>
            <ul className="mt-8 space-y-3">
              {["Profesionalismo certificado", "Confianza y transparencia", "Eficiencia operativa", "Calidad garantizada"].map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { v: "Misión", t: "Brindar servicios contables y financieros de alto nivel que impulsen el crecimiento sostenible de nuestros clientes." },
                  { v: "Visión", t: "Ser la firma de referencia en Colombia en auditoría, control de costos y asesoría financiera." },
                  { v: "Valores", t: "Integridad, compromiso, excelencia técnica y orientación a resultados." },
                  { v: "Método", t: "Procesos basados en mejora continua, tecnología y atención cercana al cliente." },
                ].map((b) => (
                  <div key={b.v} className="rounded-lg border border-border bg-background p-5">
                    <div className="font-display text-xl font-bold text-primary">{b.v}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{b.t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          tag="Nuestros Servicios"
          title="Soluciones financieras integrales"
          subtitle="Una suite completa de servicios diseñada para optimizar la gestión financiera, contable y administrativa de su empresa."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectores" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          tag="Sectores Atendidos"
          title="Experiencia comprobada en industrias clave"
          subtitle="Nos especializamos en sectores con alta operatividad donde el control de costos marca la diferencia."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {sectors.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-[var(--shadow-card)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <div className="text-sm font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clientes" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          tag="Nuestros Clientes"
          title="Empresas que confían en nosotros"
          subtitle="Trabajamos con más de 25 empresas en Bogotá, acompañándolas en su gestión financiera y contable."
        />
        <div className="mt-14 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[var(--shadow-card)]">
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
              ) : (
                <div className="flex h-12 w-full items-center justify-center text-xs text-muted-foreground text-center">
                  {c.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="porque" className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">¿Por qué elegirnos?</div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">La diferencia Kaizen GB</h2>
          <p className="mt-4 text-secondary-foreground/70 md:text-lg">
            Combinamos rigor técnico, atención cercana y filosofía de mejora continua.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-sidebar-border bg-sidebar-accent/50 p-7 backdrop-blur transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-secondary-foreground/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Kaizen GB, soy ${form.name}. ${form.message}\n\nEmail: ${form.email}\nTel: ${form.phone}`;
    window.open(`https://wa.me/573044863405?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader tag="Contáctenos" title="Hablemos de su empresa" subtitle="Agende una asesoría sin costo. Le responderemos en menos de 24 horas." />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Teléfono", value: "+57 304 486 3405", href: "tel:+573044863405" },
              { icon: MessageCircle, title: "WhatsApp", value: "Escríbanos ahora", href: "https://wa.me/573044863405" },
              { icon: Mail, title: "Correo Electrónico", value: "administracion@kaizengbsas.com", href: "mailto:administracion@kaizengbsas.com" },
              { icon: MapPin, title: "Sede Principal", value: "Av. 68 #75a – 50, Bogotá, Colombia" },
            ].map((c) => (
              <a key={c.title} href={c.href ?? "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  <div className="mt-0.5 font-semibold">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Ubicación Kaizen GB S.A.S."
                src="https://www.google.com/maps?q=Av.+68+%2375a-50,+Bogota,+Colombia&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-2xl font-bold">Solicite su asesoría</h3>
            <p className="mt-1 text-sm text-muted-foreground">Complete el formulario y nuestro equipo se pondrá en contacto.</p>
            <div className="mt-6 space-y-4">
              <Field label="Nombre completo" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required maxLength={100} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Correo electrónico" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required maxLength={120} />
                <Field label="Teléfono de contacto" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required maxLength={20} />
              </div>
              <div>
                <label className="text-sm font-medium">Mensaje</label>
                <textarea
                  required
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  placeholder="Cuéntenos sobre su empresa y necesidades..."
                />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90">
                Enviar Solicitud <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <p className="text-sm text-primary">¡Gracias! Lo redirigimos a WhatsApp para completar el envío.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required, maxLength }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
