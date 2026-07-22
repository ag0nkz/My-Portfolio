'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  speed: number;
};

const PARTICLE_COUNT = 110;

export function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false,
    });

    if (!context) {
      return;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let particles: Particle[] = [];
    let pointerX = 0;
    let pointerY = 0;
    let pointerActive = false;

    const resize = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const baseX = Math.random() * width;
        const baseY = Math.random() * height;

        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: 0,
          vy: 0,
          radius: 1.6 + Math.random() * 2.8,
          hue: 175 + (index % 12) * 2,
          speed: 0.25 + Math.random() * 0.55,
        };
      });
    };

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerActive = true;
    };

    const handlePointerLeave = () => {
      pointerActive = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      pointerX = touch.clientX;
      pointerY = touch.clientY;
      pointerActive = true;
    };

    const handleTouchEnd = () => {
      pointerActive = false;
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      context.save();
      context.globalCompositeOperation = 'lighter';

      for (const particle of particles) {
        const targetX = particle.baseX + Math.sin((particle.baseY + performance.now() * 0.02) * 0.004) * 14;
        const targetY = particle.baseY + Math.cos((particle.baseX + performance.now() * 0.02) * 0.004) * 14;

        let forceX = (targetX - particle.x) * 0.004;
        let forceY = (targetY - particle.y) * 0.004;

        const driftX = (centerX - particle.x) * 0.0001;
        const driftY = (centerY - particle.y) * 0.0001;

        forceX += driftX;
        forceY += driftY;

        if (pointerActive) {
          const dx = particle.x - pointerX;
          const dy = particle.y - pointerY;
          const distance = Math.max(Math.hypot(dx, dy), 48);
          const radius = 220;

          if (distance < radius) {
            const intensity = (radius - distance) / radius;
            const repulsion = intensity * intensity * 2.1;
            forceX += (dx / distance) * repulsion;
            forceY += (dy / distance) * repulsion;
          }
        }

        particle.vx = (particle.vx + forceX) * 0.95;
        particle.vy = (particle.vy + forceY) * 0.95;
        particle.x += particle.vx * particle.speed;
        particle.y += particle.vy * particle.speed;

        const alpha = 0.14 + Math.min(Math.hypot(particle.vx, particle.vy) * 0.18, 0.36);

        const gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 7);
        gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 68%, ${alpha})`);
        gradient.addColorStop(1, 'hsla(175, 90%, 60%, 0)');

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 7, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `hsla(${particle.hue}, 90%, 75%, ${Math.min(alpha + 0.1, 0.48)})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    animationFrame = window.requestAnimationFrame(render);

    window.addEventListener('resize', resize);

    if (isFinePointer) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    } else {
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
      window.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);

      if (isFinePointer) {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerleave', handlePointerLeave);
      } else {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('touchcancel', handleTouchEnd);
      }
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
}