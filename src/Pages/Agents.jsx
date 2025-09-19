import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { agentsData } from "../Data/agentsData"; // adjust path if needed
import { Link } from "react-router-dom"; // ✅ for navigation

const Agents = () => {

  const [visibleCount, setVisibleCount] = useState(8)

  const handleLoadMore = (() => {
    setVisibleCount(visibleCount + 8)
  })

  const visibleAgent = agentsData.slice(0, visibleCount)

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Agents Content */}
      <main className="flex-grow px-6 md:px-16 mt-32 mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Meet Our Agents
        </h2>

        {/* Grid of Agents */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleAgent.map((agent) => (
            <div  
              data-aos="zoom-in"
              key={agent.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Agent Image */}
              <img
                src={agent.photo.replace("/public", "")} // ✅ fix public path
                alt={agent.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-cyan-400 shadow-md"
              />

              {/* Info */}
              <h2 className="mt-4 text-xl font-bold text-white">{agent.name}</h2>
              <p className="text-gray-300 text-sm">{agent.role}</p>
              <p className="text-cyan-400 text-xs mt-1">
                {agent.propertyType} Specialist
              </p>

              {/* View Details Button */}
              <div className="mt-4">
                <Link
                  to={`/agent-details/${agent.id}`} // ✅ Navigate to Agent Details Page
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}

        </div>
        {/* View More Button */}

        {visibleCount < agentsData.length &&
          (
            <div className="text-center mt-10">
              <button onClick={handleLoadMore} className="px-6 py-3 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-xl hover:opacity-90 transition" >
                View More
              </button>
            </div>
          )
        }
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Agents;
