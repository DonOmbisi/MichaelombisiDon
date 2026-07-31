import host3TextureLarge from '~/assets/host3-large.jpg';
import host3TexturePlaceholder from '~/assets/host3-placeholder.jpg';
import host3Texture from '~/assets/host3.jpg';
import aura3TextureLarge from '~/assets/aura3-large.jpg';
import aura3TexturePlaceholder from '~/assets/aura3-placeholder.jpg';
import aura3Texture from '~/assets/aura3.jpg';
import aquaHorizonTextureLarge from '~/assets/aqua-horizon-large.jpg';
import aquaHorizonTexturePlaceholder from '~/assets/aqua-horizon-placeholder.jpg';
import aquaHorizonTexture from '~/assets/aqua-horizon.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full Stack Developer + AI & Analytics',
    description: `Portfolio of ${config.name} — Full Stack Developer specializing in scalable applications, cybersecurity, data science, and financial analytics.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Host3 - Web3 Hosting Platform"
        description="Decentralized hosting platform built with React, Solidity, and IPFS enabling 99.8% uptime file storage"
        buttonText="View project"
        buttonLink="/projects.host3"
        model={{
          type: 'laptop',
          alt: 'Host3 Web3 Platform',
          textures: [
            {
              srcSet: `${host3Texture} 800w, ${host3TextureLarge} 1920w`,
              placeholder: host3TexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Aura3.0 - AI Therapist"
        description="Autonomous AI therapist powered by NLP and emotional intelligence with blockchain privacy"
        buttonText="View project"
        buttonLink="/projects.aura3"
        model={{
          type: 'phone',
          alt: 'Aura3.0 AI Interface',
          textures: [
            {
              srcSet: `${aura3Texture} 375w, ${aura3TextureLarge} 750w`,
              placeholder: aura3TexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Aqua-Horizon - Citizen Science"
        description="Water quality monitoring platform enabling community-driven environmental reporting and analysis"
        buttonText="View project"
        buttonLink="/projects.aqua-horizon"
        model={{
          type: 'laptop',
          alt: 'Aqua-Horizon Dashboard',
          textures: [
            {
              srcSet: `${aquaHorizonTexture} 800w, ${aquaHorizonTextureLarge} 1920w`,
              placeholder: aquaHorizonTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
