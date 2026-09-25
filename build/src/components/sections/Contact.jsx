import './Contact.css';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const CONTACT_OPTIONS = [
  {
    id: 'email',
    Icon: Mail,
    title: SITE_CONFIG.socials.mail?.replace('mailto:', ''),
    subtitle: 'Quick inquiries & questions',
    href: SITE_CONFIG.socials.mail,
  },
  {
    id: 'github',
    Icon: Github,
    title: 'GitHub',
    subtitle: 'Code and project updates',
    href: SITE_CONFIG.socials.github,
  },
  {
    id: 'linkedin',
    Icon: Linkedin,
    title: 'LinkedIn',
    subtitle: 'Professional connection',
    href: SITE_CONFIG.socials.linkedin,
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-label">Let&apos;s Work Together</h2>

        <div className="contact__grid">
          <div className="contact__card">
            <h3 className="contact__card-title">Get in Touch</h3>
            <p className="contact__card-subtitle">
              Choose your preferred method and let&apos;s discuss your project.
            </p>

            <div className="contact__options">
              {CONTACT_OPTIONS.map(({ id, Icon, title, subtitle, href }) => {
                const OptionIcon = Icon;
                return (
                  <a
                    key={id}
                    href={href}
                    className="contact__option"
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact__option-icon">
                      <OptionIcon size={15} />
                    </div>
                    <div className="contact__option-text">
                      <span className="contact__option-title">{title}</span>
                      <span className="contact__option-sub">{subtitle}</span>
                    </div>
                    <ArrowUpRight size={12} className="contact__option-arrow" />
                  </a>
                );
              })}
            </div>

            <div className="contact__status">
              <div className="contact__status-item">
                <span className="contact__status-dot" />
                <span>Replies within 24 hours</span>
              </div>
              <div className="contact__status-item">
                <span className="contact__status-dot" />
                <span>Open to remote, freelance &amp; full-time</span>
              </div>
            </div>
          </div>

          <div className="contact__card">
            <h3 className="contact__card-title">Open to opportunities</h3>
            <p className="contact__card-subtitle">
              Internships, freelance, and collab projects. Let&apos;s build something together.
            </p>
            <a
              href={SITE_CONFIG.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="form-submit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              View Resume
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
