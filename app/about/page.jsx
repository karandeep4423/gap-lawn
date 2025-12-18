import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Shield, Target, Leaf, ThumbsUp, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | GAP Landscaping - TSTC Certified Landscape Experts",
  description: "Learn about GAP Landscaping's 30+ years of combined experience, TSTC certification, and commitment to quality lawn and landscape services in Texas.",
};

const certifications = [
  {
    icon: GraduationCap,
    title: "TSTC Graduate",
    description: "Texas State Technical College - Golf Course Turfgrass Management",
  },
  {
    icon: Shield,
    title: "TCEQ Licensed",
    description: "Texas Commission on Environmental Quality Licensed Irrigator",
  },
  {
    icon: Award,
    title: "30+ Years Experience",
    description: "Combined team experience in professional landscaping",
  },
];

const values = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Every project reflects our commitment to quality and attention to detail.",
  },
  {
    icon: Target,
    title: "Integrity First",
    description: "Honest communication and transparent pricing in every interaction.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Eco-friendly solutions that protect your property and the environment.",
  },
  {
    icon: ThumbsUp,
    title: "Client Satisfaction",
    description: "We don't stop until you're completely happy with our work.",
  },
];

const expertise = [
  "Various types of turf grass and their uses",
  "Horticulture and plant science",
  "Arboriculture (professional tree care)",
  "Landscape maintenance and design",
  "Irrigation system design and repair",
  "Soil science and fertilization",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-nature-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Experience, Knowledge & <span className="text-gradient">Certification</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              At GAP Landscaping, our team brings over 30 years of combined experience in professional landscaping and irrigation. We don&apos;t just maintain properties — we build lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/about-team.jpg"
                  alt="GAP Landscaping Team"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-primary-foreground font-display text-2xl font-bold">
                    Your Trusted Local Team
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Certified Professionals You Can Trust
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We are proudly trained and certified by Texas State Technical College (TSTC) — ensuring every project meets high standards of quality, safety, and efficiency.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-semibold text-xl">Our Expertise Includes:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button variant="default" size="lg">
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Credentials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Our Certifications & <span className="text-gradient">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6">
              What Drives Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              To create and maintain outdoor spaces that reflect our clients&apos; vision — through craftsmanship, integrity, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group text-center p-6 rounded-2xl hover:bg-card hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Let Us Put Our Experience to Work for You
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Delivering quality, value, and care you can count on — backed by 30+ years of expertise and TSTC-certified skills.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="xl">
              Get Your Free Estimate <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
