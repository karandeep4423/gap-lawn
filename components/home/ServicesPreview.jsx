import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flower2, Droplets, TreeDeciduous, Scissors, PenTool } from "lucide-react";

const services = [
  {
    title: "Landscape Maintenance",
    description: "Mowing, edging, pruning, trimming, and seasonal cleanup — handled with precision.",
    icon: Scissors,
    image: "/service-maintenance.jpg",
  },
  {
    title: "Landscape Design & Installation",
    description: "Custom designs and installations tailored to your vision. Beautiful and functional.",
    icon: PenTool,
    image: "/service-design.jpg",
  },
  {
    title: "Lawn Care & Fertilization",
    description: "Fertilization, aeration, soil improvement, and weed control for lasting results.",
    icon: Flower2,
    image: "/service-lawncare.jpg",
  },
  {
    title: "Tree & Shrub Services",
    description: "Trimming, pruning, shaping, stump grinding, and removal with expert care.",
    icon: TreeDeciduous,
    image: "/service-trees.jpg",
  },
  {
    title: "Irrigation Systems",
    description: "Design, installation, and repair of efficient watering systems that save water.",
    icon: Droplets,
    image: "/service-irrigation.jpg",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-nature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Professional Landscaping <br className="hidden sm:block" />
            <span className="text-gradient">Solutions for Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to complete landscape transformations, we bring expertise and care to every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/services">
            <Button variant="default" size="lg">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
