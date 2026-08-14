import { ExternalLink, Github, Clock } from "lucide-react";
import { Reveal, Section } from "./Section";
import { projects } from "@/data/portfolio";
import salesImg from "@/assets/project-sales.jpg";
import churnImg from "@/assets/project-churn.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";

const images = {
  sales: salesImg,
  churn: churnImg,
  dashboard: dashboardImg,
} as const;

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Selected projects"
      lead="Hands-on analysis work built with Python, SQL and BI tools."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 90}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <article className="surface-card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <div className="relative aspect-16/9 overflow-hidden border-b border-border">
                <img
                  src={images[project.image]}
                  alt={`${project.title} project visual`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/20 to-transparent" />
                {project.status && (
                  <span className="glass absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-primary">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {project.status}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-primary/25 bg-primary/8 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3 pt-1">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <Github className="size-4" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2.5 text-sm text-muted-foreground">
                      Repository coming soon
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
