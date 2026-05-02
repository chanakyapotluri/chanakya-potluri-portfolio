"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Celonis Process Intelligence Platform",
    tagline: "Enterprise ETL · Process Mining · KPI Dashboards",
    description:
      "Designed end-to-end Python and SQL data pipelines to extract and transform ERP data from Cisco-integrated systems. Surfaced 4 critical bottlenecks across 50,000+ event records, reducing manual analysis overhead by 40% and informing workflow redesign decisions at the enterprise level.",
    highlights: [
      "50K+ event log records processed",
      "40% reduction in manual reporting",
      "4 bottlenecks identified & resolved",
      "ETL templates reused across 2+ workstreams",
    ],
    tags: ["Python", "SQL", "Celonis EMS", "ETL", "Process Mining", "KPI Dashboards"],
    color: "accent",
    featured: true,
  },
  {
    number: "02",
    title: "AWS Cloud File Ingestion Pipeline",
    tagline: "Cloud Infrastructure · Automated Ingestion · IAM Security",
    description:
      "Deployed a production-grade Python REST API on EC2 with S3-backed automated file ingestion. Processes 500+ files per run with IAM role-based access control, demonstrating end-to-end cloud data engineering from ingestion layer to secure storage.",
    highlights: [
      "500+ files per automated run",
      "REST API on EC2 + S3 integration",
      "IAM role-based access control",
      "Fully automated ingestion workflow",
    ],
    tags: ["Python", "AWS EC2", "S3", "REST API", "IAM", "Cloud Infra"],
    color: "accent-2",
    featured: true,
  },
  {
    number: "03",
    title: "Real-Time Traffic Violation Detection",
    tagline: "Computer Vision · YOLOv5 · Inference Optimization",
    description:
      "Built a real-time computer vision pipeline for traffic signal violation detection. Achieved 91% detection accuracy on a 2,000-frame dataset at 24 FPS, with 35% faster inference through preprocessing optimization using PyTorch and YOLOv5.",
    highlights: [
      "~91% detection accuracy",
      "24 FPS real-time processing",
      "35% inference speedup",
      "2,000-frame validation dataset",
    ],
    tags: ["Python", "YOLOv5", "OpenCV", "PyTorch", "Computer Vision"],
    color: "accent-warm",
    featured: false,
  },
  {
    number: "04",
    title: "Business in a Box — CDF Platform",
    tagline: "Full-Stack · React · Node.js · Nonprofit Tech",
    description:
      "Led end-to-end development of a small-business launch platform for a nonprofit, coordinating 10+ volunteer developers across frontend, backend, and QA tracks. Reduced inter-team bottlenecks by 30% through sprint standardization and centralized task tracking.",
    highlights: [
      "10+ developers coordinated",
      "30% reduction in blockers",
      "3 parallel workstreams delivered",
      "React + Node.js + TypeScript stack",
    ],
    tags: ["React", "Node.js", "TypeScript", "Jira", "Full-Stack", "Team Lead"],
    color: "accent",
    featured: false,
  },
];

const colorMap: Record<string, { tag: string; border: string; glow: string; num: string }> = {
  accent: {
    tag: "tag",
    border: "border-accent/20 hover:border-accent/50",
    glow: "hover:shadow-accent/10",
    num: "text-accent",
  },
  "accent-2": {
    tag: "tag tag-purple",
    border: "border-accent-2/20 hover:border-accent-2/50",
    glow: "hover:shadow-accent-2/10",
    num: "text-accent-2",
  },
  "accent-warm": {
    tag: "tag tag-warm",
    border: "border-accent-warm/20 hover:border-accent-warm/50",
    glow: "hover:shadow-accent-warm/10",
    num: "text-accent-warm",
  },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div className="stagger-1 mb-16">
        <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
          Featured Work
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
          Projects that shipped.
        </h2>
      </div>

      {/* Featured 2-col */}
      <div className="stagger-2 grid md:grid-cols-2 gap-6 mb-6">
        {featured.map((p) => {
          const c = colorMap[p.color];
          return (
            <div
              key={p.number}
              className={`group relative rounded-2xl border bg-surface p-8 transition-all duration-300 hover:shadow-2xl ${c.border} ${c.glow}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`font-display text-4xl font-extrabold opacity-20 ${c.num}`}>
                  {p.number}
                </span>
                <span className="text-xs font-mono text-muted bg-border px-2 py-1 rounded">
                  {p.tagline.split("·")[0].trim()}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-xs font-mono text-muted mb-4">{p.tagline}</p>
              <p className="text-sm text-muted font-body leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {p.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-xs text-muted">
                    <span className={`mt-0.5 flex-shrink-0 ${c.num}`}>▸</span>
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className={c.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary 2-col */}
      <div className="stagger-3 grid md:grid-cols-2 gap-6">
        {rest.map((p) => {
          const c = colorMap[p.color];
          return (
            <div
              key={p.number}
              className={`group relative rounded-2xl border bg-surface/50 p-6 transition-all duration-300 hover:bg-surface ${c.border}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`font-display text-2xl font-extrabold opacity-20 ${c.num}`}>
                  {p.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1">
                {p.title}
              </h3>
              <p className="text-xs font-mono text-muted mb-3">{p.tagline}</p>
              <p className="text-sm text-muted font-body leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className={c.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
