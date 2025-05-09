"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import VideoSection from "../Components/LandingPages/VideoSection";

const team = [
  {
    name: "Mr. Shijo George",
    role: "Director – Sales",
    category: "Leadership",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795260/WhatsApp_Image_2025-05-09_at_1.36.24_PM_sw2bqz.jpg",
  },
  {
    name: "Mr. Vinayaka T.",
    role: "Director – Technical",
    category: "Leadership",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795261/WhatsApp_Image_2025-05-09_at_1.36.25_PM_jg593f.jpg",
  },
  {
    name: "Varsha",
    role: "Marketing Executive",
    category: "Marketing",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826522/Marketing_pe9fam.avif",
  },


  {
    name: "Alka",
    role: "Customer Support Lead",
    category: "Marketing",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826522/Marketing_pe9fam.avif",
  },
  {
    name: "G. Nagaraj",
    role: "Customer Support Lead",
    category: "Marketing",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826522/Marketing_pe9fam.avif",
  },
  {
    name: "Sujatha.A",
    role: "Customer Support Lead",
    category: "Support",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826592/support_zmszj6.avif",
  },
  {
    name: "Veerabhadra",
    role: "Customer Support Lead",
    category: "Support",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826592/support_zmszj6.avif",
  },
  {
    name: "Harish",
    role: "Customer Support Lead",
    category: "Support",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826592/support_zmszj6.avif",
  },
];

const categories = {
  Leadership: "Our Visionary Leaders",
  Marketing: "Marketing & Sales Team",
  Support: "Services & Support Team",
};

const page = () => {
  return (
    <div>
        <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The heart and soul of our company – driving innovation, growth, and
            unmatched customer experience.
          </p>
        </div>

        {Object.keys(categories).map((category, i) => (
          <section key={i} className="mb-16">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">
              {categories[category]}
            </h2>

            <div className="flex flex-wrap justify-center gap-8 max-w-8xl mx-auto">
              {team
                .filter((member) => member.category === category)
                .map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center w-full sm:w-72 md:w-80 lg:w-80"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover mb-4 rounded-xl"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}
      </div>
      <VideoSection/>
      <ContactSidebar/>
      <ChatBot/>
      <AutoPopupChat/>
      <Footerpage/>
    </div>
  );
};

export default page;
