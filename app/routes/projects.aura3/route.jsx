import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import aura3TextureLarge from '~/assets/aura3-large.jpg';
import aura3TexturePlaceholder from '~/assets/aura3-placeholder.jpg';
import aura3Texture from '~/assets/aura3.jpg';
import styles from './aura3.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Aura3.0 - AI Therapist',
    description: 'Autonomous AI therapist powered by NLP and emotional intelligence with blockchain privacy',
    preview: aura3Texture,
  });
};

const ProjectHeader = () => (
  <>
    <Heading level={1} className={styles.title}>
      Aura3.0
    </Heading>
    <Text className={styles.description} size="l">
      An autonomous AI therapist powered by advanced NLP and emotional intelligence,
      providing personalized mental health support while ensuring privacy through blockchain technology.
    </Text>
  </>
);

const ProjectDetails = () => (
  <Fragment>
    <Text className={styles.details}>
      Aura3.0 represents a breakthrough in mental health technology, combining cutting-edge AI with
      blockchain security to create a truly private and effective therapeutic experience. The system
      uses advanced natural language processing to understand emotional states and provide personalized
      responses.
    </Text>
    <Text className={styles.details}>
      What sets Aura3.0 apart is its integration with blockchain technology for privacy preservation.
      All conversations are encrypted and stored on a decentralized network, ensuring complete anonymity
      and data sovereignty for users. The AI learns continuously while maintaining strict privacy standards.
    </Text>
  </Fragment>
);

const TechStack = () => (
  <div className={styles.techStack}>
    <Heading level={3} className={styles.techTitle}>Technology Stack</Heading>
    <div className={styles.techGrid}>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>AI/ML</Text>
        <Text className={styles.techItem}>TensorFlow</Text>
        <Text className={styles.techItem}>NLP Models</Text>
        <Text className={styles.techItem}>Sentiment Analysis</Text>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>Frontend</Text>
        <Text className={styles.techItem}>React.js</Text>
        <Text className={styles.techItem}>TypeScript</Text>
        <Text className={styles.techItem}>WebGL</Text>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>Blockchain</Text>
        <Text className={styles.techItem}>Solidity</Text>
        <Text className={styles.techItem}>IPFS</Text>
        <Text className={styles.techItem}>Smart Contracts</Text>
      </div>
    </div>
  </div>
);

export default function Aura3Project() {
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
              placeholder={aura3TexturePlaceholder}
              srcSet={`${aura3Texture} 375w, ${aura3TextureLarge} 750w`}
              width={750}
              height={1334}
              sizes="(max-width: 768px) 100vw, 375px"
              alt="Aura3.0 AI Interface"
            />
          </div>
        </div>
        
        <div className={styles.details}>
          <ProjectDetails />
          <TechStack />
        </div>
        
        <div className={styles.cta}>
          <Button secondary href="https://therapist-agent.vercel.app/">
            View Live Project
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
