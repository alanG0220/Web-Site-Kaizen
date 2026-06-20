import logoAsset from "@/assets/Kaizen gb sas fondo negro.jpg.jpeg";
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={logoAsset} alt="Kaizen GB S.A.S." className="h-16 w-auto" width={220} height={64} />
            <p className="mt-4 text-sm text-secondary-foreground/70">
              Firma de consultoría financiera y contable con más de 20 años impulsando la eficiencia de las empresas en Colombia.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#nosotros" className="hover:text-primary">Quiénes Somos</a></li>
              <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
              <li><a href="#sectores" className="hover:text-primary">Sectores</a></li>
              <li><a href="#clientes" className="hover:text-primary">Nuestros Clientes</a></li>
              <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +57 304 486 3405</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> administracion@kaizengbsas.com</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Av. 68 #75a – 50, Bogotá, Colombia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a aria-label="Facebook" href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-sidebar-border hover:bg-primary hover:border-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a aria-label="Instagram" href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-sidebar-border hover:bg-primary hover:border-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-sidebar-border hover:bg-primary hover:border-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-sidebar-border pt-6 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} Kaizen GB S.A.S. — Todos los derechos reservados.</p>
          className="mt-1">Hecho por Solnex</p>
        </div>
      </div>
    </footer>
  );
}
