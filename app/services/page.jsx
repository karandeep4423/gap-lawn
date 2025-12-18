import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Scissors, PenTool, Flower2, TreeDeciduous, Droplets } from "lucide-react";

export const metadata = {
  title: "Our Services | GAP Landscaping - Lawn & Landscape Experts",
  description: "Explore GAP Landscaping's professional services: lawn maintenance, landscape design, irrigation systems, tree care, and fertilization. TSTC certified experts in Texas.",
};

const services = [
  {
    id: "maintenance",
    icon: Scissors,
    title: "Landscape Maintenance",
    subtitle: "Keep Your Property Pristine",
    description: "Keep your property neat, healthy, and inviting throughout every season. Our maintenance plans include mowing, edging, pruning, trimming, and seasonal cleanup — handled with precision and professionalism.",
    image: "/service-maintenance.jpg",
    features: [
      "Weekly or bi-weekly mowing",
      "Precision edging and trimming",
      "Hedge and shrub pruning",
      "Seasonal cleanup services",
      "Debris removal",
      "Property walkthrough inspections",
    ],
  },
  {
    id: "design",
    icon: PenTool,
    title: "Landscape Design & Installation",
    subtitle: "Create Your Dream Outdoor Space",
    description: "From new builds to backyard upgrades, we design and install beautiful, functional landscapes tailored to your vision. Our team combines creativity and experience to build outdoor spaces that last.",
    image: "/service-design.jpg",
    features: [
      "Custom landscape planning",
      "Hardscape installation",
      "Planting beds and gardens",
      "Decorative stonework",
      "Mulch and ground cover",
      "Complete outdoor transformations",
    ],
  },
  {
    id: "lawncare",
    icon: Flower2,
    title: "Lawn Care & Fertilization",
    subtitle: "Grow a Healthy, Green Lawn",
    description: "We know what it takes to grow a healthy, green lawn. Our customized care programs include fertilization, aeration, soil improvement, and weed control — all designed for long-term results.",
    image: "/service-lawncare.jpg",
    features: [
      "Custom fertilization programs",
      "Core aeration services",
      "Soil testing and improvement",
      "Weed prevention and control",
      "Overseeding",
      "Lawn health assessments",
    ],
  },
  {
    id: "trees",
    icon: TreeDeciduous,
    title: "Tree & Shrub Services",
    subtitle: "Expert Care for Your Trees",
    description: "Healthy trees and shrubs are essential for a great landscape. We offer trimming, pruning, shaping, stump grinding, and removal — always with safety and property care in mind.",
    image: "/service-trees.jpg",
    features: [
      "Professional tree trimming",
      "Artistic shrub shaping",
      "Crown reduction and thinning",
      "Stump grinding and removal",
      "Storm damage cleanup",
      "Health assessments",
    ],
  },
  {
    id: "irrigation",
    icon: Droplets,
    title: "Irrigation Systems",
    subtitle: "Smart Watering Solutions",
    description: "Efficient irrigation saves time, water, and money. We design, install, and repair irrigation systems that provide consistent watering and support healthy growth year-round.",
    image: "/service-irrigation.jpg",
    features: [
      "Custom system design",
      "Professional installation",
      "Leak detection and repair",
      "Sprinkler head adjustments",
      "Seasonal system maintenance",
      "Smart controller upgrades",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-nature-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Professional <span className="text-gradient">Landscaping Services</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              From routine maintenance to complete landscape transformations, our TSTC-certified team delivers quality results tailored to Texas properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                      {service.subtitle}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="default" size="lg" className="mt-4">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your property&apos;s needs.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="xl">
              Request Free Estimate <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
