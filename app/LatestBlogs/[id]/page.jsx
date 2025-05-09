import React from "react";
import Image from "next/image";
import Navbar from "@/app/Components/NavbarLinks/Navbar";
import Footerpage from "@/app/Components/LandingPages/Footerpage";
import ContactSidebar from "@/app/Components/LandingPages/ContactSidebar";
import ChatBot from "@/app/Components/ChatBot/ChatBot";
import AutoPopupChat from "@/app/Components/LandingPages/AutoComponentspop";

const hardcodedBlog = {
  title: "Swan Color Sorting – For all types of grains and agricultural items",
  published_date: "2025-04-10",
  featured_image: "/partners1.jpeg", // Make sure this path is correct!
  content:
    "In the world of agriculture, quality and precision are critical when it comes to sorting grains and other agricultural products. Traditional methods of sorting and grading can be time-consuming and often fail to meet the high-quality standards required by the industry. That's where Swan Color Sorting comes in. Swan Color Sorting technology uses advanced optical sensors and high-definition cameras to identify and sort grains with unparalleled precision. This process ensures that only the best grains make it to market, while unwanted foreign materials like stones, defective grains, and other impurities are removed automatically. The result is higher quality products, reduced waste, and increased efficiency. Swan Color Sorting systems are equipped with state-of-the-art optical sorting technology that utilizes the color differences between the grains and unwanted foreign matter. The process works as follows: High-Speed Imaging: As the grains pass through the sorter, they are captured by high-speed cameras that take multiple images per second.<br/><br/>Color Detection: The system analyzes the color of each grain and compares it to preset criteria, identifying grains with defects or foreign materials based on color variations.<br/><br/>Air Jets or Mechanical Sorting: Once the unwanted grains or contaminants are identified, the system uses air jets or mechanical arms to eject them from the sorting stream.<br/><br/>Sorting and Grading: The remaining grains are classified and sorted into different categories based on quality, size, and shape, ready for packaging and distribution."
};

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col bg-white">
        <main className="flex-grow py-8 px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#8E54FF] to-[#4A00E0] bg-clip-text text-transparent mb-4 drop-shadow-sm">
              Discover Our Blogs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 tracking-wide">
              Insights, ideas, and innovations from the heart of our team
            </p>
            <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#8E54FF] to-[#4A00E0] rounded-full" />
          </div>

          {/* Blog Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Blog Image */}
            <div className="relative w-full aspect-video">
              <Image
                src={hardcodedBlog.featured_image}
                alt={hardcodedBlog.title}
                layout="fill"
                objectFit="cover"
                priority
                className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
                {hardcodedBlog.title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 mb-6 italic border-l-4 border-blue-500 pl-3">
                Published on{" "}
                {new Date(hardcodedBlog.published_date).toLocaleDateString()}
              </p>

              <div
                className="prose prose-sm sm:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: hardcodedBlog.content,
                }}
              />
            </div>
          </div>
        </main>

        {/* Sidebar and Chat */}
        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
      </div>

      <Footerpage />
    </>
  );
}



