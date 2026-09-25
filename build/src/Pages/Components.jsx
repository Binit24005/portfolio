import { SITE_CONFIG } from '../data/config';

const COMPONENT_EXAMPLES = [
  { id: 'tag-react', label: 'React' },
  { id: 'tag-node', label: 'Node.js' },
  { id: 'tag-ts', label: 'TypeScript' },
  { id: 'tag-tailwind', label: 'Tailwind CSS' },
];

export default function Components() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-label">Components</h1>
        <p style={{ maxWidth: '760px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          A small set of tags and building blocks used across the portfolio for {SITE_CONFIG.name}.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {COMPONENT_EXAMPLES.map((item) => (
            <span
              key={item.id}
              style={{
                padding: '8px 14px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-muted)',
                fontSize: '12px',
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
