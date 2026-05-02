"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-28 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative top */}
        <div className="stagger-1 flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Let&apos;s Work Together
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
        </div>

        <h2 className="stagger-2 font-display text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Let&apos;s build something
          <br />
          <span className="gradient-text">worth measuring.</span>
        </h2>

        <p className="stagger-3 text-lg text-muted font-body font-light max-w-xl mx-auto mb-10 leading-relaxed">
          I&apos;m actively seeking Data Engineer, Analytics Engineer, and
          Python Developer roles. If you&apos;re building data infrastructure
          that matters, I&apos;d love to contribute.
        </p>

        {/* CTA */}
        <div className="stagger-4 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:potlurichanakya@gmail.com"
            className="group px-8 py-4 rounded-xl bg-accent text-bg font-display font-bold tracking-wide hover:bg-accent/90 transition-all duration-200 hover:shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            potlurichanakya@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/potlurichanakya"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl border border-border text-white font-display font-semibold hover:border-accent-2/40 hover:bg-accent-2/5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Info chips */}
        <div className="stagger-5 flex flex-wrap justify-center gap-4">
          {[
            { icon: "📍", text: "Irving, TX" },
            { icon: "⚡", text: "OPT Active — No Sponsorship Needed" },
            { icon: "🎓", text: "M.S. Computer Science" },
            { icon: "🔍", text: "Open to Remote & Hybrid" },
          ].map((chip) => (
            <div
              key={chip.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm text-muted"
            >
              <span>{chip.icon}</span>
              <span className="font-mono text-xs">{chip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
