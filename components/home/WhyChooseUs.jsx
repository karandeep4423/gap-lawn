import { Award, Shield, Leaf, ThumbsUp, DollarSign, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "30+ Years Experience",
    description: "A trusted team with deep industry knowledge and proven results.",
  },
  {
    icon: Shield,
    title: "TSTC Certified",
    description: "Formally trained professionals in landscape and irrigation systems.",
  },
  {
    icon: HeartHandshake,
    title: "Custom Solutions",
    description: "Every yard is unique; our plans are tailored to your specific needs.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear quotes, no hidden fees, and no surprises on your bill.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description: "Safe products and sustainable techniques for a healthier environment.",
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Results",
    description: "We don't stop until you're 100% satisfied with our work.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            The GAP Landscaping <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine experience, education, and dedication to deliver exceptional results on every project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
