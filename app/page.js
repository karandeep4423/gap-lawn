"use client";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
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
              Your Outdoor Living Areas, the Place to Be
            </h1>
            <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
              Get the backyard oasis and head-turning curb appeal you’ve always
              wanted.
            </p>
            <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center">Our <span className="text-green-600">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="border-2 flex flex-col justify-center items-center border-gray-200 p-8 rounded-2xl">
            <Image
              src="/services/landscape-maintenance.svg"
              alt="landscape maintenance"
              width={100}
              height={100}
              className=""
            />
            <h3 className="text-3xl font-bold mt-8">Landscape Maintenance</h3>
            <p className="mt-4">
              Our lawn care and maintenance services are designed to keep your
              property looking its best. We offer mowing, trimming, edging, and
              more.
            </p>
          </div>
          <div className="border-2 flex flex-col justify-center items-center border-gray-200 p-8 rounded-2xl">
            <Image
              src="/services/landscape-design.svg"
              alt="landscape design"
              width={100}
              height={100}
              className=""
            />
            <h3 className="text-3xl font-bold mt-8">Landscape Design/Build</h3>
            <p className="mt-4">
              Our lawn care and maintenance services are designed to keep your
              property looking its best. We offer mowing, trimming, edging, and
              more.
            </p>
          </div>
          <div className="border-2 flex flex-col justify-center items-center border-gray-200 p-8 rounded-2xl">
            <Image
              src="/services/lawn-care.svg"
              alt="lawn care services"
              width={100}
              height={100}
              className=""
            />
            <h3 className="text-3xl font-bold mt-8">Lawn Care Services</h3>
            <p className="mt-4">
              Our lawn care and maintenance services are designed to keep your
              property looking its best. We offer mowing, trimming, edging, and
              more.
            </p>
          </div>
          <div className="border-2 flex flex-col justify-center items-center border-gray-200 p-8 rounded-2xl">
            <Image
              src="/services/trees-care.svg"
              alt="trees care services"
              width={100}
              height={100}
              className=""
            />
            <h3 className="text-3xl font-bold mt-8">Tree Care Services</h3>
            <p className="mt-4">
              Our lawn care and maintenance services are designed to keep your
              property looking its best. We offer mowing, trimming, edging, and
              more.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Green Ackors Landscaping & Irrigation?
          </h2>
          <p className="mb-6 max-w-3xl mx-auto">
            Be confident. Be proud. We know there are many options when hiring a
            lawn care, landscaping, or irrigation service in Waco, China
            Springs, or Woodway, TX. When you trust a professional, they should
            consistently come through for you. Whether you have big ambitions
            for a property transformation or just need to stop worrying about
            routine maintenance, we want you to make a confident decision that
            brings you peace of mind.
          </p>
          <p className="max-w-3xl mx-auto">
            Since 2001, we’ve been helping people just like you. Other companies
            call them customers. We often call them our friends. They’re the
            proud homeowners who love spending time outdoors with their families
            and friends. They’re the confident property managers who know we
            have their back.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Landscaping & Lawn Care Services Help These People
          </h2>
          <p className="text-lg font-semibold">
            We’re proud to serve homeowners, property managers, and custom
            builders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://media.istockphoto.com/id/1481867504/fr/photo/amour-nouvelle-maison-et-famille-dans-leur-cour-arri%C3%A8re-ensemble-en-regardant-leur-propri%C3%A9t%C3%A9.jpg?s=612x612&w=0&k=20&c=9LfwBE10rBgdGS6OlRFnshyC_kX7t5dxR4Z_FKEYm68="
              alt="Homeowners"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Homeowners</h3>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://media.istockphoto.com/id/1768405675/fr/photo/vu-de-derri%C3%A8re-une-femme-daffaires-pr%C3%A8s-dun-immeuble-de-bureaux.jpg?s=612x612&w=0&k=20&c=r0ld48HKMw9ESOW9n2-f-i-b_eqOMCogESDjFay1HpU="
              alt="Property Managers"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Property Managers</h3>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://media.istockphoto.com/id/1317541148/fr/photo/ouvrier-paysagiste-de-ville-plantant-un-nouvel-arbre-dans-un-parc-public.jpg?s=612x612&w=0&k=20&c=dBj17B5iPSgB9qZyyjHWJffC6_0W2qmIoaSA0bPMuQY="
              alt="Custom Builders"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Custom Builders</h3>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            We’ll Make This Easy For You!
          </h2>
          <p className="text-lg font-semibold mb-8">
            Your Outdoor Living Areas, the Place to Be
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 flex flex-col items-center justify-center">
              <Image
                src="/request.svg"
                alt="Request a Consultation"  
                width={100}
                height={100}
                className="w-20 h-20"
              />
              <h3 className="text-2xl font-bold mb-2">
                1. Request a Consultation
              </h3>
              <p>
                Fill out the form on our website or call us. We’ll discuss your
                goals, challenges, and budget and schedule a time to meet with
                you.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <Image
                src="/walking.svg"
                alt="Property Walkthrough"
                width={100}
                height={100}
                className="w-24 h-24"
              />
              <h3 className="text-2xl font-bold mb-2">
                2. Property Walkthrough
              </h3>
              <p>
                We’ll meet you at your property to learn more and collect
                important details. We’ll answer any questions you may have.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <Image
                src="/solution.svg"  
                alt="Customized Solution"
                width={100}
                height={100}
                className="w-24 h-24"
              />
              <h3 className="text-2xl font-bold mb-2">
                3. Customized Solution
              </h3>
              <p>
                Our team will create a detailed plan for your project or
                property needs. We’ll review it with you and discuss the next
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Stats Section */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Happy Landscaping & Lawn Care Clients
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Image src="/smile.svg" alt="Testimonial 1" width={100} height={100} className="rounded-full" />
              <p className="text-4xl font-bold">340</p>
              <p>HAPPY CUSTOMERS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/star.svg" alt="Testimonial 2" width={100} height={100} className="rounded-full" />
              <p className="text-4xl font-bold">74</p>
              <p>5-STAR GOOGLE REVIEWS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/clock.svg" alt="Testimonial 3" width={100} height={100} className="rounded-full" />
              <p className="text-4xl font-bold">24</p>
              <p>YEARS OF SERVICE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Outdoor Living Areas, the Place to Be
          </h2>
          <p className="mb-8">
            Get the backyard oasis and head-turning curb appeal you’ve always
            wanted.
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
