import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

// All sections that should be tracked by the progress navigation
const sectionIds = [
  'landing',
  'intro',
  'mission',
  'responsibilities',
  'superpowers',
  'growth',
  'cta',
  'share'
];

// Vertical progress navigation that highlights the current section
// based on IntersectionObserver
export default function ProgressNav() {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      <ul className="space-y-2">
        {sectionIds.map((id) => (
          <li key={id}>
            <Motion.button
              type="button"
              aria-label={`Go to ${id} section`}
              className={`w-3 h-3 rounded-full border cursor-pointer ${
                active === id
                  ? 'bg-teal-500 border-teal-500'
                  : 'bg-gray-200 border-gray-300'
              }`}
              animate={{ scale: active === id ? 1.2 : 1 }}
              onClick={() => handleClick(id)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
