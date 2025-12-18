"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Send, MapPin } from "lucide-react";

const serviceOptions = [
  "Complete Landscaping Design",
  "Irrigation & Sprinkler Installation",
  "Sprinkler Repair & Leak Fixes",
  "Yard Cleanup & Maintenance",
  "Stonework, Mulch & Sod",
  "Tree & Shrub Services",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you! We'll contact you within 15 minutes during business hours.",
        });
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try calling us directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      number: "1",
      title: "Book a Visit",
      description: "Contact us to schedule a free consultation.",
    },
    {
      number: "2",
      title: "On-Site Review",
      description: "We'll walk your property and discuss your goals.",
    },
    {
      number: "3",
      title: "Custom Plan & Quote",
      description: "Receive a tailored plan and transparent estimate.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-nature-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Let&apos;s Get <span className="text-gradient">Started</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Ready to bring your outdoor vision to life? Our certified team is ready to design, build, and maintain your perfect landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                <h2 className="font-display text-2xl font-bold mb-2">Get Your Free Estimate</h2>
                <p className="text-muted-foreground mb-8">
                  No obligation — just helpful advice and a clear quote.
                </p>

                {submitStatus.message && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === "success" 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "bg-destructive/10 text-destructive border border-destructive/20"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      What You Need Done *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your project (optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any details about your yard, timeline, or specific needs..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Free Estimate
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  We respond within 15 minutes during business hours
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a
                    href="tel:+12543008273"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Call or Text Now</p>
                      <p className="text-primary text-xl font-bold">(254) 300-8273</p>
                      <p className="text-muted-foreground">(682) 413-0856</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@gaplandscaping.com"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email Us</p>
                      <p className="text-primary">info@gaplandscaping.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Business Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 7AM - 7PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Service Area</p>
                      <p className="text-muted-foreground">Central Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold mb-6">How It Works</h3>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-foreground/90 text-lg mb-4">
            Let GAP Landscaping put our 30+ years of experience and TSTC-certified skills to work for you
          </p>
          <p className="text-primary-foreground font-display text-2xl font-bold">
            Delivering quality, value, and care you can count on.
          </p>
        </div>
      </section>
    </Layout>
  );
}
