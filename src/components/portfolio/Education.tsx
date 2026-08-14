import { GraduationCap } from "lucide-react";
import { Reveal, Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Education">
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {education.map((item, i) => (
          <li key={item.degree}>
            <Reveal delay={i * 80}>
              <span
                className="absolute -left-[9px] grid size-[18px] place-items-center rounded-full bg-primary"
                aria-hidden="true"
              />
              <div className="surface-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold sm:text-xl">{item.degree}</h3>
                  </div>
                  <span className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 font-mono text-xs text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-foreground/90">{item.school}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
