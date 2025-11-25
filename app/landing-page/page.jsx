"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Check, MessageCircle } from "lucide-react";

export default function GAPLandingPage() {
  const phone = "+1 (254) 300-8273";
  const email = "info@gaplandscaping.com";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || "Thank you! We'll contact you within 15 minutes during business hours."
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try calling us directly.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              GAP
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">GAP Landscaping & Irrigation</h1>
              <p className="text-xs text-gray-600">Licensed • Insured • Trusted</p>
            </div>
          </div>
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Your Dream Yard Starts Here
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                Beautiful, Functional, and Built to Last.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Call or Text Now:</p>
                    <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-2xl font-bold text-green-600 hover:text-green-700">
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Check size={16} className="text-green-600" />
                    Free On-Site Estimates
                  </span>
                  <span className="flex items-center gap-1">
                    <Check size={16} className="text-green-600" />
                    Fast Response
                  </span>
                  <span className="flex items-center gap-1">
                    <Check size={16} className="text-green-600" />
                    Locally Trusted Team
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-lg text-gray-700">
                  Imagine stepping outside every morning to a perfect, green, and well-irrigated yard. 
                  At GAP Landscaping, we design and maintain landscapes that don't just look great — they feel great.
                </p>
                <p className="text-gray-700">
                  We bring <span className="font-semibold">30+ years of combined experience</span>, TSTC-certified technicians, 
                  and Texas-tested irrigation expertise right to your doorstep.
                </p>
              </div>

              <a
                href="#contact-form"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors shadow-lg"
              >
                👉 Get My Free Estimate Today
              </a>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Estimate</h3>
              <p className="text-gray-600 mb-6">No obligation — just helpful advice and a clear quote.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">What You Need Done</option>
                  <option>Complete Landscaping Design</option>
                  <option>Irrigation & Sprinkler Installation</option>
                  <option>Sprinkler Repair & Leak Fixes</option>
                  <option>Yard Cleanup & Maintenance</option>
                  <option>Stonework, Mulch & Sod</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <p className="flex items-center gap-2">
                      {submitStatus.type === 'success' ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <span className="text-red-600 font-bold">⚠</span>
                      )}
                      <span>{submitStatus.message}</span>
                    </p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>➡️ Request Free Estimate</>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-3">Or just call/text:</p>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-xl hover:text-green-700"
                >
                  <Phone size={20} />
                  {phone}
                </a>
                <p className="text-xs text-gray-500 mt-2">We respond within 15 minutes during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Most Popular Services</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional landscaping solutions tailored to Texas homes and businesses
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Landscaping Design",
                desc: "Tailored layouts that enhance your home's look and value.",
              },
              {
                title: "Irrigation & Sprinkler Installation",
                desc: "Smart water systems that save you money.",
              },
              {
                title: "Sprinkler Repair & Leak Fixes",
                desc: "Fast service, done right the first time.",
              },
              {
                title: "Yard Cleanup & Maintenance",
                desc: "Keep your property clean, green, and effortless all year.",
              },
              {
                title: "Stonework & Mulch Installation",
                desc: "Instant transformation at an affordable rate.",
              },
              {
                title: "Sod Installation",
                desc: "Beautiful green lawn in just one day.",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="text-green-600" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Why Homeowners Choose GAP Landscaping</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "✅", title: "Guaranteed Results", desc: "We don't leave until you love it." },
              { icon: "💰", title: "Affordable Pricing", desc: "Clear quotes, no hidden fees." },
              { icon: "🛡️", title: "Licensed & Insured", desc: "Professional service you can trust." },
              { icon: "⭐", title: "Locally Trusted", desc: "Serving Texas families for 30+ years." },
              { icon: "⚡", title: "Fast Response", desc: "Same-day or next-day estimates available." },
              { icon: "🏆", title: "Expert Technicians", desc: "TSTC-certified and experienced." },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                  <p className="text-green-100">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white text-gray-900 rounded-xl p-8 max-w-3xl mx-auto shadow-xl">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-xl italic mb-4">
              "They transformed my lawn in just two days — professional, honest, and affordable!"
            </p>
            <p className="font-semibold">— J. Martinez, Hillsboro TX</p>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Before & After</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "From Dry to Dream Lawn", desc: "Complete irrigation system installation" },
              { title: "Water-Saving Irrigation Upgrade", desc: "Smart sprinkler system with zone control" },
              { title: "Complete Front Yard Makeover", desc: "Landscaping design with stonework and sod" },
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gradient-to-br from-green-200 to-green-400 h-48 flex items-center justify-center text-6xl">
                  🌿
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                  <p className="text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-orange-500 text-white" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to See Results Fast?</h3>
          <p className="text-xl mb-8">
            We're a small, highly experienced local team — spots fill up quickly. Get your free on-site quote today and lock in our fall-season discounts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              👉 Get My Free Quote Now
            </a>
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call/Text: {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  GAP
                </div>
                <span className="font-bold text-xl">GAP Landscaping & Irrigation</span>
              </div>
              <p className="text-gray-400">
                Licensed • Insured • Trusted Locally for 30+ Years
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2 hover:text-white">
                  <Phone size={16} />
                  {phone}
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail size={16} />
                  {email}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p>Hillsboro, TX</p>
                  <p>Serving Waco & Nearby Areas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} GAP Landscaping & Irrigation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
