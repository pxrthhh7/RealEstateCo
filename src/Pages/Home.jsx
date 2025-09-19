import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { propertiesData } from "../Data/propertiesData";
import { agentsData } from "../Data/agentsData";
import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "../Components/PropertyCard";
import { FilterContext } from "../Context/FilterContext";
import AOS from "aos";

const Home = () => {

  const topProperty = propertiesData.slice(0, 3)
  const topAgents = agentsData.slice(0, 3);
  const propertyLocation = [...new Set(propertiesData.map(p => p.location))]
  const propertyTypes = [...new Set(propertiesData.map(p => p.propertyType))];

  const nevigate = useNavigate()

  const [tempFilters, setTempFilter] = useState({
    location: "All",
    maxPrice: "",
    propertyType: "All"
  })

  const { setFilter } = useContext(FilterContext)

  const handelSearch = (() => {
    setFilter(tempFilters)
    nevigate("/listings")
  })


  useEffect(() => {
    AOS.init({ duration: 1000 });
  })

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      <main className="flex-grow mt-32 mb-16">
        {/* Hero Section with Floating Filter */}
        <section className="relative flex items-center justify-center px-6 text-center pb-0 sm:pb-5 md:pb-24 md:mb-20 mb-12">
          <div data-aos="zoom-in" className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Find Your Dream Home in Minutes
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Browse thousands of properties across your city and connect with trusted agents.
            </p>
            <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
              <a
                href="/listings"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition shadow-lg"
              >
                View Listings
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition shadow-lg backdrop-blur-md border border-white/30"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Floating Filter Box */}
          <div data-aos="fade-up" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-6 hidden md:block">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

              <select value={tempFilters.location} onChange={(e) => setTempFilter({ ...tempFilters, location: e.target.value })} className="p-3 cursor-pointer rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none">
                <option value="All" className="bg-gray-800 text-white">All Locations</option>
                {propertyLocation.map((e, i) => (
                  <option value={e} key={i} className="bg-gray-800 text-white">
                    {e}
                  </option>
                ))}
              </select>

              <input
                value={tempFilters.maxPrice}
                onChange={(e) => setTempFilter({ ...tempFilters, maxPrice: e.target.value })}
                type="text"
                placeholder="Price Range"
                className="p-3 cursor-pointer rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              />

              <select value={tempFilters.propertyType} onChange={(e) => setTempFilter({ ...tempFilters, propertyType: e.target.value })} className="p-3 cursor-pointer rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none">
                <option value="All" className="bg-gray-800 text-white">All Types</option>
                {propertyTypes.map((e, i) => (
                  <option value={e} key={i} className="bg-gray-800 text-white" >
                    {e}
                  </option>
                ))}
              </select>

              <button onClick={handelSearch} className="p-3 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold text-center hover:opacity-90 transition">
                Search
              </button>

            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="px-6 mt-10 sm:mt-16 md:mt-20 lg:mt-28 max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              topProperty.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            }
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 mt-20 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Search Properties", "View Details", "Contact Agent"].map(
              (step, idx) => (
                <div
                  key={idx}
                  className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-4xl mb-3">🏠</div>
                  <h3 className="font-semibold text-lg">{step}</h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Step {idx + 1} description goes here.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Agents Preview */}
        <section className="px-6 mt-20 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Meet Our Top Agents</h2>
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topAgents.map((agent) => (
              <div
                key={agent.id}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
              >
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-4 font-semibold">{agent.name}</h3>
                <p className="text-gray-300 text-sm">{agent.role}</p>
                <Link to={`/agent-details/${agent.id}`} className="mt-3 inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-xl font-semibold hover:opacity-90 transition">
                  Contact
                </Link>
              </div>
            ))}
          </div>
          <Link to="/agents" className="mt-6 cursor-pointer inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-xl hover:opacity-90 transition">
            View All Agents
          </Link>
        </section>

        {/* Testimonials */}
        <section className="px-6 mt-20 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((review, idx) => (
              <div
                key={idx}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
              >
                <p className="text-gray-300 text-sm">
                  "Excellent service! Found my dream home easily."
                </p>
                <h3 className="mt-3 font-semibold">Client #{idx + 1}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Call-To-Action */}
        <section className="px-6 mt-20 max-w-6xl mx-auto text-center">
          <div data-aos="zoom-in" className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Find your dream home today
            </h2>

            <Link to="/listings" className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-xl hover:opacity-90 transition">
              View Listings
            </Link>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
