// src/chapters/IntroSection.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';
import WrappedSection from '../components/WrappedSection';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function IntroSection() {
  return (
    <WrappedSection id="intro" bgGradient="bg-gray-50" variants={container}>
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6"
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
        className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        Je combineert creativiteit met controle. Je schakelt tussen frontend elegantie en backend robuustheid, met AI als ultiem hulpmiddel.
      </Motion.p>
    </WrappedSection>
  );
}

