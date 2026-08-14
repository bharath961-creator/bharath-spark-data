import { Award, ExternalLink } from "lucide-react";
import { Reveal, Section } from "./Section";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="04 — Certificates"
      title="Certifications & courses"
      lead="Programs I've completed while building my analytics foundation."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 70}>
            <article className="surface-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              {cert.date && (
                <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.date}</p>
              )}
              <div className="mt-6 pt-1">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    View Certificate
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Certificate link coming soon</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
