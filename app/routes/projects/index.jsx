import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { OptimizedImage } from '~/components/optimized-image/optimized-image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import styles from '~/styles/projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects - Don Michael Ombisi',
    description: 'Explore my portfolio of innovative projects in web3, AI, machine learning, and more',
  });
};

const projects = [
  {
    title: 'Host3',
    description: 'Web3-based hosting platform built with React, Solidity, and IPFS that enables decentralized file storage and hosting with 99.8% uptime.',
    link: 'http://host3-blond.vercel.app',
    image: '/host3-project.jpg',
    webpImage: '/host3-project.webp',
    tags: ['Web3', 'React', 'Solidity', 'IPFS'],
  },
  {
    title: 'Aura3.0',
    description: 'An autonomous AI therapist powered by advanced NLP and emotional intelligence, providing personalized mental health support while ensuring privacy through blockchain technology.',
    link: 'https://therapist-agent.vercel.app/',
    image: '/aura3-project.jpg',
    webpImage: '/aura3-project.webp',
    tags: ['AI', 'NLP', 'Blockchain', 'Healthcare'],
  },
  {
    title: 'Aqua-Horizon',
    description: 'Citizen science platform that enables users to monitor, report, and discuss water quality issues in their communities.',
    link: 'https://github.com/DonOmbisi/aqua/releases/download/v1.0/app-release.apk',
    image: '/aqua-horizon-project.jpg',
    webpImage: '/aqua-horizon-project.webp',
    tags: ['Environment', 'Citizen Science', 'React', 'Data Visualization'],
  },
  {
    title: 'Flood-Analyzer',
    description: 'A comprehensive flood risk assessment system that uses machine learning to predict and analyze flood patterns for better disaster preparedness.',
    link: 'https://flood-analyzer.vercel.app/',
    image: '/flood-analyzer-project.jpg',
    webpImage: '/flood-analyzer-project.webp',
    tags: ['Machine Learning', 'Data Science', 'Environmental', 'Risk Assessment'],
  },
  {
    title: 'Drug-research',
    description: 'A drug discovery and protein-binding prediction tool built with the latest in machine learning and natural language processing (NLP) technology.',
    link: 'https://drugresearch-zeta.vercel.app/',
    image: '/drug-research-project.jpg',
    webpImage: '/drug-research-project.webp',
    tags: ['Machine Learning', 'NLP', 'Bioinformatics', 'Drug Discovery'],
  },
  {
    title: 'ThreadcraftAI',
    description: 'AI-powered content generation tool utilizing GPT models and React that helps users create engaging social media threads with 40% higher engagement rates.',
    link: 'http://threadcraftai-kappa.vercel.app',
    image: '/threadcraftai-project.jpg',
    webpImage: '/threadcraftai-project.webp',
    tags: ['AI', 'GPT', 'React', 'Content Generation'],
  },
  {
    title: 'Lingua-Speak',
    description: 'Real-time language translation application built with Next.js and TensorFlow that supports 20+ languages with 95% translation accuracy.',
    link: 'https://lingua-speak.vercel.app/',
    image: '/lingua-speak-project.jpg',
    webpImage: '/lingua-speak-project.webp',
    tags: ['Translation', 'Next.js', 'TensorFlow', 'AI'],
  },
  {
    title: 'LiveDocs',
    description: 'Real-time collaborative text editor using WebSockets and React that allows multiple users to edit documents simultaneously with conflict resolution.',
    link: 'https://livedocs.vercel.app/',
    image: '/livedocs-project.jpg',
    webpImage: '/livedocs-project.webp',
    tags: ['WebSockets', 'React', 'Collaboration', 'Real-time'],
  },
  {
    title: 'AidRoute',
    description: 'AI-powered humanitarian logistics platform that combines blockchain transparency with autonomous decision-making to revolutionize global aid delivery.',
    link: 'https://aidroute-frontend.onrender.com/',
    image: '/aidroute-project.jpg',
    webpImage: '/aidroute-project.webp',
    tags: ['AI', 'Blockchain', 'Logistics', 'Humanitarian'],
  },
  {
    title: 'Safariverse',
    description: 'Immersive 3D platform bridging cultures through African geography and community, offering virtual cultural experiences and educational content.',
    link: 'https://africa-blond-alpha.vercel.app/',
    image: '/safariverse-project.jpg',
    webpImage: '/safariverse-project.webp',
    tags: ['3D', 'Virtual Reality', 'Culture', 'Education'],
  },
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} className={styles.title}>
            Projects
          </Heading>
          <Text className={styles.description} size="l">
            Explore my portfolio of innovative projects spanning web3, artificial intelligence, 
            machine learning, and more. Each project represents a unique solution to real-world challenges.
          </Text>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <OptimizedImage
                  src={project.image}
                  webpSrc={project.webpImage}
                  alt={`${project.title} project preview`}
                  className={styles.projectImg}
                  width={400}
                  height={220}
                  priority={index < 3}
                />
              </div>
              <div className={styles.projectContent}>
                <Heading level={3} className={styles.projectTitle}>
                  {project.title}
                </Heading>
                <Text className={styles.projectDescription}>
                  {project.description}
                </Text>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.projectActions}>
                  {project.link !== '#' ? (
                    <Button 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button>
                  ) : (
                    <Button secondary disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Text className={styles.footerText}>
            Interested in collaborating or learning more about these projects?
          </Text>
          <Button href="/contact">
            Get in Touch
          </Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
