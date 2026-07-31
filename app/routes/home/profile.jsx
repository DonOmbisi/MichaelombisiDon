import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';
import { skills, stats } from '~/data/portfolio';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Don Michael Ombisi, a Full Stack Developer based in Nairobi, Kenya. I build scalable
      applications, implement cybersecurity solutions, and develop machine learning models across
      fintech, government, and enterprise environments. Explore my{' '}
      <Link href="/projects">projects</Link>, <Link href="/experience">experience</Link>, or{' '}
      <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My work spans AI analytics, quantitative finance, quantum computing, and Web3. I placed 4th at
      the AT4D Hackathon with USD 1,000 in funding and hold certifications from Cisco, IBM, and
      HackerRank. Open to collaboration — <Link href="/contact">reach out</Link> anytime.
    </Text>

    <div className={styles.statsContainer} data-visible={visible}>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{stats.projects}+</div>
        <div className={styles.statLabel}>Projects</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{stats.roles}</div>
        <div className={styles.statLabel}>Roles</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{stats.certifications}</div>
        <div className={styles.statLabel}>Certifications</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{stats.funded}</div>
        <div className={styles.statLabel}>Funded</div>
      </div>
    </div>
  </Fragment>
);

const SkillsSection = ({ visible }) => (
  <div className={styles.skillsSection} data-visible={visible}>
    <Heading level={4} className={styles.skillsTitle}>Technical Expertise</Heading>
    <div className={styles.skillsGrid}>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className={styles.skillCategory}>
          <div className={styles.skillCategoryTitle}>
            {category.replace('_', ' & ').toUpperCase()}
          </div>
          <div className={styles.skillItems}>
            {items.map(skill => (
              <span key={skill} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <SkillsSection visible={visible} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Don Michael Ombisi - Software Engineer"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
