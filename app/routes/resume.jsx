import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { contact, education, professionalSummary } from '~/data/portfolio';
import { baseMeta } from '~/utils/meta';
import styles from '~/styles/resume.module.css';

const RESUME_PATH = '/Don_Michael_Ombisi_Resume.pdf';

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
            {professionalSummary}
          </Text>
        </div>

        <div className={styles.resumeContainer}>
          <div className={styles.summary}>
            <Text size="s" className={styles.summaryLine}>
              <strong>Education:</strong> {education.degree} — {education.institution},{' '}
              {education.location}
            </Text>
            <Text size="s" className={styles.summaryLine}>
              <strong>Contact:</strong> {contact.email} · {contact.phone}
            </Text>
          </div>

          <div className={styles.actions}>
            <Button
              secondary
              href={RESUME_PATH}
              download="Don_Michael_Ombisi_Resume.pdf"
              target="_blank"
            >
              Download PDF
            </Button>
            <Button href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
              Open in New Tab
            </Button>
          </div>

          <div className={styles.preview}>
            <object
              className={styles.pdfViewer}
              data={RESUME_PATH}
              type="application/pdf"
              aria-label="Resume PDF preview"
            >
              <Text className={styles.previewText}>
                Your browser does not support inline PDF preview. Use the download button above.
              </Text>
            </object>
          </div>
        </div>

        <div className={styles.contact}>
          <Text className={styles.contactText}>
            Interested in connecting? Reach out through the contact page.
          </Text>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
