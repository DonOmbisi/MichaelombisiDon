import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import styles from '~/styles/resume.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Resume - Don Michael Ombisi',
    description: 'Download and view the complete resume of Don Michael Ombisi',
  });
};

export default function Resume() {
  return (
    <div className={styles.resume}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} className={styles.title}>
            Resume
          </Heading>
          <Text className={styles.description} size="l">
            Full professional resume available for download and viewing
          </Text>
        </div>

        <div className={styles.resumeContainer}>
          <div className={styles.actions}>
            <Button 
              secondary 
              href="/Don Michael Ombisi - Resume.pdf" 
              download="Don-Michael-Ombisi-Resume.pdf"
              target="_blank"
            >
              Download Resume
            </Button>
            <Button 
              href="/Don Michael Ombisi - Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              View in New Tab
            </Button>
          </div>

          <div className={styles.preview}>
            <Text className={styles.previewText} size="s">
              Click "View in New Tab" to see the full resume or download it for offline viewing.
            </Text>
          </div>
        </div>

        <div className={styles.contact}>
          <Text className={styles.contactText}>
            Interested in connecting? Feel free to reach out through the contact page.
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
