"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    icon: "⌨",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 88 },
      { name: "TypeScript", level: 72 },
      { name: "JavaScript", level: 70 },
    ],
    color: "accent",
  },
  {
    label: "Data Engineering",
    icon: "⚙",
    skills: [
      { name: "ETL Pipelines", level: 85 },
      { name: "Data Modeling", level: 80 },
      { name: "Process Mining", level: 90 },
      { name: "dbt (Learning)", level: 55 },
      { name: "Apache Airflow (Learning)", level: 50 },
    ],
    color: "accent-2",
  },
  {
    label: "Cloud & Infra",
    icon: "☁",
    skills: [
      { name: "AWS EC2 / S3", level: 78 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "Docker (Basics)", level: 50 },
    ],
    color: "accent-warm",
  },
  {
    label: "Frameworks & Tools",
    icon: "🔧",
    skills: [
      { name: "React", level: 78 },
      { name: "Node.js", level: 72 },
      { name: "Celonis EMS", level: 88 },
      { name: "Git", level: 80 },
    ],
    color: "accent",
  },
];

const certifications = [
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services" },
  { name: "AWS Academy Machine Learning Foundations", issuer: "Amazon Web Services" },
  { name: "AWS Academy Data Analytics", issuer: "Amazon Web Services" },
  { name: "Academic Process Mining Fundamentals", issuer: "Celonis" },
  { name: "MTA: Introduction to Python", issuer: "Microsoft" },
  { name: "Cybersecurity Essentials", issuer: "Cisco" },
];

const barColors: Record<string, string> = {
  accent: "bg-accent",
  "accent-2": "bg-accent-2",
  "accent-warm": "bg-accent-warm",
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          // Animate skill bars
          const bars = entry.target.querySelectorAll<HTMLElement>(".skill-bar");
          bars.forEach((bar) => {
            const target = bar.getAttribute("data-level") || "0";
            setTimeout(() => {
              bar.style.width = target + "%";
            }, 300);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div className="stagger-1 mb-16">
        <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
          Technical Arsenal
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
          What I work with.
        </h2>
      </div>

      {/* Skill bars grid */}
      <div className="stagger-2 grid md:grid-cols-2 gap-8 mb-16">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">{group.icon}</span>
              <h3 className="font-display text-base font-bold text-white">
                {group.label}
              </h3>
            </div>
            <div className="space-y-4">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-mono text-muted">{s.name}</span>
                    <span className="text-xs font-mono text-subtle">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`skill-bar h-full rounded-full transition-all duration-1000 ease-out ${barColors[group.color]}`}
                      data-level={s.level}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="stagger-3">
        <p className="text-xs font-mono text-muted tracking-widest uppercase mb-6">
          Certifications
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex items-start gap-3 p-4 rounded-xl border border-border hover:border-accent/30 bg-surface/50 hover:bg-surface transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-body font-medium text-white leading-tight group-hover:text-accent transition-colors">
                  {cert.name}
                </p>
                <p className="text-xs font-mono text-muted mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
