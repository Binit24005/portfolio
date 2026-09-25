import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from 'lucide-react';

import { SITE_CONFIG } from '../../data/config';
import profilePic from '../../images/profile.png';
import FileExplorer from '../layout/FileExplorer';
import ReadmeWrapper from '../layout/ReadmeWrapper';
import SecondHeader from '../layout/SecondHeader';

const socialLinks = [
  { icon: Twitter, href: SITE_CONFIG.socials.twitter || SITE_CONFIG.socials.x, label: 'Twitter' },
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: SITE_CONFIG.socials.github, label: 'GitHub' },
  { icon: Youtube, href: SITE_CONFIG.socials.youtube, label: 'YouTube' },
  { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: 'Instagram' },
  { icon: Mail, href: SITE_CONFIG.socials.mail, label: 'Email' },
];

const renderIcon = (label) => {
  if (label === 'Twitter') return <Twitter size={16} />;
  if (label === 'LinkedIn') return <Linkedin size={16} />;
  if (label === 'GitHub') return <Github size={16} />;
  if (label === 'YouTube') return <Youtube size={16} />;
  if (label === 'Instagram') return <Instagram size={16} />;
  return <Mail size={16} />;
};

const techStack = [
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  ...SITE_CONFIG.projects.flatMap((project) => project.tags || []),
];

const uniqueTechStack = [...new Set(techStack)].slice(0, 12);

const Home = () => {
  return (
    <main className="px-4 pb-12 pt-4">
      <div className="mx-auto max-w-[1216px]">
        <SecondHeader />
        <FileExplorer />

        <div className="mt-6">
          <ReadmeWrapper>
            <div id="readme-header" className="space-y-12">
              <section className="grid gap-8 md:grid-cols-[180px_1fr] md:items-start">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/20">
                    <img
                      src={profilePic}
                      alt={`${SITE_CONFIG.name} profile`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Available
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Open to building products, landing pages, and practical frontend work.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                    README.md
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground/70">
                      builder / maker / full-stack
                    </p>
                    <h1 className="mt-3 font-[Neuton] text-5xl leading-[0.9] tracking-[-0.05em] text-foreground md:text-7xl">
                      {SITE_CONFIG.name}
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                      {SITE_CONFIG.role}
                    </p>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                      {SITE_CONFIG.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={SITE_CONFIG.socials.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
                    >
                      View Resume
                      <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.mail}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
                    >
                      Email Me
                      <Mail size={16} />
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                      <MapPin size={14} />
                      India
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Current role: {SITE_CONFIG.experience[0]?.role}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                      Latest project: {SITE_CONFIG.projects[0]?.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map(({ href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                      >
                        {renderIcon(label)}
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <section id="about" className="space-y-4 border-t border-white/10 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">About</h2>
                <p className="max-w-4xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  I build full-stack web products end-to-end, with a bias toward useful features,
                  simple interfaces, and systems that feel reliable in real use.
                </p>
                <p className="max-w-4xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  My current focus is shipping AI-powered tools, production-ready backend flows,
                  and frontends that stay clean even when the product gets ambitious.
                </p>
              </section>

              <section id="skills" className="space-y-4 border-t border-white/10 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {uniqueTechStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section id="projects" className="space-y-5 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      Featured Projects
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                      A few selected builds that show the kind of work I like shipping.
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground/60">
                    {SITE_CONFIG.projects.length} selected builds
                  </span>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {SITE_CONFIG.projects.map((project) => (
                    <article
                      key={project.id}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/20">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4 p-5">
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-foreground">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
                          >
                            Live Demo
                            <ArrowUpRight size={16} />
                          </a>
                          <Link
                            to={`/project/${project.id}`}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
                          >
                            View Details
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="experience" className="space-y-5 border-t border-white/10 pt-8">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                    A quick look at the roles and work that shaped the portfolio so far.
                  </p>
                </div>

                <div className="space-y-3">
                  {SITE_CONFIG.experience.map((item) => (
                    <article
                      key={`${item.company}-${item.role}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">
                            {item.company}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.role}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>{item.date}</p>
                          <p>{item.location}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="contact" className="space-y-5 border-t border-white/10 pt-8">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                    If you want to collaborate, build, or just chat about product and frontend work,
                    the fastest way to reach me is email.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.socials.mail}
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
                  >
                    {SITE_CONFIG.socials.mail?.replace('mailto:', '')}
                    <Mail size={16} />
                  </a>
                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
                  >
                    LinkedIn
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </section>
            </div>
          </ReadmeWrapper>
        </div>
      </div>
    </main>
  );
};

export default Home;
