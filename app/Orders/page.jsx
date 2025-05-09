"use client";

import React, { useState } from "react";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import toast, { Toaster } from "react-hot-toast";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import ContactForm from "../Components/Crad/ContactForm";

const Page = () => {

  return (
    <div>
      <Toaster position="top-right" />
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 text-center mb-4"></h2>
          <ContactForm/>          
        </div>
      </section>
      <ContactSidebar/>
      <AutoPopupChat/>
      <ChatBot />
      <Footerpage />
    </div>
  );
};

export default Page;
