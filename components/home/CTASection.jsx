import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Free on-site consultation",
    "Custom plan & transparent quote",
    "No obligation estimate",
  ];

  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let our certified team design, build, and maintain your perfect landscape. Contact us today for a free consultation.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="accent" size="xl">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+12543008273">
              <Button variant="hero-outline" size="xl">
                <Phone className="w-5 h-5" />
                (254) 300-8273
              </Button>
            </a>
          </div>

          {/* Response Time */}
          <p className="mt-8 text-primary-foreground/70 text-sm">
            We respond within 15 minutes during business hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
