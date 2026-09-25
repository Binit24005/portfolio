import { useState } from 'react';
import { Mail, Check, Twitter, Linkedin, Github, Globe } from 'lucide-react';
import profilePic from '../../images/profile.png';
import { SITE_CONFIG } from '../../data/config';
import './Hero.css';

const socials = [
  { icon: Twitter, href: SITE_CONFIG.socials.twitter || SITE_CONFIG.socials.x, label: 'Twitter' },
  { icon: Github, href: SITE_CONFIG.socials.github, label: 'GitHub' },
  { icon: Globe, href: SITE_CONFIG.socials.resume, label: 'Website' },
  { icon: Mail, href: SITE_CONFIG.socials.mail, label: 'Email' },
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = SITE_CONFIG.socials.mail?.replace('mailto:', '') || '';
  const location = SITE_CONFIG.profile?.location || 'Odisha, India';
  const pronouns = SITE_CONFIG.profile?.pronouns || 'he/him';

  const handleCopy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="hero section">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__identity">
            <div className="hero__avatar" aria-label={`${SITE_CONFIG.name} profile photo`}>
              <img src={profilePic} alt={SITE_CONFIG.name} className="hero__avatar-image" />
            </div>
            <div className="hero__name-block">
              <h1 className="hero__name">{SITE_CONFIG.name}</h1>
              <p className="hero__subtitle">{SITE_CONFIG.role}</p>
            </div>
          </div>

          <div className="hero__meta-row">
            <div className="hero__meta-item">
              <span className="hero__meta-label">LOCATION</span>
              <span className="hero__meta-value">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {location}
              </span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">EMAIL</span>
              <span className="hero__meta-value">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                <button type="button" onClick={handleCopy} className="hero__email-button">
                  {copied ? <Check size={12} /> : <Mail size={12} />}
                  {email}
                </button>
              </span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">PRONOUNS</span>
              <span className="hero__meta-value">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {pronouns}
              </span>
            </div>
          </div>

          <div className="hero__bio">
            <p>{SITE_CONFIG.description}</p>
            <p>
              Currently working with <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>LangChain</strong>.
            </p>
          </div>

          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span className="hero__status-label">Last played</span>
            <span className="hero__status-sep">—</span>
            <span className="hero__status-track">Spotify</span>
          </div>

          <div className="hero__socials">
            {socials.map(({ href, label }) => {
              const SocialIcon =
                label === 'Twitter' ? Twitter :
                label === 'GitHub' ? Github :
                label === 'Website' ? Globe :
                label === 'LinkedIn' ? Linkedin :
                Mail;

              return (
              <a
                key={label}
                href={href}
                className="hero__social-link"
                aria-label={label}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <SocialIcon size={18} />
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
