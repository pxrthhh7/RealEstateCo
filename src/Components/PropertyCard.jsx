import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";


const PropertyCard = ({ property }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    })

    return (
        <div data-aos="zoom-in" className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            {/* Property Image */}
            <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
            />

            {/* Property Info */}
            <div className="p-4 text-white">
                <h3 className="font-bold text-lg">{property.name}</h3>
                <p className="text-gray-300">{property.location}</p>
                <p className="mt-1 text-cyan-300 font-semibold">
                    ${property.price.toLocaleString()}
                </p>

                {/* Details Button */}
                <Link
                    to={`/property-details/${property.id}`} // Passing property details via router
                    className="mt-3 inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
