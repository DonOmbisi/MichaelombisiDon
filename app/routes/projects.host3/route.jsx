import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import host3TextureLarge from '~/assets/host3-large.jpg';
import host3TexturePlaceholder from '~/assets/host3-placeholder.jpg';
import host3Texture from '~/assets/host3.jpg';
import styles from './host3.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Host3 - Web3 Hosting Platform',
    description: 'Decentralized hosting platform built with React, Solidity, and IPFS enabling 99.8% uptime file storage',
    preview: host3Texture,
  });
};

const ProjectHeader = () => (
  <>
    <Heading level={1} className={styles.title}>
      Host3
    </Heading>
    <Text className={styles.description} size="l">
      Web3-based hosting platform built with React, Solidity, and IPFS that enables
      decentralized file storage and hosting with 99.8% uptime.
    </Text>
  </>
);

const ProjectDetails = () => (
  <Fragment>
    <Text className={styles.details}>
      Host3 revolutionizes web hosting by leveraging blockchain technology and decentralized storage.
      Built with a modern tech stack including React for the frontend, Solidity smart contracts for
      backend logic, and IPFS for distributed file storage.
    </Text>
    <Text className={styles.details}>
      The platform achieves 99.8% uptime through its decentralized architecture, eliminating single
      points of failure and ensuring content remains accessible even if individual nodes go offline.
      Users can deploy static websites, store files, and manage their digital assets with enhanced
      security and censorship resistance.
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
        <Text className={styles.techItem}>TypeScript</Text>
        <Text className={styles.techItem}>Web3.js</Text>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>Backend</Text>
        <Text className={styles.techItem}>Solidity</Text>
        <Text className={styles.techItem}>IPFS</Text>
        <Text className={styles.techItem}>Ethereum</Text>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.categoryTitle}>DevOps</Text>
        <Text className={styles.techItem}>Docker</Text>
        <Text className={styles.techItem}>Hardhat</Text>
        <Text className={styles.techItem}>Ganache</Text>
      </div>
    </div>
  </div>
);

export default function Host3Project() {
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
              placeholder={host3TexturePlaceholder}
              srcSet={`${host3Texture} 800w, ${host3TextureLarge} 1920w`}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, 800px"
              alt="Host3 Web3 Platform Dashboard"
            />
          </div>
        </div>
        
        <div className={styles.details}>
          <ProjectDetails />
          <TechStack />
        </div>
        
        <div className={styles.cta}>
          <Button secondary href="http://host3-blond.vercel.app">
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
