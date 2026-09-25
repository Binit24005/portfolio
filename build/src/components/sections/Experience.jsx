import './Experience.css';
import { SITE_CONFIG } from '../../data/config';

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-label">Experience</h2>
        <div className="experience__list">
          {SITE_CONFIG.experience.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="exp-item">
              <div className="exp-item__dot-col">
                <span className={`exp-item__dot${index === 0 ? ' exp-item__dot--active' : ''}`} />
                <span className="exp-item__line" />
              </div>
              <div className="exp-item__body">
                <div className="exp-item__header">
                  <div className="exp-item__title-block">
                    <span className="exp-item__title">{item.role}</span>
                    <span className="exp-item__sep">·</span>
                    <span className="exp-item__company">{item.company}</span>
                  </div>
                  <span className="exp-item__dates">{item.date}</span>
                </div>
                <p className="exp-item__location">{item.location}</p>
                {item.description && (
                  <p className="exp-item__desc">{item.description}</p>
                )}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="exp-item__bullets">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="exp-item__bullet">
                        <span className="exp-item__bullet-dot">·</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="exp-item__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
