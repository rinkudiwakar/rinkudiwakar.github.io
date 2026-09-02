import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background-subtle)] text-[var(--foreground)] transition-colors duration-200">
      <div className="container-editorial py-16 md:py-24 space-y-16">
        {/* Epilogue Banner / Story Conclusion */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
            Epilogue
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-[var(--foreground)]">
            The story isn’t finished.
          </h2>
          <p className="text-base md:text-lg text-[var(--foreground-muted)] font-normal leading-relaxed">
            Maybe you can be part of the next chapter. Whether you want to build
            high-leverage AI workflows with Pradrix, collaborate on an ambitious
            engineering problem, or just talk systems — let’s connect.
          </p>

          {/* Connection Channels */}
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Work With Me</span>
            </Link>
            <Link
              href="/pradrix"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--border)] font-medium text-sm transition-all"
            >
              <span>Explore Pradrix</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--foreground-muted)]" />
            </Link>
          </div>
        </div>

        {/* Navigation & Link Grid */}
        <nav aria-label="Footer navigation" className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[var(--border)]">
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="font-display font-bold text-base text-[var(--foreground)]">
              Rinku Diwakar
            </div>
            <p className="text-xs text-[var(--foreground-muted)] leading-relaxed font-body">
              A living builder’s journal. Turning “What if?” into “It actually
              works.”
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
              Explore
            </div>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Work & Ventures */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
              Builds
            </div>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
              <li>
                <Link
                  href="/pradrix"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Pradrix
                </Link>
              </li>
              <li>
                <Link
                  href="/work/kavach"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Kavach (Voice AI Lock)
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Résumé
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sourced Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)] font-mono">
              <li>
                <a
                  href="https://github.com/rinkudiwakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--foreground-subtle)]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rinkudiwakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--foreground-subtle)]" />
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Form</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--foreground-subtle)]">
          <div>
            © {new Date().getFullYear()} Rinku Diwakar · rinkudiwakar.me
          </div>
          <div className="flex items-center gap-4">
            <span>Editorial + Developer + Cinematic</span>
            <span>·</span>
            <span>Server-First Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
