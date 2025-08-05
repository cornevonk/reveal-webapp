import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa6';

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
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return (
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      );
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-4">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="w-10 h-10 flex items-center justify-center rounded-full border bg-white text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
      <ul className="space-y-2">
        {sectionIds.map((id) => (
          <li key={id}>
            <Motion.button
              type="button"
              aria-label={`Go to ${id} section`}
              className={`w-3 h-3 rounded-full border cursor-pointer ${
                active === id
                  ? 'bg-teal-500 border-teal-500 dark:bg-teal-400 dark:border-teal-400'
                  : 'bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
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
