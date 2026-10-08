import { Transition } from '~/components/transition';
import { useTheme } from '~/components/theme-provider';
import { useHydrated } from '~/hooks/useHydrated';
import { cssProps, media } from '~/utils/style';
import profileImg from '~/assets/profile.jpg';
import profileImgLarge from '~/assets/profile-large.jpg';
import styles from './profile-card.module.css';

export function ProfileCard({ visible }) {
  const { theme } = useTheme();
  const isHydrated = useHydrated();

  return (
    <Transition in={visible} timeout={0}>
      {({ status, nodeRef }) => (
        <div
          className={styles.cardContainer}
          data-status={status}
          data-theme={theme}
          ref={nodeRef}
        >
          <div className={styles.glassCard}>
            <div className={styles.cardInner}>
              <div className={styles.imageWrapper}>
                {isHydrated && (
                  <img
                    className={styles.profileImage}
                    srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                    sizes={`(max-width: ${media.mobile}px) 200px, 280px`}
                    alt="Don Michael Ombisi"
                    loading="lazy"
                  />
                )}
                <div className={styles.glow} />
                <div className={styles.shine} />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.nameBadge}>Software Engineer</div>
                <div className={styles.locationBadge}>Nairobi, Kenya</div>
              </div>
            </div>
            <div className={styles.floatingOrbs}>
              <div className={styles.orb} style={cssProps({ delay: '0s' })} />
              <div className={styles.orb} style={cssProps({ delay: '1s' })} />
              <div className={styles.orb} style={cssProps({ delay: '2s' })} />
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
