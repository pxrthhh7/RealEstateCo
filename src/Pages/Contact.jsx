import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow px-6 mt-32 mb-16 space-y-12">
        {/* Contact Section */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div data-aos="zoom-in" className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-300">
              We’d love to hear from you! Reach out to us for inquiries,
              property assistance, or collaborations.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="text-cyan-400" size={24} />
                <span className="text-gray-300">support@realestateco.com</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Phone className="text-purple-400" size={24} />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <MapPin className="text-indigo-400" size={24} />
                <span className="text-gray-300">123 Dream St, Beverly Hills, CA</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="zoom-in" className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center md:text-left">
              Send Us a Message
            </h2>

            <form className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-cyan-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-cyan-400"
              ></textarea>
              <button
                type="submit"
                className="w-full cursor-pointer py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Google Map Section */}
        <div data-aos="zoom-in" className="max-w-5xl mx-auto w-full">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl overflow-hidden">
            <iframe
              title="RealEstateCo Location"
              src="https://www.google.com/maps?q=123+Dream+St,+Beverly+Hills,+CA&output=embed"
              className="w-full h-[400px] rounded-3xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
