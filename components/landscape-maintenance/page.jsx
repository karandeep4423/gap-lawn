"use client";
import React from "react";
import Image from "next/image";

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
              More Time, More Beauty, Less Stress
            </h1>
            <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
              Comprehensive Landscape Maintenance Services for the Greater Waco,
              TX Area
            </p>
            <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
              Get Maintenance Pricing
            </button>
          </div>
        </div>
      </section>
      {/* Lawn Maintenance Services */}
      <section className="container mx-auto px-4 pt-20">
        <div>
          <h2 className="text-4xl font-bold text-center">
            Lawn Maintenance Services
          </h2>
          <div className="grid grid-cols-2 gap-20  mt-10">
            <img
              className="rounded-xl"
              width={400}
              height={400}
              alt="Lawn Maintenance Services"
              src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
            ></img>
            <p className="text-center text-xl mt-4 max-w-2xl mx-auto">
              A well-manicured lawn isn’t just about looks–it’s about having a
              space that feels both inviting and relaxing. You want your lawn to
              be crisp, neat, and easy to enjoy, without the stress of constant
              upkeep. Regular lawn mowing, edging, and trimming services ensure
              that your lawn stays fresh and healthy, creating a peaceful
              retreat just outside your door. With a little help, your outdoor
              space can be the perfect backdrop for moments of relaxation, play,
              and connection.
            </p>
          </div>
        </div>
      </section>
      {/* Plant & Flower Bed Maintenance */}
      <section className="container mx-auto px-4 pt-20">
        <div>
          <h2 className="text-4xl font-bold text-center">
            Plant & Flower Bed Maintenance
          </h2>
          <div className="grid grid-cols-2 gap-20 mt-10">
            <p className="text-center text-xl mt-4 max-w-2xl mx-auto">
              A well-manicured lawn isn’t just about looks–it’s about having a
              space that feels both inviting and relaxing. You want your lawn to
              be crisp, neat, and easy to enjoy, without the stress of constant
              upkeep. Regular lawn mowing, edging, and trimming services ensure
              that your lawn stays fresh and healthy, creating a peaceful
              retreat just outside your door. With a little help, your outdoor
              space can be the perfect backdrop for moments of relaxation, play,
              and connection.
            </p>
            <img
              className="rounded-xl"
              width={400}
              height={400}
              alt="Lawn Maintenance Services"
              src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
            ></img>
          </div>
        </div>
      </section>
      {/* Yard Cleanup & Seasonal Services */}
      <section className="container mx-auto px-4 py-20">
        <div>
          <h2 className="text-4xl font-bold text-center">
            Yard Cleanup & Seasonal Services
          </h2>
          <div className="grid grid-cols-2 gap-20 mt-10">
            <img
              className="rounded-xl"
              width={400}
              height={400}
              alt="Lawn Maintenance Services"
              src="https://media.istockphoto.com/id/1459952195/fr/photo/beau-jardin-printanier-avec-fleurs-et-pelouse-illustration-3d.jpg?s=612x612&w=0&k=20&c=DbDv98Isbq2txF9a79_TwAzGTktaJDygFsIEW_L_gA4="
            ></img>
            <p className="text-center text-xl mt-4 max-w-2xl mx-auto">
              A well-manicured lawn isn’t just about looks–it’s about having a
              space that feels both inviting and relaxing. You want your lawn to
              be crisp, neat, and easy to enjoy, without the stress of constant
              upkeep. Regular lawn mowing, edging, and trimming services ensure
              that your lawn stays fresh and healthy, creating a peaceful
              retreat just outside your door. With a little help, your outdoor
              space can be the perfect backdrop for moments of relaxation, play,
              and connection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandscapeMaintenance;
