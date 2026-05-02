"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Visual */}
        <div className="stagger-1 relative">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-surface p-8 glow-accent">
            {/* Code-style profile card */}
            <div className="font-mono text-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-muted text-xs">chanakya.profile.py</span>
              </div>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="text-accent-2">class</span>{" "}
                  <span className="text-accent">DataEngineer</span>:
                </p>
                <p className="pl-4">
                  <span className="text-muted">name</span>{" "}
                  <span className="text-subtle">=</span>{" "}
                  <span className="text-green-400">
                    &quot;Chanakya Potluri&quot;
                  </span>
                </p>
                <p className="pl-4">
                  <span className="text-muted">location</span>{" "}
                  <span className="text-subtle">=</span>{" "}
                  <span className="text-green-400">&quot;Irving, TX&quot;</span>
                </p>
                <p className="pl-4">
                  <span className="text-muted">status</span>{" "}
                  <span className="text-subtle">=</span>{" "}
                  <span className="text-green-400">
                    &quot;Available · OPT Active&quot;
                  </span>
                </p>
                <p className="pl-4 mt-2">
                  <span className="text-muted">stack</span>{" "}
                  <span className="text-subtle">=</span> [
                </p>
                {[
                  "Python",
                  "SQL",
                  "AWS",
                  "ETL",
                  "dbt",
                  "Airflow",
                ].map((s) => (
                  <p key={s} className="pl-8">
                    <span className="text-yellow-400">&quot;{s}&quot;</span>,
                  </p>
                ))}
                <p className="pl-4">]</p>
                <p className="pl-4 mt-2">
                  <span className="text-muted">education</span>{" "}
                  <span className="text-subtle">=</span>{" "}
                  <span className="text-green-400">
                    &quot;M.S. Computer Science, U of Dayton&quot;
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-accent-2/10 border border-accent-2/30 rounded-xl px-4 py-2.5 backdrop-blur-sm">
            <p className="text-xs font-mono text-accent-2">Dec 2025</p>
            <p className="text-sm font-display font-bold text-white">
              M.S. Graduate
            </p>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <div className="stagger-2">
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Raw data in.
              <br />
              <span className="gradient-text-subtle">
                Reliable systems out.
              </span>
            </h2>
          </div>

          <div className="stagger-3 space-y-4 text-muted font-body font-light leading-relaxed">
            <p>
              I&apos;m a Data Engineer who cares obsessively about the stretch
              of pipe between your raw source systems and your analysts&apos;
              morning dashboards. Built with an M.S. in Computer Science and
              sharpened through real enterprise work at Celonis and Cisco.
            </p>
            <p>
              At Celonis, I dissected 50,000+ event log records, mapped process
              breakdowns across ERP-integrated systems, and cut manual reporting
              overhead by 40% with repeatable Python/SQL pipelines. Today I lead
              engineering teams building full-stack platforms while actively
              leveling up in dbt and Apache Airflow.
            </p>
            <p>
              I&apos;m drawn to roles where data infrastructure is treated as a
              core product, not an afterthought — and where my work compounds
              into better decisions at every layer of the business.
            </p>
          </div>

          <div className="stagger-4 flex flex-wrap gap-3 pt-2">
            {[
              "ETL Pipelines",
              "Data Modeling",
              "Process Mining",
              "Cloud Infra",
              "Team Leadership",
            ].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="stagger-5 pt-2">
            <a
              href="mailto:potlurichanakya@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-white transition-colors group"
            >
              potlurichanakya@gmail.com
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
          </div>
        </div>
      </div>
    </section>
  );
}
