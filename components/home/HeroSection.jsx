import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "Free On-Site Estimates",
    "Fast Response",
    "Locally Trusted Team",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-landscape.jpg"
          alt="Beautiful landscaped backyard with irrigation system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              30+ Years Combined Experience
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up">
              Your Dream Yard <br />
              <span className="text-primary">Starts Here</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Beautiful, Functional, and Built to Last. At GAP Landscaping, we design and maintain landscapes that don&apos;t just look great — they feel great.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact">
              <Button variant="hero" size="xl">
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:+12543008273">
              <Button variant="hero-outline" size="xl">
                <Phone className="w-5 h-5" />
                (254) 300-8273
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/70 text-sm mb-3">Certified & Licensed:</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm backdrop-blur-sm border border-primary-foreground/20">
                TSTC Graduate
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm backdrop-blur-sm border border-primary-foreground/20">
                TCEQ Licensed
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm backdrop-blur-sm border border-primary-foreground/20">
                Turfgrass Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
