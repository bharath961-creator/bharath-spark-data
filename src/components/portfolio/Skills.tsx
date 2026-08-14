import { BarChart3, Code2, Database, Wrench } from "lucide-react";
import { Reveal, Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

const iconMap = {
  code: Code2,
  database: Database,
  chart: BarChart3,
  tools: Wrench,
} as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools I work with"
      lead="The stack I use to clean, analyze and present data."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal key={group.category} delay={i * 90}>
              <div className="surface-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
