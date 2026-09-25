import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../../data/config";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-label">Featured Projects</h2>

        {/* Projects Grid */}
        <div className="projects__grid">
          {SITE_CONFIG.projects.map((project) => {
            const liveDemoLink = project.liveDemoLink || project.link;

            return (
              <article
                key={project.id}
                className="project-card"
              >
                {/* Project Image */}
                <div className="project-card__preview">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                </div>

                {/* Project Body */}
                <div className="project-card__body">
                  {/* Project Header */}
                  <div className="project-card__header">
                    <h3 className="project-card__title">
                      {project.title}
                    </h3>

                    {/* Live Project Icon */}
                    {liveDemoLink && (
                      <a
                        href={liveDemoLink}
                        className="project-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live project`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="project-card__desc">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="project-card__tags">
                    {(project.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                      >
                        <span className="project-tag__dot" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-card__actions">
                    {/* Live Demo */}
                    {liveDemoLink && (
                      <a
                        href={liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__btn project-card__btn--primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {/* View Project */}
                    <Link
                      to={`/project/${project.id}`}
                      className="project-card__btn project-card__btn--secondary"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

