import { Github, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
        </div>

        <ul className="flex items-center gap-3">
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
                className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
