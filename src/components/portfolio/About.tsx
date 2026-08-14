import { Compass, GraduationCap, MapPin, Target } from "lucide-react";
import { Reveal, Section } from "./Section";
import { highlights, profile } from "@/data/portfolio";

const icons = [GraduationCap, Compass, MapPin, Target];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            My focus right now is practical: writing clean SQL queries, exploring datasets with
            Python and Pandas, and designing dashboards in Power BI and Excel that answer a real
            business question instead of just showing numbers.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={item.label} delay={i * 80}>
                <div className="surface-card group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">{item.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
