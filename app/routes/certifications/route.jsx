import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import styles from './certifications.module.css';

const certifications = [
  {
    title: 'Ethical Hacker Certification',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    year: '2024'
  },
  {
    title: 'Junior Cybersecurity Analyst',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    year: '2024'
  },
  {
    title: 'Cyber Threat Management',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    year: '2024'
  },
  {
    title: 'Network Defense',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    year: '2024'
  },
  {
    title: 'AI Solutions on Cisco Infrastructure Essentials',
    issuer: 'Cisco',
    category: 'AI/ML',
    year: '2024'
  },
  {
    title: 'Applied Data Science Lab',
    issuer: 'WorldQuant University',
    category: 'Data Science',
    year: '2024'
  },
  {
    title: 'Quantum Computing - Basics of Quantum Information',
    issuer: 'IBM',
    category: 'Quantum Computing',
    year: '2024'
  },
  {
    title: 'Quantum Business Foundations',
    issuer: 'IBM',
    category: 'Quantum Computing',
    year: '2024'
  },
  {
    title: 'Java Programming',
    issuer: 'Oracle',
    category: 'Programming',
    year: '2024'
  },
  {
    title: 'Golang Development',
    issuer: 'Go',
    category: 'Programming',
    year: '2024'
  },
  {
    title: 'JavaScript Advanced',
    issuer: 'JavaScript',
    category: 'Programming',
    year: '2024'
  },
  {
    title: 'SQL Advanced',
    issuer: 'SQL',
    category: 'Database',
    year: '2024'
  },
  {
    title: 'Frontend Developer',
    issuer: 'Frontend',
    category: 'Web Development',
    year: '2024'
  },
  {
    title: 'Software Engineer',
    issuer: 'Software Engineering',
    category: 'Software Development',
    year: '2024'
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    category: 'Networking',
    year: '2024'
  },
  {
    title: 'Network Devices and Configurations',
    issuer: 'Cisco',
    category: 'Networking',
    year: '2024'
  },
  {
    title: 'Microsoft Office Specialist',
    issuer: 'ICDL Africa',
    category: 'Office Productivity',
    year: '2023'
  }
];

const categories = [...new Set(certifications.map(cert => cert.category))];

const CertificationCard = ({ certification, index }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <Heading level={4} className={styles.certTitle}>
        {certification.title}
      </Heading>
      <Text className={styles.issuer}>{certification.issuer}</Text>
    </div>
    <div className={styles.cardFooter}>
      <span className={styles.category}>{certification.category}</span>
      <span className={styles.year}>{certification.year}</span>
    </div>
  </div>
);

export default function Certifications() {
  return (
    <div className={styles.certifications}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} className={styles.title}>
            Certifications & Credentials
          </Heading>
          <Text className={styles.description} size="l">
            Professional certifications spanning cybersecurity, data science, quantum computing,
            and software development from industry-leading organizations.
          </Text>
        </div>
        
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <Transition key={category} in timeout={{ enter: 200 * index }}>
              {({ visible, nodeRef }) => (
                <div ref={nodeRef} className={styles.categorySection} data-visible={visible}>
                  <Heading level={3} className={styles.categoryTitle}>
                    {category}
                  </Heading>
                  <div className={styles.certGrid}>
                    {certifications
                      .filter(cert => cert.category === category)
                      .map((cert, certIndex) => (
                        <Transition key={certIndex} in timeout={{ enter: 100 * certIndex }}>
                          {({ visible: certVisible, nodeRef: certNodeRef }) => (
                            <div
                              ref={certNodeRef}
                              className={styles.certItem}
                              data-visible={certVisible}
                            >
                              <CertificationCard certification={cert} index={certIndex} />
                            </div>
                          )}
                        </Transition>
                      ))}
                  </div>
                </div>
              )}
            </Transition>
          ))}
        </div>
        
        <div className={styles.cta}>
          <Button secondary href="/contact">
            Discuss my qualifications
          </Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
