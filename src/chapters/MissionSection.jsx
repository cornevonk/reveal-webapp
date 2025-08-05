import React from 'react';
import { motion as Motion } from 'framer-motion';
import { container, item } from '../utils/motionVariants';
import ScrollButton from '../components/ScrollButton';

export default function MissionSection() {
  return (
    <Motion.section
      id="mission"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 py-20 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6 text-neutral-900 dark:text-neutral-100"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        Waarom deze rol ertoe doet
      </Motion.h2>

      <Motion.p
        className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-300 font-light text-center max-w-3xl leading-relaxed"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        Onze AI-strategie heeft bruggenbouwers nodig. Jij maakt complexe technologie begrijpelijk, schaalbaar en menselijk.
      </Motion.p>
      <ScrollButton targetId="responsibilities" />

      {/* Parallax-achtergrondvisual volgt hier */}
    </Motion.section>
  );
}

