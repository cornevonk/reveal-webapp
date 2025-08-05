import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FaHome,
  FaInfoCircle,
  FaBullseye,
  FaTasks,
  FaBolt,
  FaChartLine,
  FaBullhorn,
  FaShareAlt,
} from 'react-icons/fa';

const sections = [
  { id: 'landing', icon: FaHome, label: 'Start' },
  { id: 'intro', icon: FaInfoCircle, label: 'Intro' },
  { id: 'mission', icon: FaBullseye, label: 'Mission' },
  { id: 'responsibilities', icon: FaTasks, label: 'Responsibilities' },
  { id: 'superpowers', icon: FaBolt, label: 'Superpowers' },
  { id: 'growth', icon: FaChartLine, label: 'Growth' },
  { id: 'cta', icon: FaBullhorn, label: 'Call to Action' },
  { id: 'share', icon: FaShareAlt, label: 'Share' },
];

export default function ProgressNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      <ul className="relative flex flex-col items-center space-y-6">
        <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-300" />
        {sections.map(({ id, icon: Icon, label }) => (
          <li key={id} className="relative">
            {active === id && (
              <Motion.span
                layoutId="progress-marker"
                className={
                  'absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-sky-500 ' +
                  'bg-sky-500/20'
                }
              />
            )}
            <button
              type="button"
              aria-label={`Go to ${label}`}
              onClick={() => handleClick(id)}
              className={
                'group relative flex items-center justify-center w-6 h-6 text-lg text-gray-400 ' +
                'hover:text-sky-500 transition-colors'
              }
            >
              <Icon />
              <span
                className={
                  'pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 ' +
                  'text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity'
                }
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

