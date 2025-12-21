import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import aquaHorizonTextureLarge from '~/assets/aqua-horizon-large.jpg';
import aquaHorizonTexturePlaceholder from '~/assets/aqua-horizon-placeholder.jpg';
import aquaHorizonTexture from '~/assets/aqua-horizon.jpg';
import styles from './aqua-horizon.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Aqua-Horizon - Citizen Science',
    description: 'Water quality monitoring platform enabling community-driven environmental reporting and analysis',
    preview: aquaHorizonTexture,
  });
};

const ProjectHeader = () => (
  <>
    <Heading level={1} className={styles.title}>
      Aqua-Horizon
    </Heading>
    <Text className={styles.description} size="l">
      Citizen science platform that enables users to monitor, report, and discuss
      water quality issues in their communities.
    </Text>
  </>
);

const ProjectDetails = () => (
  <Fragment>
    <Text className={styles.details}>
      Aqua-Horizon empowers communities to take control of their water quality monitoring through
      an intuitive citizen science platform. Users can report water quality issues, upload photos,
      and contribute to a comprehensive database of water conditions across different regions.
    </Text>
    <Text className={styles.details}>
      The platform features real-time data visualization, community discussion forums, and integration
      with environmental agencies. Machine learning algorithms help identify patterns and predict
      potential water quality issues before they become critical, enabling proactive environmental
      protection measures.
    </Text>
  </Fragment>
);

const TechStack = () => (
  <div className={styles.techStack}>
    <Heading level={3} className={styles.techTitle}>Technology Stack</Heading>
    <div className={styles.techGrid}>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>Frontend</Text>
        <Text className={styles.techItem}>React.js</Text>
        <Text className={styles.techItem}>D3.js</Text>
        <Text className={styles.techItem}>Mapbox</Text>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>Backend</Text>
        <Text className={styles.techItem}>Node.js</Text>
        <Text className={styles.techItem}>Express</Text>
        <Text className={styles.techItem}>MongoDB</Text>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>Data Science</Text>
        <Text className={styles.techItem}>Python</Text>
        <Text className={styles.techItem}>TensorFlow</Text>
        <Text className={styles.techItem}>Pandas</Text>
      </div>
    </div>
  </div>
);

export default function AquaHorizonProject() {
  return (
    <div className={styles.project}>
      <Section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.header}>
            <ProjectHeader />
          </div>
          <div className={styles.image}>
            <Image
              reveal
              delay={100}
              placeholder={aquaHorizonTexturePlaceholder}
              srcSet={`${aquaHorizonTexture} 800w, ${aquaHorizonTextureLarge} 1920w`}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, 800px"
              alt="Aqua-Horizon Dashboard"
            />
          </div>
        </div>
        
        <div className={styles.details}>
          <ProjectDetails />
          <TechStack />
        </div>
        
        <div className={styles.cta}>
          <Button secondary href="https://github.com/DonOmbisi/aqua/releases/download/v1.0/app-release.apk">
            Download APK
          </Button>
          <Button href="https://github.com/donombisi">
            View on GitHub
          </Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
