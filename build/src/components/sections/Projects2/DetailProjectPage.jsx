import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../../data/config';
import { ArrowLeft } from 'lucide-react';

const SectionHeading = ({ children }) => (
  <h2
    style={{
      fontFamily: "'Neuton', 'Georgia', serif",
      fontSize: 'clamp(24px, 3vw, 36px)',
      fontWeight: 700,
      color: 'var(--text)',
      lineHeight: 1.2,
      marginBottom: '20px',
    }}
  >
    {children}
  </h2>
);

const Body = ({ children, style = {} }) => (
  <p
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      color: '#d4d4d8',
      lineHeight: 1.85,
      ...style,
    }}
  >
    {children}
  </p>
);

const BulletList = ({ items }) => (
  <ul
    style={{
      listStyle: 'disc',
      paddingLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}
  >
    {items.map((item, i) => (
      <li
        key={i}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#d4d4d8',
          lineHeight: 1.75,
        }}
      >
        {item}
      </li>
    ))}
  </ul>
);

const ImgPlaceholder = ({
  label = 'Image coming soon',
  ratio = '16/9',
}) => (
  <div
    style={{
      width: '100%',
      aspectRatio: ratio,
      background: 'var(--surface)',
      border: '1px dashed var(--border-hover)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#d4d4d8',
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '0.05em',
    }}
  >
    {label}
  </div>
);

const DetailProjectPage = ({ products }) => {
  if (!products) return null;

  const currentIndex = SITE_CONFIG.projects.findIndex(
    (p) => p.id === products.id
  );

  const nextProject =
    SITE_CONFIG.projects[
      (currentIndex + 1) % SITE_CONFIG.projects.length
    ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        backgroundImage: `
          linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        color: 'var(--text)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* BACK BUTTON */}
      <div
        style={{
          paddingTop: '100px',
          paddingLeft: '40px',
          paddingBottom: '8px',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: '#d4d4d8',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          <ArrowLeft size={14} />
          BACK
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <article
        style={{
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px 80px',
          boxSizing: 'border-box',
        }}
      >
        {/* TITLE */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '24px',
            marginTop: '24px',
          }}
        >
          <h1
            style={{
              fontFamily: "'Neuton', 'Georgia', serif",
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {products.title}
          </h1>
        </div>

        {/* TAGS */}
        {products.tags?.length > 0 && (
          <div
            style={{
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <p
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              {products.tags.join(' · ')}
            </p>
          </div>
        )}

        {/* HERO IMAGE */}
        <div style={{ marginBottom: '64px' }}>
          {products.img ? (
            <img
              src={products.img}
              alt={products.title}
              style={{
                width: '100%',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          ) : (
            <ImgPlaceholder
              label="Hero image — coming soon"
              ratio="16/9"
            />
          )}
        </div>

        {/* BACKGROUND */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeading>Background</SectionHeading>

          <Body>
            {products.overview || products.description}
          </Body>
        </section>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid var(--border)',
            marginBottom: '56px',
          }}
        />

        {/* PROBLEM STATEMENT */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeading>Problem Statement</SectionHeading>

          {products.features?.length > 0 && (
            <>
              <Body style={{ marginBottom: '20px' }}>
                {products.description}
              </Body>

              <BulletList items={products.features} />
            </>
          )}
        </section>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid var(--border)',
            marginBottom: '56px',
          }}
        />

        {/* CHALLENGES */}
        {products.challenges?.length > 0 && (
          <>
            <section style={{ marginBottom: '56px' }}>
              <SectionHeading>Challenges</SectionHeading>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                {products.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '32px 1fr',
                      gap: '16px',
                      alignItems: 'start',
                    }}
                  >
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border-hover)',
                        borderRadius: '50%',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#d4d4d8',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                      }}
                    >
                      {i + 1}
                    </span>

                    <Body style={{ margin: 0 }}>
                      {challenge}
                    </Body>
                  </div>
                ))}
              </div>
            </section>

            <hr
              style={{
                border: 'none',
                borderTop: '1px solid var(--border)',
                marginBottom: '56px',
              }}
            />
          </>
        )}

        {/* TECH STACK */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeading>Tech Stack</SectionHeading>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '16px',
            }}
          >
            {products.techstack?.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '6px 14px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        {/* GALLERY */}
{products.images?.length > 0 && (
  <section style={{ marginBottom: '56px' }}>
    <SectionHeading>Gallery</SectionHeading>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {products.images
        .filter((src) => src !== products.img)
        .map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Screenshot ${i + 1}`}
            style={{
              width: '100%',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              display: 'block',
            }}
          />
        ))}
    </div>
  </section>
)}

        {/* ACTION BUTTONS */}
       {/* ACTION BUTTONS */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '80px',
    flexWrap: 'wrap',
  }}
>
  {products.liveDemoLink && (
    <a
      href={products.liveDemoLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        padding: '11px 22px',
        background: 'var(--text)',
        color: 'var(--bg)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        textDecoration: 'none',
        borderRadius: '6px',
        border: '1px solid var(--text)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxSizing: 'border-box',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.85';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      Live Demo <span aria-hidden="true">↗</span>
    </a>
  )}

  {products.sourceCodeLink && (
    <a
      href={products.sourceCodeLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        padding: '11px 22px',
        background: 'transparent',
        color: 'var(--text)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        textDecoration: 'none',
        borderRadius: '6px',
        border: '1px solid var(--border-hover)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxSizing: 'border-box',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--surface)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      Source Code <span aria-hidden="true">↗</span>
    </a>
  )}
</div>
        {/* UP NEXT */}
        {nextProject && (
          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '48px',
            }}
          >
            <p
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-subtle)',
                marginBottom: '16px',
              }}
            >
              Up Next
            </p>

            <Link
              to={`/project/${nextProject.id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Neuton', serif",
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  transition: 'color 0.2s ease',
                  margin: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                {nextProject.title} →
              </h3>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
};

export default DetailProjectPage;

