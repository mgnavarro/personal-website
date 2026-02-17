import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  FileText,
  Github,
  Linkedin,
  Telescope,
  BookOpen,
  Mic,
  Code2,
  Sparkles,
  ChevronRight,
  Search,
  Orbit,
  Rocket,
  Brain,
  Network,
} from "lucide-react";

/**
 * Personal Website – single-file React component
 * - TailwindCSS utility classes
 * - Framer Motion for subtle animations
 * - Clean, modern, “research-first” portfolio layout
 *
 * Replace the data in `PROFILE` and arrays below with your info.
 */

const PROFILE = {
  name: "Maria Gabriela Navarro",
  tagline:
  "INAF Postdoctoral Researcher • EU NextGenerationEU (M4C2 1.2) Fellow • TRACE: Environmental Effects on Star and Planet Formation",
  location: "INAF – Osservatorio Astronomico di Roma (OAR)",
  availability: "NextGenerationEU M4C2 Fellow",
  email: "maria.navarro@inaf.it",
  links: {
    cv: "/Maria_Gabriela_Navarro_CV.pdf",
    orcid: "https://orcid.org/0000-0002-1860-2304",
    ads: "https://ui.adsabs.harvard.edu/public-libraries/fdW9uc_qTk-C04MxXXN88A",
    github: "#",
    linkedin: "#",
  },
};

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "Research focus",
  desc: "environmental impact on disk evolution and planet formation (TRACE); young stellar objects and jet diagnostics; Milky Way formation and structure via stellar populations and transients (RR Lyrae, microlensing).",
  },
  {
    icon: Telescope,
  title: "Telescopes & Surveys",
  desc: "JWST (NIRSpec/MIRI); ESO-KMOS spectroscopy; VVV/VVVX near-IR surveys; multi-wavelength photometry and spectroscopy.",
  },
  {
    icon: Orbit,
    title: "Current projects",
    desc: "Tracing the staR and plAnet formation in different Circumstellar Environments (TRACE); VVVX–GalCen KMOS Public Survey",
  },
];



const FEATURED = [
  {
    title: "VVVX–GalCen KMOS Public Survey",
    kind: "Survey / Collaboration",
    year: "2025–2028",
    blurb:
      "Near-IR spectroscopy across the Galactic Center environment to map stellar populations, kinematics, and extinction in extreme conditions.",
    tags: ["KMOS", "VVVX", "Bulge", "Spectroscopy"],
    href: "#",
  },
  {
    title: "JWST: H₂ in Class 0 outflows",
    kind: "JWST Analysis",
    year: "2024–present",
    blurb:
      "Rotational diagnostics and shock constraints in the innermost jet-launching regions using NIRSpec IFU and MIRI mosaics.",
    tags: ["JWST", "NIRSpec", "MIRI", "Shocks"],
    href: "#",
  },
  {
    title: "Bulge stellar populations",
    kind: "Milky Way",
    year: "ongoing",
    blurb:
      "Population synthesis & photometric–spectroscopic synergy to characterize bulge formation channels and metallicity gradients.",
    tags: ["Bulge", "Populations", "Extinction", "Kinematics"],
    href: "#",
  },
];

const PUBLICATIONS = [
  {
    year: "2026",
    title: "Paper title goes here",
    venue: "Journal / arXiv",
    authors: "Navarro, M.G.; et al.",
    href: "#",
  },
  {
    year: "2025",
    title: "Paper title goes here",
    venue: "Journal / arXiv",
    authors: "Navarro, M.G.; et al.",
    href: "#",
  },
  {
    year: "2024",
    title: "Paper title goes here",
    venue: "Journal / arXiv",
    authors: "Navarro, M.G.; et al.",
    href: "#",
  },
];

const TALKS = [
  {
    date: "2026-02",
    title: "Talk title",
    where: "Conference / Institute",
    href: "#",
  },
  {
    date: "2025-10",
    title: "Seminar title",
    where: "Seminar series",
    href: "#",
  },
];

const SOFTWARE = [
  {
    title: "Analysis pipeline",
    desc: "JWST spectral extraction + line mapping + diagnostics.",
    tags: ["Python", "Astropy", "JWST"],
    href: "#",
  },
  {
    title: "Shock model fitting",
    desc: "Bayesian fitting of grids; quicklook plots & tables.",
    tags: ["emcee", "SciPy", "reproducible"],
    href: "#",
  },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
      {children}
    </span>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function External({ href, children }) {
  return (
    <a
      href={href}
      target={href?.startsWith("#") ? "_self" : "_blank"}
      rel="noreferrer"
      className="group inline-flex items-center gap-1 text-white/80 hover:text-white transition"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition" />
    </a>
  );
}

function TopNav() {
  const items = [
    { id: "about", label: "About" },
    { id: "work", label: "Research" },
    { id: "pubs", label: "Publications" },
    { id: "talks", label: "Talks" },
    { id: "code", label: "Code" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between px-4 sm:px-5 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Telescope className="h-4 w-4 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">
                  {PROFILE.name}
                </div>
                <div className="text-[11px] text-white/50 hidden sm:block">
                  {PROFILE.availability}
                </div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className="rounded-xl px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                >
                  {it.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE.links.cv}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                <FileText className="h-4 w-4" />
                CV
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-3 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center brightness-90"
      style={{ backgroundImage: "url('/galaxy.webp')" }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/60" />

      {/* ambient gradients (above overlay, below content) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-32 -left-24 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0)_55%)]" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <MapPin className="h-3.5 w-3.5" />
              {PROFILE.location}
              <span className="mx-1 text-white/30">•</span>
              {PROFILE.availability}
            </div>

            <h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight text-white">
              {PROFILE.name}
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              {PROFILE.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>JWST</Pill>
              <Pill>Galactic Bulge</Pill>
              <Pill>Near-IR spectroscopy</Pill>
              <Pill>Bayesian inference</Pill>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
              >
                Explore research
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.links.orcid}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                ORCID
                <ArrowUpRight className="h-4 w-4 opacity-70" />
              </a>
              <a
                href={PROFILE.links.ads}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                ADS
                <ArrowUpRight className="h-4 w-4 opacity-70" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl shadow-[0_20px_60px_-28px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Now
                  </div>
                  <div className="text-sm text-white/60">
                    Selected highlights
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-9 w-9 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <h.icon className="h-4.5 w-4.5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {h.title}
                        </div>
                        <div className="mt-1 text-sm text-white/65 leading-relaxed">
                          {h.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-white/50">
                  Tip: replace the content blocks with your details.
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  Contact
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <p className="text-white/75 leading-relaxed">
              I am an astrophysicist working on the Milky Way and star-forming environments.
              My research combines near-IR spectroscopy, multi-wavelength data integration,
              and Bayesian inference to extract physical insight from complex, high-extinction
              regions.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              I build robust analysis pipelines (Python/Astropy) and focus on reproducible
              results, clear documentation, and publication-quality visualization.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>INAF / OAR</Pill>
              <Pill>JWST</Pill>
              <Pill>VVVX</Pill>
              <Pill>KMOS</Pill>
              <Pill>Roman</Pill>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="text-sm font-semibold text-white">Quick links</div>
            <div className="mt-4 grid gap-3">
              <External href={PROFILE.links.cv}>
                <FileText className="h-4 w-4" />
                <span className="ml-1">Curriculum Vitae</span>
              </External>
              <External href={PROFILE.links.orcid}>
                <BookOpen className="h-4 w-4" />
                <span className="ml-1">ORCID</span>
              </External>
              <External href={PROFILE.links.ads}>
                <BookOpen className="h-4 w-4" />
                <span className="ml-1">NASA ADS</span>
              </External>
              <External href={PROFILE.links.github}>
                <Github className="h-4 w-4" />
                <span className="ml-1">GitHub</span>
              </External>
              <External href={PROFILE.links.linkedin}>
                <Linkedin className="h-4 w-4" />
                <span className="ml-1">LinkedIn</span>
              </External>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section id="work" eyebrow="Selected" title="Research & projects">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((p) => (
          <motion.a
            key={p.title}
            href={p.href}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-[0_20px_60px_-28px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {p.kind} • {p.year}
                </div>
                <div className="mt-2 text-lg font-semibold text-white group-hover:text-white transition">
                  {p.title}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/50 group-hover:text-white transition" />
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {p.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6">
        <div className="flex items-center gap-2 text-white/80">
          <Search className="h-4 w-4" />
          <span className="text-sm">
            Want a “Projects” page with filtering and detailed case studies? I can extend
            this into a multi-page site.
          </span>
        </div>
      </div>
    </Section>
  );
}

function Publications() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PUBLICATIONS;
    return PUBLICATIONS.filter((p) =>
      [p.title, p.venue, p.authors, p.year].some((x) =>
        String(x).toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <Section id="pubs" eyebrow="Outputs" title="Publications">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-white/70">
            Add links to arXiv/DOI/ADS; keep it short and scannable.
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search publications"
              className="w-full sm:w-72 rounded-2xl border border-white/10 bg-black/30 pl-9 pr-3 py-2 text-sm text-white/80 placeholder:text-white/35 outline-none focus:ring-2 focus:ring-white/10"
            />
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {filtered.map((p) => (
            <a
              key={`${p.year}-${p.title}`}
              href={p.href}
              className="group rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                    {p.year} • {p.venue}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    {p.authors}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white transition" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-sm text-white/70">
          <External href={PROFILE.links.ads}>
            View full list on ADS
          </External>
        </div>
      </div>
    </Section>
  );
}

function TalksSection() {
  return (
    <Section id="talks" eyebrow="Visibility" title="Talks & outreach">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white">
              <Mic className="h-4 w-4" />
              <span className="text-sm font-semibold">Recent & upcoming</span>
            </div>

            <div className="mt-4 grid gap-3">
              {TALKS.map((t) => (
                <a
                  key={`${t.date}-${t.title}`}
                  href={t.href}
                  className="group rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/10 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                        {t.date}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        {t.title}
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        {t.where}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white transition" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">What I can offer</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                Seminars on JWST diagnostics, extinction correction strategies, and shock modeling.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                Hands-on workshops for reproducible analysis pipelines and publication figures.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                Outreach sessions on the Milky Way and infrared astronomy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CodeSection() {
  return (
    <Section id="code" eyebrow="Reproducibility" title="Software & data">
      <div className="grid gap-5 md:grid-cols-2">
        {SOFTWARE.map((s) => (
          <a
            key={s.title}
            href={s.href}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-white">
                <Code2 className="h-4 w-4" />
                <div className="text-sm font-semibold">{s.title}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white transition" />
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-7 rounded-3xl border border-white/10 bg-black/20 p-6">
        <div className="text-sm text-white/70">
          If you want, I can add: a “Resources” page (datasets, scripts, notebooks), a
          BibTeX export, and a mini blog for updates.
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Let’s talk" title="Contact">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="text-sm text-white/70 leading-relaxed">
              The fastest way to reach me is by email. If you include a short summary of
              your goal + timeline + relevant links, I can respond more efficiently.
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.links.linkedin}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4 opacity-70" />
              </a>
              <a
                href={PROFILE.links.github}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="text-sm font-semibold text-white">Footer note</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Consider adding: a headshot, a short “Press/Media” section, and a simple
              license statement for code/data.
            </p>
            <div className="mt-5 text-xs text-white/45">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopNav />

      <main>
        <Hero />

        <div className="space-y-16 pb-20">
          <About />
          <Research />
          <Publications />
          <TalksSection />
          <CodeSection />
          <Contact />
        </div>
      </main>

      {/* subtle grain */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')",
        }}
      />
    </div>
  );
}
