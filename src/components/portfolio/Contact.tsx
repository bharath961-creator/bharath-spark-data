import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Section } from "./Section";
import { contactEmail, contactPhone, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name (min. 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Please enter a valid email address.";
    if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message.");
    setValues({ name: "", email: "", message: "" });
  };

  const field =
    "w-full rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's Connect"
      lead="Interested in discussing data, analytics, projects or opportunities? I'd be happy to connect."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1fr]">
        <Reveal>
          <ul className="space-y-4">
            {[
              { label: "Email", value: contactEmail, href: socials.email, Icon: Mail },
              { label: "Phone", value: `+91 ${contactPhone}`, href: socials.phone, Icon: Phone },
              {
                label: "LinkedIn",
                value: "bharath-reddy-dasari",
                href: socialIn.linkedin,
                Icon: Linkedin,
              },
              { label: "GitHub", value: "bharath961-creator", href: socials.github, Icon: Github },
            ].map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="surface-card flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={90}>
          <form onSubmit={onSubmit} noValidate className="surface-card rounded-3xl p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your name"
                  className={cn(field, errors.name && "border-destructive")}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@example.com"
                  className={cn(field, errors.email && "border-destructive")}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell me about the role, project or dataset…"
                  className={cn(field, "resize-y", errors.message && "border-destructive")}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Send className="size-4" aria-hidden="true" />
                Send Message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
