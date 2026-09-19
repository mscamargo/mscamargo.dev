import Image from "next/image";

const profile = {
  name: "Marcos S. Camargo",
  role: "Senior Software Engineer",
  avatar: "/avatar.jpg",
  linkedin: "https://linkedin.com/in/mscamargo",
  github: "https://github.com/mscamargo",
  email: "mscamargo.dev@gmail.com",
  showAvailability: true,
  availabilityText: "open to interesting problems",
  footer: "Design. Develop. Deliver.",
};

const strip = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function Home() {
  const links = [
    { glyph: "in", title: "LinkedIn", label: strip(profile.linkedin), href: profile.linkedin, external: true },
    { glyph: "gh", title: "GitHub", label: strip(profile.github), href: profile.github, external: true },
    { glyph: "@", title: "Email", label: profile.email, href: `mailto:${profile.email}`, external: false },
  ];

  return (
    <div className="flex min-h-dvh items-center justify-center px-6 py-[clamp(12px,3.5dvh,48px)] font-sans text-ink antialiased">
      <main className="flex w-full max-w-[460px] flex-col gap-[clamp(18px,3.5dvh,36px)]">
        <header className="flex flex-col items-center gap-[clamp(8px,1.6dvh,16px)]">
          {profile.avatar ? (
            // The portrait ships with its own recessed neumorphic well on a graphite ground,
            // so it sits directly on the page; the mask dissolves the square edges.
            <div className="relative size-[clamp(104px,calc(40dvh-134px),232px)] [mask-image:radial-gradient(closest-side,#000_86%,transparent_100%)]">
              <Image src={profile.avatar} alt={profile.name} fill sizes="232px" className="object-cover" priority />
            </div>
          ) : (
            <div className="size-26 rounded-full bg-surface p-2.5 shadow-raised-lg">
              <div
                className="flex size-full items-center justify-center rounded-full bg-surface-sunken text-muted shadow-inset-lg"
                aria-hidden
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-45"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-[clamp(10px,1.8dvh,18px)] text-center">
            <h1 className="m-0 text-[clamp(30px,5.2dvh,46px)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance text-ink-strong [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]">
              Think twice,
              <br />
              code once.
            </h1>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-base font-medium tracking-[-0.01em] text-ink-soft">{profile.name}</div>
              <div className="font-mono text-[11.5px] tracking-[0.1em] text-muted uppercase">{profile.role}</div>
            </div>
            {profile.showAvailability && (
              <div className="flex items-center gap-2 rounded-full bg-surface py-1.75 pr-3.5 pl-3 shadow-inset-sm">
                <span className="size-1.75 rounded-full bg-accent shadow-[0_0_0_3px_rgba(50,145,255,0.2)]" />
                <span className="font-mono text-[11px] tracking-[0.06em] text-muted">{profile.availabilityText}</span>
              </div>
            )}
          </div>
        </header>

        <nav className="flex flex-col gap-[clamp(10px,1.8dvh,18px)]">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener" })}
              className="grid grid-cols-[44px_1fr_auto] items-center gap-4 rounded-[20px] bg-surface px-5.5 py-[clamp(10px,1.8dvh,16px)] text-ink shadow-raised transition-[box-shadow,transform] duration-160 ease-in-out hover:-translate-y-px hover:text-ink hover:shadow-raised-hover active:translate-y-0 active:shadow-pressed"
            >
              <span
                className={`flex size-11 items-center justify-center rounded-[13px] bg-surface font-mono font-medium text-ink-icon shadow-inset-md ${link.glyph === "@" ? "text-base" : "text-[15px]"}`}
              >
                {link.glyph}
              </span>
              <span className="flex min-w-0 flex-col gap-0.75">
                <span className="text-base font-medium tracking-[-0.012em]">{link.title}</span>
                <span className="truncate font-mono text-[11.5px] text-muted">{link.label}</span>
              </span>
              <span className="text-[15px] text-muted-strong" aria-hidden>
                {link.external ? "↗" : "→"}
              </span>
            </a>
          ))}
        </nav>

        <footer className="flex items-center justify-center gap-3">
          <span className="h-px flex-1 bg-linear-to-r from-[rgba(124,131,146,0)] to-[rgba(124,131,146,0.45)]" />
          <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">{profile.footer}</span>
          <span className="h-px flex-1 bg-linear-to-r from-[rgba(124,131,146,0.45)] to-[rgba(124,131,146,0)]" />
        </footer>
      </main>
    </div>
  );
}
