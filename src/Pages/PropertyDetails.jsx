import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { propertiesData } from "../Data/propertiesData";
import { FilterContext } from "../Context/FilterContext";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  const { filter, setFilter } = useContext(FilterContext);

  const navigate = useNavigate();

  const handelSimilarProperty = (() => {

    setFilter({ ...filter, propertyType: property.propertyType })
    navigate("/listings")
  })


  if (!property) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black -z-10"></div>
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-6 text-center mt-32 mb-16">
          <h1 className="text-3xl font-bold text-white">
            Property not found.
          </h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gray-900 -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow px-6 md:px-16 mt-32 mb-16">
        <div data-aos="zoom-in" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 md:p-10">

          {/* Property Image */}
          <div className="flex items-center justify-center">
            <img
              src={property.image.replace("/public", "")} // ✅ Adjusting path
              alt={property.name}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Property Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {property.name}
              </h1>
              <p className="text-lg text-gray-300 mt-2">{property.location}</p>

              <p className="mt-4 text-2xl font-semibold text-cyan-300">
                ${property.price.toLocaleString()}
              </p>

              <p className="mt-2 inline-block px-4 py-1 text-sm bg-indigo-500/20 text-indigo-300 font-semibold rounded-full">
                {property.propertyType}
              </p>

              <p className="mt-6 text-gray-200 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to={`/agent-details/${property.agentId}`}
                className="flex flex-1 items-center justify-center px-6 py-3 rounded-xl cursor-pointer bg-white/20 text-white font-semibold hover:bg-white/30 transition shadow-lg backdrop-blur-md border border-white/30"
              >
                Contact Agent
              </Link>

              <button onClick={handelSimilarProperty} className="flex-1 px-6 py-3 rounded-xl cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition shadow-lg text-center">
                View Similar Properties
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PropertyDetails;
