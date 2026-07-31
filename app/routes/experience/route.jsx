import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { experiences } from '~/data/portfolio';
import styles from './experience.module.css';

const ExperienceCard = ({ experience }) => (
  <div 
    className={styles.card}
    style={{ '--exp-color': experience.color || 'var(--primary)' }}
  >
    <div className={styles.cardHeader}>
      <Heading level={3} className={styles.title}>
        {experience.title}
      </Heading>
      <Text className={styles.company}>{experience.company}</Text>
      <Text className={styles.period}>
        {experience.period} • {experience.location}
      </Text>
    </div>
    
    <ul className={styles.responsibilities}>
      {experience.responsibilities.map(resp => (
        <li key={resp} className={styles.responsibility}>
          <Text>{resp}</Text>
        </li>
      ))}
    </ul>

    {experience.tech && experience.tech.length > 0 && (
      <div className={styles.techStack}>
        {experience.tech.map(tech => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default function Experience() {
  return (
    <div className={styles.experience}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} className={styles.title}>
            Professional Experience
          </Heading>
          <Text className={styles.description} size="l">
            Roles across AI analytics, financial engineering, full-stack development, cybersecurity,
            and systems engineering in fintech, government, and enterprise environments.
          </Text>
        </div>

        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <Transition key={`${experience.company}-${experience.period}`} in timeout={{ enter: Math.min(300 * index, 1200) }}>
              {({ visible, nodeRef }) => (
                <div 
                  ref={nodeRef} 
                  className={styles.item} 
                  data-visible={visible}
                  style={{ '--exp-color': experience.color || 'var(--primary)' }}
                >
                  <ExperienceCard experience={experience} />
                </div>
              )}
            </Transition>
          ))}
        </div>

        <div className={styles.cta}>
          <Button secondary href="/resume">
            View full resume
          </Button>
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
