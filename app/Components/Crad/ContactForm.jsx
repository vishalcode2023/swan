"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);
  const [captchaInput, setCaptchaInput] = useState(null); // State to hold the input element, initialized to null

  // Generate random CAPTCHA string
  const generateCaptcha = useCallback(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(result);
  }, []);

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (enteredCaptcha !== captchaText) {
      setIsCaptchaValid(false);
      toast.error("Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
      setEnteredCaptcha("");
      if (captchaInput && typeof captchaInput.focus === 'function') {
        captchaInput.focus();
      }
      return;
    }

    setIsCaptchaValid(true);

    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    try {
      const response = await axios.post(
        "http://147.93.29.202:5001/api/enquiries",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully!");
        console.log("Response:", response.data);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setEnteredCaptcha("");
        generateCaptcha();
      } else {
        console.error("Unexpected response:", response);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send. Please try again later."
      );
    }
  };

  const handleCaptchaFocus = () => {
    generateCaptcha();
    setEnteredCaptcha("");
    setIsCaptchaValid(true);
    if (captchaInput && typeof captchaInput.focus === 'function') {
      captchaInput.focus();
    }
  };

  const setInputRef = (element) => {
    setCaptchaInput(element);
  };

  useEffect(() => {
    if (captchaInput) {
      console.log("captchaInput:", captchaInput);
    }
  }, [captchaInput]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl w-full bg-white border border-gray-300 rounded-xl p-8 text-center font-bold shadow-lg">
        <span className="text-2xl md:text-4xl bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-1 rounded-2xl">
          Place an Order or Enquiry
        </span>
        <p className="text-center text-lg text-gray-600 mt-2">
          Are you interested in this product? Let us know!
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md"
                required
              />
            </div>

            {/* Product Field */}
            <div className="sm:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Product
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the product you're interested in"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md"
              required
            ></textarea>
          </div>

          {/* CAPTCHA Field */}
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Enter CAPTCHA:
            </label>
            <div className="flex items-center gap-2">
              <div
                className={`w-32 h-10 rounded-md border flex items-center justify-center text-lg font-semibold bg-gray-100 text-gray-800 ${
                  !isCaptchaValid ? "border-red-500" : ""
                }`}
              >
                {captchaText}
              </div>
              <input
                type="text"
                value={enteredCaptcha}
                onChange={(e) => setEnteredCaptcha(e.target.value)}
                placeholder="Enter CAPTCHA"
                className={`w-40 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md`}
                required
                onFocus={handleCaptchaFocus}
                ref={setInputRef}
              />
            </div>
            {!isCaptchaValid && (
              <p className="text-red-500 text-sm mt-1">
                Incorrect CAPTCHA. Please try again.
              </p>
            )}
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-8 py-3 rounded-md transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
