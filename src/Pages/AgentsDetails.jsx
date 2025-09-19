// src/Pages/AgentDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { agentsData } from "../Data/agentsData";
import { propertiesData } from "../Data/propertiesData";
import PropertyCard from "../Components/PropertyCard"; // ✅ Reuse property card

const AgentDetails = () => {
    const { id } = useParams();
    const agent = agentsData.find((a) => a.id === parseInt(id));

    if (!agent) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white text-xl">
                Agent not found
            </div>
        );
    }

    // ✅ Get properties assigned to this agent
    const agentProperties = propertiesData.filter((property) =>
        agent.assignedPropertyIds.includes(property.id)
    );

    return (
        <div className="relative min-h-screen flex flex-col bg-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <main className="flex-grow px-6 md:px-16 mt-32 mb-16 space-y-12">
                {/* Profile Section */}
                <div data-aos="zoom-in" className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left: Agent Image */}
                    <div className="flex justify-center">
                        <img
                            src={agent.photo.replace("/public", "")}
                            alt={agent.name}
                            className="w-60 h-60 object-cover rounded-2xl border-4 border-cyan-400 shadow-lg"
                        />
                    </div>

                    {/* Right: Info */}
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-white">{agent.name}</h1>
                        <p className="text-gray-300 text-lg mt-2">{agent.role}</p>
                        <p className="text-cyan-400 text-sm mt-1 uppercase tracking-wide">
                            {agent.propertyType} Specialist
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-3 text-gray-200">
                            <p>
                                <span className="font-semibold text-white">📧 Email:</span>{" "}
                                {agent.contact.email}
                            </p>
                            <p>
                                <span className="font-semibold text-white">📞 Phone:</span>{" "}
                                {agent.contact.phone}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex gap-4">
                            <a
                                href={`mailto:${agent.contact.email}?subject=Interested%20in%20your%20listings`}
                                className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition shadow-lg"
                            >
                                Contact
                            </a>
                            <Link
                                to="/agents"
                                className="px-6 py-2 rounded-xl bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/30 transition shadow-lg"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Properties Section */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Properties Managed by {agent.name}
                    </h2>

                    {agentProperties.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {agentProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center">
                            This agent has no properties assigned.
                        </p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AgentDetails;
