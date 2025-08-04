import React from 'react';
import { motion as Motion } from 'framer-motion';
import WrappedSection from '../components/WrappedSection';

export default function ShareProfile() {
  return (
    <WrappedSection
      id="share"
      gradientClass="from-sky-400 to-violet-500"
      animation={{
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      }}
    >
      <Motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Deel je profiel met de wereld
      </Motion.h2>
      <Motion.div className="flex space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          LinkedIn
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
          WhatsApp
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
          Download PNG
        </button>
      </Motion.div>
    </WrappedSection>
  );
}