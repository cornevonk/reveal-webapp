import React from 'react';
import { motion as Motion } from 'framer-motion';
import WrappedSection from '../components/WrappedSection';

export default function GrowthSection() {
  const timeline = [
    ['Maand 3', 'Je AI-pipelines draaien. Je hebt processen gestroomlijnd en vertrouwen opgebouwd in het team.'],
    ['Maand 6', 'Je koppelt de AI-inzichten direct aan klantfeedback. Jouw werk maakt zichtbaar verschil.'],
    ['Maand 12', 'Je leidt een transformatie-initiatief. Het team werkt op jouw stack.'],
    ['Maand 24', 'Je rol is uitgegroeid tot thought leader binnen Cum Laude.'],
  ];

  return (
    <WrappedSection
      id="growth"
      gradientClass="from-indigo-500 to-purple-500"
      animation={{
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.7 },
      }}
    >
      <Motion.h2 className="text-4xl md:text-5xl font-semibold text-center mb-8">
        De impact die jij maakt
      </Motion.h2>
      <div className="max-w-3xl mx-auto space-y-16">
        {timeline.map(([month, text], i) => (
          <Motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.3 }}>
            <h4 className="text-2xl font-semibold mb-2">{month}</h4>
            <p className="text-neutral-600 leading-relaxed">{text}</p>
          </Motion.div>
        ))}
      </div>
    </WrappedSection>
  );
}