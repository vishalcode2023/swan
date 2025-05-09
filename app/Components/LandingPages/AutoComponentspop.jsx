// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AutoPopupChat = () => {
//   const [show, setShow] = useState(false);
//   const [i, setI] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://swanbackend.onrender.com/api/cards")
//       .then((res) => setData(res.data))
//       .catch((err) => console.error("Message fetch error:", err));
//   }, []);

//   useEffect(() => {
//     const t = setTimeout(() => {
//       if (data.length) setShow(true);
//     }, 60000);
//     return () => clearTimeout(t);
//   }, [data]);

//   const close = () => {
//     setShow(false);
//     setTimeout(() => {
//       setI((prev) => (prev + 1) % data.length);
//       setShow(true);
//     }, 60000);
//   };

//   if (!data.length) return null;
//   const msg = data[i];

//   return (
//     <div
//       className={`fixed bottom-3 left-3 z-[9999] transition-all duration-500 ${
//         show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
//       }`}
//     >
//       <div className="bg-white border rounded-xl w-[150px] sm:w-[180px] text-gray-800 shadow-md relative">
//         <img src={msg.image} alt="Banner" className="w-full h-28 object-contain" />
//         <div className="p-3">
//           <h4 className="text-sm font-semibold">{msg.title}</h4>
//           <p className="text-xs">{msg.message}</p>
//           <a href="/contact" className="text-blue-600 hover:underline text-xs font-medium">
//             Chat Now →
//           </a>
//         </div>
//         <button
//           className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-sm"
//           onClick={close}
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AutoPopupChat;


"use client";
import React, { useState, useEffect } from "react";

const AutoPopupChat = () => {
  const [show, setShow] = useState(false);
  const [i, setI] = useState(0);

  // Dummy data for marketing team and images
  const data = [
    {
      image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826522/Marketing_pe9fam.avif",
      title: "Marketing Team",
      message: "Varsha - 9538388146",
    },
    {
      image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826592/support_zmszj6.avif", // Placeholder image for Alka
      title: "Service Team",
      message: "Sujatha.A-9844015015",
    },
    {
      image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826522/Marketing_pe9fam.avif", // Placeholder image for G. Nagaraj
      title: "Marketing Team",
      message: "Alka-9742428946",
    },
    {
      image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745826592/support_zmszj6.avif", // Placeholder image for Alka
      title: "Service  Team",
      message: "Veerabhadra-9986589456",
    },
  ];

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true);
    }, 10000); // Show the popup after 10 seconds
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setShow(false);
    setTimeout(() => {
      setI((prev) => (prev + 1) % data.length);
      setShow(true);
    }, 10000); // Reopen after 10 seconds
  };

  if (!data.length) return null;
  const msg = data[i];

  return (
    <div
      className={`fixed bottom-3 left-10 z-[9999] transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="bg-white border rounded-xl w-[150px] sm:w-[180px] text-gray-800 shadow-md relative">
        <img src={msg.image} alt="Banner" className="w-full h-28 object-contain" />
        <div className="p-3">
          <h4 className="text-sm font-semibold">{msg.title}</h4>
          <p className="text-xs">{msg.message}</p>
          <a href="/contact" className="text-blue-600 hover:underline text-xs font-medium">
            Chat Now →
          </a>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-sm"
          onClick={close}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AutoPopupChat;
