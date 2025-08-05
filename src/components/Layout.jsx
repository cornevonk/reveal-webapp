import React from 'react';

// Layout component that supports constrained or full-width sections
// with responsive padding. Use the `fullWidth` prop to stretch the
// layout to the viewport edges.
export default function Layout({ children, fullWidth = false, className = '' }) {
  const base = fullWidth ? 'w-full' : 'max-w-4xl mx-auto';
  return (
    <div
      className={`${base} px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
    >
      {children}
    </div>
  );
}
