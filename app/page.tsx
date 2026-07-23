'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  PanelTop,
  Phone,
  Sparkles,
  SquareArrowOutUpRight,
  X,
} from 'lucide-react';
import { AntigravityBackground } from '../components/antigravity-background';
import { InstallPrompt } from '../components/install-prompt';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const techSections = [
  {
    title: 'Core Framework & Frontend',
    icon: PanelTop,
    items: [
      'Next.js (App Router): Full-stack React framework providing server-side rendering (SSR), API routes, and optimized routing.',
      'React: Component-based UI library.',
      'TypeScript: Type-safe development across the entire client and server codebase.',
    ],
  },
  {
    title: 'PWA Integration',
    icon: Sparkles,
    items: [
      'PWA Capabilities (next-pwa / Web App Manifest): Configured as a Progressive Web App enabling installability on mobile/desktop, service worker caching, and offline access.',
    ],
  },
  {
    title: 'Extended Technical Proficiencies',
    icon: Code2,
    items: ['Node.js', 'SQL', 'LLM Integration & Multi-Agent AI Frameworks', 'React Native'],
  },
];

const experiences = [
  {
    role: 'IT Intern',
    company: 'GNnets Construction Corp.',
    period: 'Feb 2026 – Apr 2026',
    points: [
      'Co-developed and deployed web-based inventory and accounting systems using React Native and Node.js.',
      'Worked in an agile team to deliver functional software used in active corporate operations.',
    ],
  },
  {
    role: 'IT Intern',
    company: 'Boltimizer Corp.',
    period: 'Sep 2025 – Nov 2025',
    points: [
      'Diagnosed and resolved enterprise software, hardware, and operational technical issues.',
      'Designed company layouts, presentations, and video editing for social ad campaigns.',
    ],
  },
];

const projects = [
  {
    name: 'Synthia (AI-Powered Mobile & PWA)',
    description:
      'Intelligent cross-platform PWA and mobile application leveraging LLMs and multi-agent AI frameworks for automated meeting documentation, real-time transcription, and workflow management.',
    tags: ['Next.js App Router', 'React Native', 'TypeScript', 'AI / LLM Agents', 'next-pwa'],
    github: 'https://github.com/ag0nkz/Synthia-Finale',
  },
  {
    name: 'Warehouse Inventory System',
    description:
      'Web-based inventory system co-developed during OJT to manage stock tracking and operational logs.',
    tags: ['React Native', 'Node.js', 'SQL', 'Tailwind CSS'],
    github: 'https://github.com/ag0nkz/GNNETS-Inventory-System',
  },

];

const education = [
  'BS in Information Technology — Quezon City University (2018 – 2026)',
  'Accountancy and Business Management (ABM) — APEC Schools (2016 – 2018)',
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <AntigravityBackground />
      <InstallPrompt />
      <div className="relative z-10">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute inset-0 section-grid opacity-30" />
        </div>

        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="#hero" className="group inline-flex items-center gap-2 text-lg font-semibold tracking-wide text-slate-50">
              Emil Molina.
              <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.8)]" />
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-teal-300">
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 md:hidden sm:px-6">
              <div className="mx-auto flex max-w-6xl flex-col gap-3">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
              <BadgeCheck size={14} />
              Aspiring AI Engineer & Software Developer
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-7xl">
                Crafting intelligent systems & full-stack web solutions.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m Emil Jonathan C. Molina, an Information Technology graduate specializing in building modern web applications, integrating AI agents, and engineering functional software systems.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="https://github.com/ag0nkz" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">
                <Github size={16} />
                GitHub Profile
                <ArrowUpRight size={16} />
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-400/60 hover:text-teal-300">
                Contact
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2">
                <MapPin size={14} className="text-teal-300" />
                Quezon City, Philippines
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2">
                <Mail size={14} className="text-teal-300" />
                molina.emiljonathan.c@gmail.com
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2rem] border border-teal-400/20 bg-teal-400/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-4 shadow-glow">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
                <Image
                  src="/EFP02700.JPG"
                  alt="Emil Jonathan C. Molina"
                  width={720}
                  height={880}
                  priority
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center ring-1 ring-teal-400/20 shadow-[0_18px_60px_rgba(2,6,23,0.65)]"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
                  <p className="mt-2 text-sm text-slate-200">AI systems, modern web apps, and production-ready PWA experiences.</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Stack</p>
                  <p className="mt-2 text-sm text-slate-200">Next.js, React, TypeScript, Node.js, SQL, React Native.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-teal-300">
            <Sparkles size={14} />
            About
          </div>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            I build interfaces and systems that are practical, performant, and easy to maintain. My work blends product-minded frontend development with AI integration and operational software delivery.
          </p>
        </div>
      </section>

      <section id="tech-stack" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Tech Stack</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">Architecture built for shipping.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {techSections.map((section) => {
              const Icon = section.icon;

              return (
                <article key={section.title} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 shadow-glow">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-50">{section.title}</h3>
                  </div>

                  <div className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Experience</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">Hands-on delivery in production environments.</h2>
          </div>

          <div className="relative space-y-6 border-l border-slate-800 pl-6">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="relative rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 shadow-glow">
                <span className="absolute -left-[2.05rem] top-7 h-4 w-4 rounded-full border border-teal-400 bg-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.8)]" />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-teal-300">{experience.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-50">
                      {experience.role} @ {experience.company}
                    </h3>
                  </div>
                  <BriefcaseBusiness className="text-teal-300" size={20} />
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Featured Projects</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">Selected work across AI, mobile, and systems.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="flex h-full flex-col rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 shadow-glow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-50">{project.name}</h3>
                  <Link href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 text-teal-300 transition hover:border-teal-400 hover:bg-teal-400/10">
                    <SquareArrowOutUpRight size={16} />
                  </Link>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <Link href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition hover:text-teal-200">
                    View on GitHub
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Education</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">Academic foundation.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article key={item} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <GraduationCap size={18} />
                  </span>
                  <p className="text-base font-semibold text-slate-100">{item}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-12 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-teal-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-glow sm:p-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">Let&apos;s Connect</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Available for collaboration on AI products, full-stack applications, and mobile experiences.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 text-sm text-slate-200 sm:flex-row">
              <a href="mailto:molina.emiljonathan.c@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-5 py-3 transition hover:border-teal-400 hover:text-teal-300">
                <Mail size={16} />
                molina.emiljonathan.c@gmail.com
              </a>
              <a href="tel:+09928616799" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-5 py-3 transition hover:border-teal-400 hover:text-teal-300">
                <Phone size={16} />
                +09928616799
              </a>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-5 py-3 text-slate-300">
                <MapPin size={16} />
                Quezon City, Philippines
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}