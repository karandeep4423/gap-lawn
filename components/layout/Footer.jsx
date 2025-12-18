import Link from "next/link";
import { Phone, Mail, Clock, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">GAP Landscaping</h3>
                <p className="text-sm text-background/60">Licensed • Trusted</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Transforming Texas landscapes with 30+ years of combined experience and TSTC-certified expertise.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">TCEQ Licensed Irrigator</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Landscape Maintenance",
                "Landscape Design",
                "Lawn Care & Fertilization",
                "Tree & Shrub Services",
                "Irrigation Systems",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12543008273"
                  className="flex items-start gap-3 text-background/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>(254) 300-8273</p>
                    <p>(682) 413-0856</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gaplandscaping.com"
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@gaplandscaping.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Sat: 7AM - 7PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} GAP Landscaping. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>Serving Central Texas</span>
              <span>•</span>
              <span>TSTC Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
