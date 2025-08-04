import React from 'react';
import { motion as Motion } from 'framer-motion';
import WrappedSection from '../components/WrappedSection';

export default function SuperpowersSection() {
  const skills = [
    { name: 'Python & AI-automatisering', level: 75 },
    { name: 'Probleemoplossend vermogen', level: 85 },
    { name: 'Team alignment & overleg', level: 80 },
  ];

  return (
    <WrappedSection
      id="superpowers"
      gradientClass="from-green-600 to-blue-300"
      animation={{
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }}
    >
      <Motion.h2 className="text-4xl md:text-5xl font-semibold text-center mb-8">
        Waar jij in uitblinkt
      </Motion.h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill, i) => (
          <Motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.3 }}>
            <h3 className="text-lg font-medium">{skill.name}</h3>
            <div className="w-full bg-neutral-100 rounded-full h-2 mt-2 mb-1">
              <div className="bg-gradient-to-r from-sky-400 to-blue-600 h-2 rounded-full" style={{ width: `${skill.level}%` }} />
            </div>
            <span className="text-sm text-neutral-500">{skill.level}%</span>
          </Motion.div>
        ))}
      </div>
    </WrappedSection>
  );
}
