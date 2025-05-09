"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const galleryImages = [
  { src: "/event1.jpg", alt: "Event 1", category: "Events" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746796160/New_office_inaugration_w5y37d.jpg", alt: "Event 1", category: "Events" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795260/WhatsApp_Image_2025-05-09_at_1.36.24_PM_sw2bqz.jpg", alt: "Team 1", category: "Team" },
  // { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795586/Manufacturing_abavqi.png", alt: "Manufacturing 1", category: "Manufacture" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795586/Manufacturing_1_l8gku5.png", alt: "Manufacturing 1", category: "Manufacture" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795261/WhatsApp_Image_2025-05-09_at_1.36.25_PM_jg593f.jpg", alt: "Team 2", category: "Team" },
  { src: "/office1.jpeg", alt: "Office 2", category: "Office" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795736/Our_Office_2_q7uliy.png", alt: "Office 2", category: "Office" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795734/Our_Office_oeveym.png", alt: "Office 2", category: "Office" },
  { src: "/img12.jpeg", alt: "Administer 1", category: "Administer" },
  { src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795586/Manufacturing_abavqi.png", alt: "Production 1", category: "Production" },
];

const GalleryPage = () => {
  const groupedImages = galleryImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {});

  const renderSection = (title, description, category) => (
    <div className="mb-16 py-16">
      <h2 className="text-2xl sm:text-3xl  text-center font-bold text-gray-600 ">{title}</h2>
      <p className="text-gray-600 text-lg sm:text-xl mb-10 text-center max-w-3xl mx-auto">
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {groupedImages[category]?.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md w-full sm:w-[45%] lg:w-[30%] xl:w-[23%] flex items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={350}
              className="w-full h-72 object-cover rounded-xl"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <Navbar />

        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-3xl pt-16 font-semibold text-gray-800 leading-tight mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-6 py-3 rounded-2xl">
              Explore Our Gallery
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
            Dive into our vibrant world through these moments of creativity, collaboration, and excellence.
          </p>
        </div>

        {renderSection("Our Events", "Explore unforgettable moments from our events, where magic happens!", "Events")}
        {renderSection("Our Team", "Meet the passionate individuals who drive our success. Our team is our greatest asset.", "Team")}
        {renderSection("Our Office", "Take a peek into our creative workspace where innovation thrives.", "Office")}
        {renderSection("Manufacturing", "Discover our manufacturing process—precision, quality, and efficiency in action.", "Manufacture")}
        {renderSection("Production Details", "A closer look at how we bring ideas to life with our meticulous production flow.", "Production")}
      </div>
      <ContactSidebar />
      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </>
  );
};

export default GalleryPage;
