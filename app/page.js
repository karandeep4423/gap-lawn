import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "GAP Landscaping | Professional Lawn & Landscape Services in Texas",
  description: "GAP Landscaping offers expert lawn maintenance, landscape design, irrigation systems, and tree care services in Texas. 30+ years experience. TSTC certified. Free estimates!",
  keywords: "landscaping, lawn care, irrigation, Texas, lawn maintenance, landscape design",
};

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
}
