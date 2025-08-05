// src/chapters/IntroSection.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';
import { container, fadeUp, scaleIn } from '../utils/motionVariants';
import ScrollButton from '../components/ScrollButton';

export default function IntroSection() {
  return (
    <Motion.section
      id="intro"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-20 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6 text-neutral-900 dark:text-neutral-100"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        Jij bent de brug tussen AI en impact
      </Motion.h2>

      <Motion.img
        src="/avatar_placeholder.png"
        alt="Cinematic Avatar"
        className="w-64 h-64 rounded-2xl shadow-lg mb-8 object-cover"
        variants={scaleIn}
        transition={{ duration: 0.8 }}
      />

      <Motion.p
        className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        Je combineert creativiteit met controle. Je schakelt tussen frontend elegantie en backend robuustheid, met AI als ultiem hulpmiddel.
      </Motion.p>
      <ScrollButton targetId="mission" />
    </Motion.section>
  );
}

