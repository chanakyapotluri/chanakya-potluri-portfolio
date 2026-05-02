"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("animate-in"), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(123,97,255,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16"
      >
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="stagger-1 flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-green-400">
                Available for hire · OPT authorized
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="stagger-2 font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white">
            I build pipelines
            <br />
            <span className="gradient-text">that don&apos;t break</span>
            <br />
            <span className="text-muted font-light text-4xl md:text-5xl">
              at 3am.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="stagger-3 text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10 font-body font-light">
            Data Engineer in Irving, TX. I design ETL infrastructure, transform
            messy enterprise data into clean analytical layers, and ship systems
            teams can actually trust.
          </p>

          {/* Metrics row */}
          <div className="stagger-4 flex flex-wrap gap-6 mb-10">
            {[
              { value: "40%", label: "Reduction in manual reporting" },
              { value: "50K+", label: "Event log records analyzed" },
              { value: "3", label: "Engineering teams led" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-accent">
                  {m.value}
                </span>
                <span className="text-xs text-muted font-mono">{m.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="stagger-5 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-6 py-3 rounded-xl bg-accent text-bg font-display font-bold text-sm tracking-wide hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 flex items-center gap-2"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-border text-sm font-display font-semibold text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Social row */}
          <div className="stagger-6 flex items-center gap-4 mt-10">
            <span className="text-xs text-subtle font-mono">FIND ME ON</span>
            <div className="h-px flex-1 max-w-16 bg-border" />
            <a
              href="https://www.linkedin.com/in/potlurichanakya"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/chanakyapotluri"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-muted">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}
