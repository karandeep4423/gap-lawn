"use client";
import React from "react";
import img from "next/image";

const LandscapeMaintenance = () => {
  return (
    <div>
      {/* Hero Section  */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4=')",
        }}
      >
        <div className="bg-black bg-opacity-50">
          <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              GAP Landscaping - Landscaping Services
            </h1>
            <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
              Transforming your yard into a stunning landscape requires more
              than just a few plants and decorative features. At GAP
              Landscaping, we specialize in turning your outdoor space into a
              work of art with our comprehensive landscaping services. Our team
              of designers and landscapers work closely with you to create a
              beautiful, functional outdoor environment that reflects your style
              and needs.
            </p>
            <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
              Get Maintenance Pricing
            </button>
          </div>
        </div>
      </section>
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
            Our Landscape Services
          </h1>

          {/* Custom Landscape Design */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Custom Landscape Design
                </h2>
                <p className="text-gray-700 text-lg">
                  Your outdoor space should be as unique as you are. Our team
                  will work with you to design a landscape that suits your
                  taste, needs, and the natural beauty of your property. From
                  choosing plants to integrating hardscaping features like
                  walkways, patios, and retaining walls, our designs are built
                  to last while enhancing your home’s curb appeal.
                </p>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Custom Landscape Design"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Flower Bed Installation & Maintenance */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="md:order-2">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Flower Bed Installation & Maintenance
                </h2>
                <p className="text-gray-700 text-lg">
                  Flower beds add vibrant colors and texture to your landscape.
                  Whether you’re looking to plant seasonal flowers or create a
                  permanent garden, we offer flower bed design, installation,
                  and maintenance services. Our experts carefully select plants
                  that thrive in your local environment and climate, ensuring
                  beautiful blooms throughout the year.
                </p>
              </div>
              <div className="md:order-1">
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Flower Bed Installation & Maintenance"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Planting & Garden Bed Installation */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Planting & Garden Bed Installation
                </h2>
                <p className="text-gray-700 text-lg">
                  Beyond flowers, we specialize in installing and maintaining
                  other garden beds, including those for shrubs, herbs,
                  vegetables, and ornamental plants. We choose plants that
                  complement your landscape’s overall aesthetic and your
                  preferences, ensuring long-term growth and beauty.
                </p>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Planting & Garden Bed Installation"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Mulching & Soil Enhancement */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="md:order-2">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Mulching & Soil Enhancement
                </h2>
                <p className="text-gray-700 text-lg">
                  Mulching provides both aesthetic value and practical benefits,
                  such as retaining soil moisture, suppressing weeds, and
                  improving plant health. We also offer soil enhancement
                  services to ensure your plants have the nutrients they need to
                  thrive.
                </p>
              </div>
              <div className="md:order-1">
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Mulching & Soil Enhancement"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Hardscaping Services */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Hardscaping Services
                </h2>
                <p className="text-gray-700 text-lg">
                  Our hardscaping services add structure and style to your
                  landscape. From decorative stone pathways and retaining walls
                  to outdoor kitchens, fire pits, and patios, we design and
                  install hardscaping features that create beautiful, functional
                  outdoor living spaces.
                </p>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Hardscaping Services"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Water Features & Irrigation Systems */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="md:order-2">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Water Features & Irrigation Systems
                </h2>
                <p className="text-gray-700 text-lg">
                  Create a soothing atmosphere in your yard with water features
                  such as fountains, ponds, and waterfalls. Additionally, we
                  offer custom irrigation system installations that ensure your
                  garden is watered efficiently, saving you time and water while
                  promoting healthy plant growth.
                </p>
              </div>
              <div className="md:order-1">
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Water Features & Irrigation Systems"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Landscape Lighting */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Landscape Lighting
                </h2>
                <p className="text-gray-700 text-lg">
                  Illuminate your outdoor space and highlight your landscape
                  features with our professional landscape lighting services.
                  Whether it’s highlighting your garden beds or creating ambient
                  lighting for your patio, we can design and install a lighting
                  system that enhances your outdoor living experience and adds
                  safety after dark.
                </p>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                  alt="Landscape Lighting"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandscapeMaintenance;
