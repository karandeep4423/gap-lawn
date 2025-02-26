"use client";
import React from "react";

const services = [
  {
    title: "Tree Trimming & Pruning",
    description:
      "Proper tree trimming is essential for maintaining the health and appearance of your trees. Our team of professionals will assess your trees and trim them to remove dead or damaged branches, improve structure, and ensure safety. Regular pruning helps your trees grow stronger, enhances their shape, and prevents potential hazards.",
    img: "https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4=",
  },
  {
    title: "Tree Removal",
    description:
      "Sometimes, tree removal becomes necessary due to disease, damage, or safety concerns. Our tree removal experts ensure that your tree is taken down safely and efficiently. We utilize the right equipment and techniques to remove trees without causing damage to your property.",
    img: "https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4=",
  },
  {
    title: "Tree Planting & Transplanting",
    description:
      "If you’re looking to add a new tree to your landscape or transplant a tree that’s outgrowing its space, our team will help you select the right species and plant it properly. Proper planting ensures long-term growth, health, and beauty for your trees.",
    img: "https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4=",
  },
  {
    title: "Stump Grinding & Removal",
    description:
      "After tree removal, we also offer stump grinding and removal services. Removing the stump not only improves the aesthetics of your yard but also prevents potential hazards like tripping or pests. We use professional grinders to remove stumps to below ground level, allowing for smooth, usable land.",
    img: "https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4=",
  },
];

const TreeCare = () => {
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
              GAP Landscaping - Tree Trimming, Removal, and Planting Services
            </h1>
            <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
              Trees are a vital part of your landscape, providing shade, beauty,
              and environmental benefits. However, they require expert care to
              ensure they stay healthy and safe. GAP Landscaping offers
              specialized tree services, including trimming, removal, and
              planting.
            </p>
            <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
              Get Tree Services Pricing
            </button>
          </div>
        </div>
      </section>
      {/* services section */}
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
            Our Tree Services
          </h1>
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md mb-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <img
                      src={service.img}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full md:w-1/2 object-cover rounded-lg"
                    />
                    <div className="mt-4 md:mt-0 md:pl-8 md:w-1/2">
                      <h2 className="text-3xl font-bold text-green-700 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4 md:mb-0 md:pr-8 md:w-1/2">
                      <h2 className="text-3xl font-bold text-green-700 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <img
                      src={service.img}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full md:w-1/2 object-cover rounded-lg"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreeCare;
