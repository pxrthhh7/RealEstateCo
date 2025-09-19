import Reac from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer data-aos="fade-up" className="bg-black/30 backdrop-blur-2xl border-t border-white/10 text-gray-300 shadow-inner">
            <div className="container mx-auto px-6 md:px-16 py-10 grid md:grid-cols-3 gap-10">
                {/* About */}
                <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        RealEstateCo
                    </h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Your trusted partner in finding premium real estate properties across the globe.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-3 space-y-2">
                        {["Home", "Listings", "Agents", "Contact"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                    className="hover:text-cyan-300 transition-all duration-300 font-semibold"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                    <p className="mt-3 text-sm text-gray-400">
                        Subscribe to our newsletter for the latest property updates.
                    </p>
                    <div className="mt-4 flex">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-4 py-2 w-full rounded-l-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none backdrop-blur-md"
                        />
                        <button className="px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white rounded-r-xl font-semibold hover:opacity-90 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} RealEstateCo. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
