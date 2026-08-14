import { Download, FileText } from "lucide-react";
import { Reveal } from "./Section";
import { resumeUrl } from "@/data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="section-pad scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="surface-card relative isolate overflow-hidden rounded-3xl p-8 text-center sm:p-14">
            <div aria-hidden="true" className="absolute inset-0 -z-10 hero-glow opacity-80" />
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary mx-auto">
              <FileText className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-balance sm:text-4xl">
              Want to know more about my work?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Download my resume to explore my skills, projects, certifications and education.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
