"use client";
import React from "react";

const LawnCare = () => {
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
              GAP Landscaping - Lawn Care Services
            </h1>
            <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
              At GAP Landscaping, we understand that a beautiful, healthy lawn
              is essential for creating an inviting outdoor space. Our expert
              team offers a full range of lawn care services, tailored to meet
              the unique needs of your lawn. Whether it is regular upkeep or
              one-time treatments, we are here to ensure your lawn looks its
              best year-round.
            </p>
            <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
              Get Lawn Pricing
            </button>
          </div>
        </div>
      </section>
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
            Our Lawn Care Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lawn Mowing */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Lawn Mowing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Lawn Mowing
                </h2>
                <p className="text-gray-700">
                  Our lawn mowing service isn’t just about cutting grass — it’s
                  about giving your lawn the attention it deserves. We use
                  professional-grade mowers to provide a clean, consistent cut
                  that encourages healthy grass growth. We adjust the cutting
                  height based on grass type and weather conditions to ensure
                  your lawn looks sharp while promoting robust growth.
                </p>
              </div>
            </div>

            {/* Trimming & Edging */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Trimming & Edging"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Trimming & Edging
                </h2>
                <p className="text-gray-700">
                  Sharp, well-defined edges can make a world of difference in
                  the appearance of your yard. We trim around your lawn, flower
                  beds, fences, and walkways, and perform precise edging to
                  create clean lines that highlight the beauty of your
                  landscape.
                </p>
              </div>
            </div>

            {/* Leaf Blowing & Cleanup */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Leaf Blowing & Cleanup"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Leaf Blowing & Cleanup
                </h2>
                <p className="text-gray-700">
                  Leaves and debris can quickly take over your yard, especially
                  during the fall and spring seasons. Our leaf blowing and
                  cleanup service ensures that your outdoor spaces stay neat and
                  clutter-free. We remove fallen leaves, twigs, and other debris
                  from your lawn, driveway, patio, and garden beds, helping to
                  prevent lawn damage and creating a polished look.
                </p>
              </div>
            </div>

            {/* Fertilization & Weed Control */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Fertilization & Weed Control"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Fertilization & Weed Control
                </h2>
                <p className="text-gray-700">
                  A healthy, lush lawn needs the right balance of nutrients. Our
                  fertilization service provides your lawn with the essential
                  nutrients it needs to thrive, promoting strong grass roots and
                  vibrant growth. We also offer comprehensive weed control
                  solutions to eliminate pesky weeds and keep your lawn looking
                  pristine. Our team uses eco-friendly products that are safe
                  for your family, pets, and the environment.
                </p>
              </div>
            </div>

            {/* Lawn Aeration */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Lawn Aeration"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Lawn Aeration
                </h2>
                <p className="text-gray-700">
                  Is your lawn looking a bit tired or struggling with drainage?
                  Lawn aeration is the key! Aerating your lawn involves
                  perforating the soil to allow air, water, and nutrients to
                  reach the grassroots. This is a vital service to reduce soil
                  compaction, promote root growth, and improve overall lawn
                  health. Aeration helps your lawn breathe, leading to a
                  thicker, more vibrant lawn.
                </p>
              </div>
            </div>

            {/* Overseeding */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Overseeding"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Overseeding
                </h2>
                <p className="text-gray-700">
                  Overseeding is an effective way to revitalize thin or bare
                  patches in your lawn. By spreading grass seed over existing
                  turf, we can introduce new grass varieties that enhance your
                  lawn’s density and resilience, leading to a healthier lawn in
                  the long term. This service is particularly beneficial in
                  areas affected by drought or wear and tear from foot traffic.
                </p>
              </div>
            </div>

            {/* Mulching */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Mulching"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Mulching
                </h2>
                <p className="text-gray-700">
                  Mulch is not only decorative; it’s also functional! We offer
                  mulching services to improve the health of your garden beds.
                  Mulch helps retain moisture, suppress weeds, and protect plant
                  roots during extreme temperatures. Our team will apply mulch
                  in the right amounts and areas, giving your garden beds a
                  polished, professional look.
                </p>
              </div>
            </div>

            {/* Seasonal Lawn Maintenance */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Seasonal Lawn Maintenance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Seasonal Lawn Maintenance
                </h2>
                <p className="text-gray-700">
                  Texas weather can be unpredictable, and different seasons call
                  for different lawn care needs. Whether it’s preparing your
                  lawn for the scorching summer heat or ensuring it’s ready for
                  the cool winter months, we offer seasonal lawn maintenance to
                  keep your lawn in peak condition throughout the year.
                </p>
              </div>
            </div>

            {/* Sod Installation */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
                alt="Sod Installation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Sod Installation
                </h2>
                <p className="text-gray-700">
                  If your lawn has areas that are too damaged to recover with
                  overseeding, sod installation is the solution. We provide
                  fresh sod installation to give your lawn an instant makeover.
                  Whether you're looking to cover large areas or fix specific
                  patches, our team ensures a smooth and healthy sod
                  installation for a lush, green lawn in no time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawnCare;
