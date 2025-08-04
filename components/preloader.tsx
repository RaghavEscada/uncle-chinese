import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        {/* Spinning Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-red-500 border-t-transparent rounded-full mx-auto"></div>
        </motion.div>
        
        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-brice">
            UNCLE&apos;S <span className="text-red-500">CHINESE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-brice">
            Loading authentic flavors...
          </p>
        </motion.div>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="mt-8 h-1 bg-red-500 rounded-full max-w-xs mx-auto"
        />
      </div>
    </motion.div>
  );
} 