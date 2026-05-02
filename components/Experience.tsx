"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    id: "cdf",
    role: "Software Department Lead",
    company: "Community Dreams Foundation",
    period: "Feb 2026 – Present",
    type: "Volunteer · Remote",
    color: "accent",
    bullets: [
      "Lead three cross-functional engineering teams (10+ developers) across frontend, backend, and QA, running weekly sprint reviews that keep delivery velocity on track.",
      "Cut inter-team bottlenecks by ~30% by standardizing daily standups and centralizing task tracking in Jira — improved on-time milestone delivery across 3 parallel workstreams.",
      "Architected the 'Business in a Box' platform on Lovable using React, Node.js, and TypeScript; translated nonprofit stakeholder requirements into user stories with clear acceptance criteria.",
      "Built RESTful APIs and React UI components that accelerated feature onboarding and set repeatable patterns for new volunteer developers joining mid-sprint.",
    ],
  },
  {
    id: "celonis",
    role: "Data Analytics & Process Mining Intern",
    company: "Celonis / Cisco",
    period: "May 2024 – Aug 2024",
    type: "Internship · Hyderabad",
    color: "accent-2",
    bullets: [
      "Engineered Python and SQL data pipelines to extract, cleanse, and transform enterprise ERP data, cutting manual reporting effort by ~40% across key operational workflows.",
      "Analyzed 50,000+ event log records on the Celonis EMS platform, surfacing 4 critical process bottlenecks that directly informed workflow redesign recommendations.",
      "Documented data lineage and authored reusable ETL templates that were adopted by 2 additional project workstreams within the analytics team.",
      "Delivered KPI dashboards and action views that gave stakeholders real-time visibility into process health, enabling data-driven decisions without waiting for manual reports.",
    ],
  },
  {
    id: "uod",
    role: "Student Manager",
    company: "University of Dayton",
    period: "Aug 2024 – Dec 2025",
    type: "Part-time · On-campus",
    color: "accent-warm",
    bullets: [
      "Led and trained student team members while resolving operational and technical issues in real time across campus facilities.",
      "Supported troubleshooting of POS and operational systems; recognized by supervisors for leadership and problem-solving under pressure.",
      "Optimized workflows and resource allocation during summer operations to improve efficiency and reduce costs.",
    ],
  },
];

const colorMap: Record<string, { dot: string; line: string; tag: string }> = {
  accent: { dot: "bg-accent", line: "border-accent/30", tag: "tag" },
  "accent-2": { dot: "bg-accent-2", line: "border-accent-2/30", tag: "tag tag-purple" },
  "accent-warm": { dot: "bg-accent-warm", line: "border-accent-warm/30", tag: "tag tag-warm" },
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState("celonis");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const current = experiences.find((e) => e.id === active)!;
  const c = colorMap[current.color];

  return (
    <section id="experience" ref={ref} className="py-28 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="stagger-1 mb-16">
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
            Career History
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Where I&apos;ve worked.
          </h2>
        </div>

        <div className="stagger-2 grid md:grid-cols-3 gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col gap-2">
            {experiences.map((e) => {
              const ec = colorMap[e.color];
              return (
                <button
                  key={e.id}
                  onClick={() => setActive(e.id)}
                  className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                    active === e.id
                      ? `border-${e.color}/40 bg-${e.color}/5`
                      : "border-transparent hover:border-border hover:bg-surface"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${active === e.id ? ec.dot : "bg-subtle"}`}
                    />
                    <span
                      className={`text-sm font-display font-bold ${active === e.id ? "text-white" : "text-muted"}`}
                    >
                      {e.company}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-muted ml-3.5">{e.period}</p>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div key={active} className={`md:col-span-2 rounded-2xl border ${c.line} bg-surface p-8`}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {current.role}
                </h3>
                <p className={`text-sm font-mono ${c.tag.includes("purple") ? "text-accent-2" : c.tag.includes("warm") ? "text-accent-warm" : "text-accent"}`}>
                  {current.company}
                </p>
              </div>
              <span className="tag text-xs">{current.type}</span>
            </div>

            <ul className="space-y-4">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
