export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted">
          © {new Date().getFullYear()} Chanakya Potluri · Data Engineer
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/chanakyapotluri"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/potlurichanakya"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:potlurichanakya@gmail.com"
            className="text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-xs font-mono text-subtle hidden sm:block">
          Built with Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
