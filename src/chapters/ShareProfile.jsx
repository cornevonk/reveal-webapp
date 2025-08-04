import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaDownload } from 'react-icons/fa';

export default function ShareProfile() {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    window.open(shareUrl, '_blank', 'noopener');
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`Check out my profile: ${window.location.href}`);
    const shareUrl = `https://wa.me/?text=${text}`;
    window.open(shareUrl, '_blank', 'noopener');
  };

  const handleDownload = async () => {
    try {
      const html2canvas = (await import('https://esm.sh/html2canvas')).default;
      const node = document.getElementById('share');
      if (!node) return;
      const canvas = await html2canvas(node);
      const link = document.createElement('a');
      link.download = 'profile.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to download image', error);
    }
  };

  return (
    <section
      id="share"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center"
    >
      <Motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Deel je profiel met de wereld
      </Motion.h2>
      <Motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          <Motion.button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLinkedInShare}
            aria-label="Deel op LinkedIn"
          >
            <FaLinkedin />
            LinkedIn
          </Motion.button>
        </div>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          <Motion.button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppShare}
            aria-label="Deel via WhatsApp"
          >
            <FaWhatsapp />
            WhatsApp
          </Motion.button>
        </div>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          <Motion.button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            aria-label="Download profiel als PNG"
          >
            <FaDownload />
            Download PNG
          </Motion.button>
        </div>
      </Motion.div>
      <p className="mt-6 text-lg font-medium bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
        Laat zien dat jij de AI-held bent!
      </p>
    </section>
  );
}