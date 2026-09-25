import { SITE_CONFIG } from '../data/config';

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-label">About</h1>
        <p style={{ maxWidth: '760px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
          {SITE_CONFIG.description}
        </p>
      </div>
    </section>
  );
}
