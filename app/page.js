"use client";
import Image from "next/image";
import {
  SparklesIcon,
  UserIcon,
  StarIcon,
  FolderIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

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
              Welcome to GAP Landscaping
            </h1>
            <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
              Your Trusted Partner for Lawn Care & Landscaping Excellence. At
              GAP Landscaping, we’re more than just a landscaping service we’re
              your partner in creating beautiful, healthy, and sustainable
              outdoor spaces. With years of experience in both lawn care and
              landscaping, we pride ourselves on providing exceptional service
              and expert care that transforms your yard into a stunning oasis.
            </p>
            <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center">
          Our <span className="text-green-600">Services</span>
        </h2>
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
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Why <span className="text-green-600">Choose</span> GAP Landscaping?
          </h2>

          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Expert Care */}
            <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <SparklesIcon className="h-20 w-20 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Care for Every Lawn & Landscape
              </h3>
              <p className="text-gray-600">
                With a team of skilled professionals, we treat your yard with
                the same care and attention we would our own. From lush green
                lawns to vibrant flower beds, we have the expertise to maintain
                and improve every aspect of your outdoor space.
              </p>
            </div>

            {/* Card 2: Personalized Services */}
            <div className="bg-white  flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <UserIcon className="h-20 w-20 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Personalized Services
              </h3>
              <p className="text-gray-600">
                We understand that every property is unique. That’s why we offer
                personalized services tailored to your specific needs. Whether
                it’s a one-time cleanup or an ongoing maintenance plan, we work
                with you to create a customized solution that fits your budget
                and vision.
              </p>
            </div>

            {/* Card 3: Quality */}
            <div className="bg-white  flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <StarIcon className="h-20 w-20 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality That Speaks for Itself
              </h3>
              <p className="text-gray-600">
                At GAP Landscaping, quality is at the heart of everything we do.
                We use only the best tools, equipment, and eco-friendly products
                to ensure that your lawn, garden, and trees receive the highest
                level of care. Our attention to detail and commitment to
                excellence means you’ll always get the best results.
              </p>
            </div>

            {/* Card 4: Comprehensive Services */}
            <div className="bg-white  flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FolderIcon className="h-20 w-20 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comprehensive Lawn & Landscaping Services
              </h3>
              <p className="text-gray-600">
                We don’t just mow lawns – we provide a full range of services to
                care for every aspect of your yard. From tree trimming and
                removal to landscape design, flower bed installation, and
                irrigation systems, we offer comprehensive solutions to make
                your outdoor space flourish.
              </p>
            </div>

            {/* Card 5: Affordable Pricing */}
            <div className="bg-white  flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CurrencyDollarIcon className="h-20 w-20 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Affordable, Transparent Pricing
              </h3>
              <p className="text-gray-600">
                We believe that quality landscaping shouldn’t come with a hefty
                price tag. That’s why we offer competitive pricing and
                transparent quotes, so you always know exactly what to expect.
                No hidden fees, no surprises—just exceptional service at a price
                you can afford.
              </p>
            </div>

            {/* Card 6: Satisfaction Guaranteed */}
            <div className="bg-white  flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CheckBadgeIcon className="h-20 w-20 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. If you’re not happy with
                the results, we’ll make it right. Our team is committed to
                providing outstanding customer service and ensuring that your
                landscaping experience is nothing short of exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
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
              <Image
                src="/smile.svg"
                alt="Testimonial 1"
                width={100}
                height={100}
                className="rounded-full"
              />
              <p className="text-4xl font-bold">340</p>
              <p>HAPPY CUSTOMERS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/star.svg"
                alt="Testimonial 2"
                width={100}
                height={100}
                className="rounded-full"
              />
              <p className="text-4xl font-bold">74</p>
              <p>5-STAR GOOGLE REVIEWS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/clock.svg"
                alt="Testimonial 3"
                width={100}
                height={100}
                className="rounded-full"
              />
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
