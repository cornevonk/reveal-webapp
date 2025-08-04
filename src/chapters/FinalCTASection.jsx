import React from 'react';
import { motion as Motion } from 'framer-motion';
import WrappedSection from '../components/WrappedSection';

export default function FinalCTASection() {
  return (
    <WrappedSection
      id="final"
      gradientClass="from-red-500 to-yellow-500"
      animation={{
        initial: { opacity: 0, y: -30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      }}
    >
      <Motion.h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
        Deze functie past bij jou…
      </Motion.h2>
      <Motion.ul className="space-y-4 text-neutral-600 mb-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {['Als je energie krijgt van AI als hulpmiddel','Als je ownership voelt voor alles wat je bouwt','Als je met visie én scherpte wilt bijdragen'].map((item, idx) => (
          <li key={idx} className="flex items-center justify-center">
            <span className="mr-2 text-teal-500">✨</span>
            {item}
          </li>
        ))}
      </Motion.ul>
      <Motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <button className="mx-2 px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition">
          Terug naar overzicht
        </button>
        <button className="mx-2 px-6 py-3 border border-neutral-300 bg-white text-neutral-700 rounded-full hover:bg-neutral-100 transition">
          Deel profiel
        </button>
      </Motion.div>
    </WrappedSection>
  );
}