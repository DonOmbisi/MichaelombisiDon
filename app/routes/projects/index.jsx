import { useState } from 'react';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { ProjectBanner } from '~/components/project-banner';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { projectSections } from '~/data/portfolio';
import { baseMeta } from '~/utils/meta';
import styles from '~/styles/projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects - Don Michael Ombisi',
    description:
      'Portfolio spanning Web3, AI, quantitative finance, quantum computing, and systems research.',
  });
};

const ProjectCard = ({ project }) => (
  <article className={styles.projectCard}>
    <div className={styles.projectImage}>
      <ProjectBanner title={project.title} category={project.category} />
    </div>
    <div className={styles.projectContent}>
      <Heading level={3} className={styles.projectTitle}>
        {project.title}
      </Heading>
      <Text className={styles.projectDescription}>{project.description}</Text>
      <div className={styles.projectTags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.projectActions}>
        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </div>
    </div>
  </article>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = Array.from(
    new Set(
      projectSections.flatMap(section => section.projects.flatMap(project => project.tags))
    )
  ).sort();

  return (
    <div className={styles.projects}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} className={styles.title}>
            Projects
          </Heading>
          <Text className={styles.description} size="l">
            From production web applications to quantitative finance pipelines and quantum
            algorithms — each project solves a distinct real-world problem.
          </Text>
        </div>

        {projectSections.map(section => (
          <section key={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
            <div className={styles.sectionHero}>
              <img src={section.heroImage} alt={section.title} className={styles.heroImg} loading="lazy" />
              <div 
                className={styles.sectionHeroOverlay}
                style={{ '--accent-color': section.accentColor }}
              >
                <div className={styles.sectionHeroContent}>
                  <Heading level={2} className={styles.sectionTitle} id={`${section.id}-title`}>
                    {section.title}
                  </Heading>
                  <Text className={styles.sectionDescription}>{section.description}</Text>
                </div>
              </div>
            </div>

            <div className={styles.projectGrid}>
              {section.projects.map(project => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        ))}

        <div className={styles.footer}>
          <Text className={styles.footerText}>
            Interested in collaborating or learning more about these projects?
          </Text>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
