import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function ResponsibilitiesSection() {
  return (
    <section id="responsibilities" className="min-h-screen bg-gray-50 px-4 py-20 flex flex-col items-center justify-center text-center">
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Wat je gaat doen
      </Motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace these cards with dynamic data */}
        {['Ontwerpen van AI-workflows','Frontend-interactie optimaliseren','Infra automatisering','Samenwerking met AI-specialisten'].map((title, idx) => (
          <Motion.div
            key={idx}
            className="rounded-2xl shadow-sm border border-neutral-200 p-6 bg-white hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-12 w-12 bg-teal-100 rounded-full mb-4 flex items-center justify-center">
              {/* Icon placeholder */}
              <span className="text-teal-600 font-bold">{idx+1}</span>
            </div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-neutral-600">Korte uitleg over {title.toLowerCase()}.</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}