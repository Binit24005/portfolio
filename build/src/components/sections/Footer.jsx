import React from 'react';
import { Github, Linkedin, Mail, Twitter, Youtube, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const socials = [
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

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10 font-inter">
      <div className="mx-auto flex max-w-[1216px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            {SITE_CONFIG.name} · {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Built with your data, a repo-style layout, and the same cat cursor.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label }) => (
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
    </footer>
  );
};

export default Footer;
