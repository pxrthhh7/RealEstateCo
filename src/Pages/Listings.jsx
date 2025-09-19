import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { propertiesData } from "../Data/propertiesData";
import PropertyCard from "../Components/PropertyCard";
import FilterBar from "../Components/FilterBar";
import { FilterContext } from "../Context/FilterContext";

const Listings = () => {

  const [visibleCount, setVisibleCount] = useState(9);
  const [filteredProperty, setFilteredProperty] = useState(propertiesData)

  const { filter } = useContext(FilterContext);

  useEffect(() => {

    let filtered = propertiesData;

    if (filter.location !== "All") {
      filtered = filtered.filter(
        (p) => p.location.toLowerCase() === filter.location.toLowerCase()
      );
    }

    if (filter.maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(filter.maxPrice));
    }

    if (filter.propertyType !== "All") {
      filtered = filtered.filter(
        (p) => p.propertyType.toLowerCase() === filter.propertyType.toLowerCase()
      );
    }

    setFilteredProperty(filtered)
    setVisibleCount(9)
  }, [filter])

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };


  const visibleProperties = filteredProperty.slice(0, visibleCount);

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* <FilterBar /> */}
      <FilterBar />

      {/* Page content */}
      <div className="min-h-screen px-6 mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Explore Our Listings </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visibleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProperty.length &&
          (
            <div className="text-center mt-10">
              <button onClick={handleLoadMore} className="px-6 py-3 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-xl hover:opacity-90 transition" >
                View More
              </button>
            </div>
          )
        }
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Listings;