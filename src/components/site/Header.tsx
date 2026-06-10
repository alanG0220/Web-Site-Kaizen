import { useState } from "react";
import logoAsset from "@/assets/Kaizen gb sas fondo negro.jpg.jpeg";
import { Menu, X } from "lucide-react";
const links = [
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#porque", label: "¿Por qué nosotros?" },
  { href: "#contacto", label: "Contacto" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-sidebar-border bg-secondary/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoAsset} alt="Kaizen GB S.A.S." className="h-12 w-auto md:h-14" width={200} height={56} />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        
          href="#contacto"
          className="hidden lg:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
        >
          Solicitar Asesoría
        </a>
        <button aria-label="Abrir menú" onClick={() => setOpen(!open)} className="lg:hidden text-secondary-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-sidebar-border bg-secondary px-4 py-4">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-secondary-foreground/90 py-1">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Solicitar Asesoría
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
