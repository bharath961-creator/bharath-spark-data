import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { DataBackdrop } from "./DataBackdrop";
import { profile, resumeUrl, socials } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <DataBackdrop />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <p
            className="glass animate-rise-in inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary uppercase"
            style={{ animationDelay: "60ms" }}
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Open to Data Analyst internships
          </p>

          <h1
            className="animate-rise-in mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "140ms" }}
          >
            {profile.name.toUpperCase()}
          </h1>

          <p
            className="animate-rise-in mt-5 text-2xl font-semibold sm:text-3xl"
            style={{ animationDelay: "220ms" }}
          >
            <span className="text-gradient">{profile.role}</span>
          </p>

          <p
            className="animate-rise-in mt-2 font-mono text-sm text-muted-foreground sm:text-base"
            style={{ animationDelay: "280ms" }}
          >
            {profile.stack}
          </p>

          <p
            className="animate-rise-in mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90 sm:text-xl"
            style={{ animationDelay: "340ms" }}
          >
            {profile.tagline}
          </p>
          <p
            className="animate-rise-in mt-4 max-w-2xl leading-relaxed text-muted-foreground"
            style={{ animationDelay: "400ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="animate-rise-in mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "460ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              View My Projects
              <ArrowDown className="size-4" />
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>

          <ul
            className="animate-rise-in mt-10 flex items-center gap-3"
            style={{ animationDelay: "520ms" }}
          >
            {[
              { href: socials.github, label: "GitHub", Icon: Github },
              { href: socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: socials.email, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
