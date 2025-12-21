import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import styles from './experience.module.css';

const experiences = [
  {
    title: 'FullStack Developer',
    company: 'Safaridesk',
    location: 'Nairobi, Kenya',
    period: 'Nov 2025 - Present',
    responsibilities: [
      'Resolving Critical bugs in the Notifications Engine/Module',
      'Maintaining and optimizing backend performance',
      'Collaborating with cross-functional teams on feature development'
    ]
  },
  {
    title: 'N8N & Backend Developer',
    company: 'Power Values',
    location: 'Nairobi County, Kenya',
    period: 'Oct 2025 - Nov 2025',
    responsibilities: [
      'Expanded n8n workflow to handle dynamic, subscription-aware form generation',
      'Designed a small approval UI using Next.js for streamlined workflow management',
      'Built a modular chatbot interface with toggle functionality between AI coaches'
    ]
  },
  {
    title: 'IT Administrator',
    company: 'Kenyariri & Associates',
    location: 'Nairobi, Kenya',
    period: 'April 2025 - July 2025',
    responsibilities: [
      'Implemented and configured POS systems to streamline transactions',
      'Built a custom web app for case management and client services',
      'Trained and supported staff for smooth system adoption'
    ]
  },
  {
    title: 'Data Science Intern',
    company: 'Intel Indexer LLC',
    location: 'Remote',
    period: 'Oct 2024 - March 2025',
    responsibilities: [
      'Built a supervised ML model for stock prediction (87% accuracy)',
      'Developed LSTM models with TensorFlow for time series forecasting',
      'Created interactive D3.js dashboards for financial insights'
    ]
  },
  {
    title: 'Systems Developer',
    company: 'PostBank',
    location: 'Nairobi, Kenya',
    period: 'April 2024 - September 2024',
    responsibilities: [
      'Developed, Redesigned and optimized the Helpdesk Ticketing System, reducing resolution time by 40%',
      'Upgraded network infrastructure across 3 offices, boosting connectivity by 25%',
      'Automated system backups with Python, reducing manual effort by 85%'
    ]
  },
  {
    title: 'Android Developer',
    company: 'FreeCopy Pvt. Ltd',
    location: 'Remote',
    period: 'Jan 2024 - April 2024',
    responsibilities: [
      'Migrated the backend to Firebase, reducing latency by 35%',
      'Improved UI/UX for mobile apps, increasing engagement by 28%',
      'Delivered features on time in agile development sprints'
    ]
  },
  {
    title: 'ICT Officer',
    company: 'National Treasury',
    location: 'Nairobi, Kenya',
    period: 'April 2023 - October 2023',
    responsibilities: [
      'Developed a file management system that cut document retrieval time by 60%',
      'Implemented network security enhancements, decreasing vulnerability incidents by 75%',
      'Built an automated user access system for streamlined onboarding'
    ]
  },
  {
    title: 'Android and ML Developer',
    company: 'Muito Incorporation',
    location: 'Remote',
    period: 'Jan 2023 - April 2023',
    responsibilities: [
      'Co-developed a location-based app with 5,000+ downloads',
      'Implemented facial detection (92% accuracy) and OCR algorithms',
      'Collaborated on cross-platform development with a 6-person team'
    ]
  }
];

const ExperienceCard = ({ experience, index }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <Heading level={3} className={styles.title}>
        {experience.title}
      </Heading>
      <Text className={styles.company}>{experience.company}</Text>
      <Text className={styles.period}>
        {experience.period} • {experience.location}
      </Text>
    </div>
    <ul className={styles.responsibilities}>
      {experience.responsibilities.map((resp, idx) => (
        <li key={idx} className={styles.responsibility}>
          <Text>{resp}</Text>
        </li>
      ))}
    </ul>
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
            A journey through software engineering, data science, and cybersecurity roles
            across various industries and technologies.
          </Text>
        </div>
        
        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <Transition key={index} in timeout={{ enter: 300 * index }}>
              {({ visible, nodeRef }) => (
                <div ref={nodeRef} className={styles.item} data-visible={visible}>
                  <ExperienceCard experience={experience} index={index} />
                </div>
              )}
            </Transition>
          ))}
        </div>
        
        <div className={styles.cta}>
          <Button secondary href="/contact">
            Get in touch
          </Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
