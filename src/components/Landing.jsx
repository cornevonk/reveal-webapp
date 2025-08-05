import { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import Layout from './Layout';

export default function Landing() {
  const canvasRef = useRef(null);

  // Simple particle animation for the background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleClick = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true },
  };

  return (
    <Layout fullWidth>
      <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        id="landing"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Motion.h1 className="headline text-gradient" {...motionProps}>
            Full Stack AI Developer
          </Motion.h1>
          <Motion.p className="subheader text-neutral-200" {...motionProps}>
            De sleutelrol in onze AI-transformatie.
          </Motion.p>
          <Motion.p className="body-text text-neutral-300" {...motionProps}>
            Jouw 2024 Wrapped job journey start hier
          </Motion.p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Motion.button
              onClick={handleClick}
              className="btn btn-primary"
              {...motionProps}
            >
              Explore my dream job
            </Motion.button>
            <Motion.button
              onClick={handleClick}
              className="btn btn-outline"
              {...motionProps}
            >
              Learn more
            </Motion.button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
