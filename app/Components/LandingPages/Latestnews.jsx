"use client";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";

const Latestnews = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Commented out API call
    // const fetchBlogs = async () => {
    //   try {
    //     const res = await axios.get('http://147.93.29.202:5001/api/blogs');
    //     const data = res.data.blogs;
    //     console.log("Fetched blogs:", data);

    //     // Shuffle and pick 3 random blogs
    //     const shuffled = data.sort(() => 0.5 - Math.random());
    //     const selected = shuffled.slice(0, 3);
    //     setBlogs(selected);
    //   } catch (err) {
    //     console.error("Failed to fetch blogs:", err.response || err.message);
    //     setError("Failed to fetch blogs. Please try again later.");
    //     setBlogs([]); // Optionally show empty state
    //   }
    // };

    // fetchBlogs();

    // Hardcoded blog data
    const sampleBlogs = [
      {
        _id: "1",
        title: " Swan Color Sorting – For all types of grains and agricultural items",
        published_date: "2025-04-10",
        featured_image: "/partners1.jpeg",
      },
    ];

    setBlogs(sampleBlogs);
  }, []);

  return (
    <div className="w-full min-h-full bg-white">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <motion.section
        className="w-full py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Check out Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 font-bold rounded-xl">
            Latest
          </span>{" "}
          News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id || index}
              className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={
                  blog.featured_image && blog.featured_image.trim() !== ""
                    ? blog.featured_image
                    : "https://via.placeholder.com/600x300"
                }
                alt={blog.title}
                width={600}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <p className="text-gray-500 text-sm">
                  {new Date(blog.published_date).toLocaleDateString()}
                </p>
                <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                <a
                  href={`/LatestBlogs/${blog._id}`}
                  className="text-blue-600 font-semibold mt-3 inline-block"
                >
                  Read more &gt;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <div className="w-full text-center pb-10">
        <button className="bg-gradient-to-r from-green-400 to-blue-400 px-5 py-2 font-bold text-white rounded-2xl text-2xl">
          <a href="/Blogs">View Blogs</a>
        </button>
      </div>
    </div>
  );
};

export default Latestnews;
