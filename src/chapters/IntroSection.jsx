// src/chapters/IntroSection.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center"
    >
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Jij bent de brug tussen AI en impact
      </Motion.h2>

      <Motion.img
        src="/avatar_placeholder.png"
        alt="Cinematic Avatar"
        className="w-64 h-64 rounded-2xl shadow-lg mb-8 object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />

      <Motion.p
        className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Je combineert creativiteit met controle. Je schakelt tussen frontend elegantie en backend robuustheid, met AI als ultiem hulpmiddel.
      </Motion.p>
    </section>
  );
}
