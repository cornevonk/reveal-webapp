import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaDownload } from 'react-icons/fa6';

export default function ShareProfile() {
  return (
    <section id="share" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center">
      <Motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Deel je profiel met de wereld
      </Motion.h2>
      <Motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          <Motion.button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
            LinkedIn
          </Motion.button>
        </div>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          <Motion.button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            WhatsApp
          </Motion.button>
        </div>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          <Motion.button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download PNG
          </Motion.button>
        </div>
      </Motion.div>
      <p className="mt-6 text-lg font-medium bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
        Laat zien dat jij de AI-held bent!
      </p>
    </section>
  );
}
