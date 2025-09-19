import React, { useContext, useState } from "react";
import { SlidersHorizontal } from "lucide-react"; // small filter icon
import { propertiesData } from "../Data/propertiesData";
import { FilterContext } from "../Context/FilterContext";

const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const propertyLocation = [...new Set(propertiesData.map(p => p.location))];
    const propertyType = [...new Set(propertiesData.map(p => p.propertyType))];

    const defaultFilters = {
        location: "All",
        maxPrice: "",
        propertyType: "All",
    };

    const [tempFilters, setTempFilter] = useState(defaultFilters);
    const { setFilter } = useContext(FilterContext);

    const handelSearch = () => {
        setFilter(tempFilters);
        setIsOpen(false);
    };

    const handleClear = () => {
        setTempFilter(defaultFilters); // reset local filters
        setFilter(defaultFilters); // reset global filters
        setIsOpen(false); // also close filter bar
    };

    return (
        <>
            {/* Toggle Button for Small Screens */}
            <div className="flex justify-center md:hidden pt-24 mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition"
                >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                </button>
            </div>

            {/* Filter Bar */}
            <div data-aos="zoom-in"
                className={`fixed bottom-0 left-0 w-full mt-28 mb-9 p-6 bg-gray-900/95 backdrop-blur-lg border-t border-white/20 transform transition-transform duration-300 z-40 md:static md:p-0 md:translate-y-0 md:bg-transparent md:border-0 ${isOpen ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <div className="rounded-3xl shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto p-4 bg-white/10 border border-white/20 backdrop-blur-lg">

                    {/* Location Dropdown */}
                    <select
                        value={tempFilters.location}
                        onChange={(e) =>
                            setTempFilter({ ...tempFilters, location: e.target.value })
                        }
                        className="p-3 cursor-pointer rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                    >
                        <option value="All" className="bg-gray-800 text-white">
                            All Locations
                        </option>
                        {propertyLocation.map((e, i) => (
                            <option value={e} className="bg-gray-800 text-white" key={i}>
                                {e}
                            </option>
                        ))}
                    </select>

                    {/* Price Input */}
                    <input
                        value={tempFilters.maxPrice}
                        onChange={(e) =>
                            setTempFilter({ ...tempFilters, maxPrice: e.target.value })
                        }
                        type="number"
                        placeholder="Max Price"
                        className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                    />

                    {/* Property Type Dropdown */}
                    <select
                        value={tempFilters.propertyType}
                        onChange={(e) =>
                            setTempFilter({ ...tempFilters, propertyType: e.target.value })
                        }
                        className="p-3 cursor-pointer rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                    >
                        <option value="All" className="bg-gray-800 text-white">
                            All Types
                        </option>
                        {propertyType.map((e, i) => (
                            <option value={e} key={i} className="bg-gray-800 text-white">
                                {e}
                            </option>
                        ))}
                    </select>

                    {/* Search Button */}
                    <button
                        onClick={handelSearch}
                        className="p-3 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold text-center hover:opacity-90 transition"
                    >
                        Search
                    </button>

                    {/* Clear Filters Button */}
                    <button
                        onClick={handleClear}
                        className="p-3 cursor-pointer rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-center hover:opacity-90 transition"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterBar;
