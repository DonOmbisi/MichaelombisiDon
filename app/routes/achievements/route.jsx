import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { achievements } from '~/data/portfolio';
import { baseMeta } from '~/utils/meta';
import styles from './achievements.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Achievements - Don Michael Ombisi',
    description: 'Hackathon wins, funding milestones, and notable accomplishments.',
  });
};

export default function Achievements() {
  return (
    <div className={styles.achievements}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} className={styles.title}>
            Achievements
          </Heading>
          <Text className={styles.description} size="l">
            Recognition from hackathons, competitions, and collaborative projects that pushed
            technical boundaries.
          </Text>
        </div>

        <div className={styles.grid}>
          {achievements.map((achievement, index) => (
            <Transition key={achievement.title} in timeout={{ enter: 200 * index }}>
              {({ visible, nodeRef }) => (
                <article
                  ref={nodeRef}
                  className={achievement.image ? styles.heroCard : styles.card}
                  data-visible={visible}
                  aria-labelledby={`achievement-${index}`}
                >
                  {achievement.image && (
                    <div className={styles.heroImageContainer}>
                      <img src={achievement.image} alt={achievement.title} className={styles.heroImage} loading="lazy" />
                      <div className={styles.heroOverlay}></div>
                    </div>
                  )}
                  
                  <div className={achievement.image ? styles.heroContent : styles.cardContent}>
                    <div className={styles.metaHeader}>
                      <div className={styles.cardBadge}>
                        {achievement.icon} {achievement.category}
                      </div>
                      <div className={styles.cardHighlight}>{achievement.highlight}</div>
                    </div>
                    
                    <Heading level={achievement.image ? 2 : 3} className={styles.cardTitle} id={`achievement-${index}`}>
                      {achievement.title}
                    </Heading>
                    
                    <Text className={styles.organization}>{achievement.organization}</Text>
                    <Text className={styles.year}>{achievement.year}</Text>
                    
                    <Text className={styles.description}>{achievement.description}</Text>
                    
                    {achievement.impact && (
                      <div className={styles.impact}>
                        <strong>Impact:</strong> {achievement.impact}
                      </div>
                    )}
                  </div>
                </article>
              )}
            </Transition>
          ))}
        </div>

        <div className={styles.cta}>
          <Button secondary href="/projects">
            Explore projects
          </Button>
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
