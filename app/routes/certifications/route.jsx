import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { certifications } from '~/data/portfolio';
import styles from './certifications.module.css';

const categories = [...new Set(certifications.map(cert => cert.category))];

const categoryIcons = {
  'Cybersecurity': '🛡️',
  'Networking': '🌐',
  'AI/ML': '🧠',
  'Programming': '💻',
  'Database': '🗄️',
  'Web Development': '🕸️',
  'Software Development': '⚙️',
  'Office Productivity': '📊',
  'Data Science': '📈',
  'Quantum Computing': '⚛️'
};

const CertificationCard = ({ certification }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <Heading level={4} className={styles.certTitle}>
        {certification.title}
      </Heading>
      <Text className={styles.issuer}>{certification.issuer}</Text>
    </div>
    <div className={styles.cardFooter}>
      <span className={styles.categoryBadge}>
        <span className={styles.categoryIcon}>{categoryIcons[certification.category] || '🎓'}</span>
        {certification.category}
      </span>
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
            programming, and networking from Cisco, IBM, HackerRank, and WorldQuant University.
          </Text>
        </div>

        <div className={styles.categories}>
          {categories.map((category, index) => {
            const categoryCerts = certifications.filter(cert => cert.category === category);
            return (
              <Transition key={category} in timeout={{ enter: Math.min(200 * index, 800) }}>
                {({ visible, nodeRef }) => (
                  <div ref={nodeRef} className={styles.categorySection} data-visible={visible}>
                    <div className={styles.categoryHeader}>
                      <Heading level={3} className={styles.categoryTitle}>
                        <span className={styles.categoryIconHeader}>{categoryIcons[category] || '🎓'}</span>
                        {category}
                      </Heading>
                      <span className={styles.certCount}>{categoryCerts.length} Credential{categoryCerts.length !== 1 ? 's' : ''}</span>
                    </div>
                    
                    <div className={styles.certGrid}>
                      {categoryCerts.map((cert, certIndex) => (
                        <Transition key={cert.title} in timeout={{ enter: 100 * certIndex }}>
                          {({ visible: certVisible, nodeRef: certNodeRef }) => (
                            <div
                              ref={certNodeRef}
                              className={styles.certItem}
                              data-visible={certVisible}
                            >
                              <CertificationCard certification={cert} />
                            </div>
                          )}
                        </Transition>
                      ))}
                    </div>
                  </div>
                )}
              </Transition>
            );
          })}
        </div>

        <div className={styles.cta}>
          <Button secondary href="/achievements">
            View achievements
          </Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
