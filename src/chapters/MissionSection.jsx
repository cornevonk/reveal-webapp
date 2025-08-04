import React from 'react';
import { motion as Motion } from 'framer-motion';
import { container, item } from '../utils/motionVariants';
import WrappedSection from '../components/WrappedSection';

export default function MissionSection() {
  return (
    <WrappedSection
      id="mission"
      bgGradient="bg-white"
      initial="hidden"
      whileInView="visible"
      variants={container}
    >
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        Waarom deze rol ertoe doet
      </Motion.h2>

      <Motion.p
        className="text-xl md:text-2xl text-neutral-800 font-light text-center max-w-3xl leading-relaxed"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        Onze AI-strategie heeft bruggenbouwers nodig. Jij maakt complexe technologie begrijpelijk, schaalbaar en menselijk.
      </Motion.p>

      {/* Parallax-achtergrondvisual volgt hier */}
    </WrappedSection>
  );
}

