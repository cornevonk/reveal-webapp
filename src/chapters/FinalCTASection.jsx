import React from 'react';
import { motion as Motion } from 'framer-motion';
import ScrollButton from '../components/ScrollButton';

export default function FinalCTASection() {
  return (
    <section id="cta" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-20 text-center">
      <Motion.h2 className="text-4xl md:text-5xl font-semibold text-center mb-6 text-neutral-900 dark:text-neutral-100">
        Deze functie past bij jou…
      </Motion.h2>
      <Motion.ul className="space-y-4 text-neutral-600 dark:text-neutral-300 mb-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {['Als je energie krijgt van AI als hulpmiddel','Als je ownership voelt voor alles wat je bouwt','Als je met visie én scherpte wilt bijdragen'].map((item, idx) => (
          <li key={idx} className="flex items-center justify-center">
            <span className="mr-2 text-teal-500">✨</span>
            {item}
          </li>
        ))}
      </Motion.ul>
      <Motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <button type="button" className="mx-2 px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition">
          Terug naar overzicht
        </button>
        <button type="button" className="mx-2 px-6 py-3 border border-neutral-300 bg-white text-neutral-700 rounded-full hover:bg-neutral-100 dark:border-neutral-600 dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-700 transition">
          Deel profiel
        </button>
      </Motion.div>
      <ScrollButton targetId="share" />
    </section>
  );
}
