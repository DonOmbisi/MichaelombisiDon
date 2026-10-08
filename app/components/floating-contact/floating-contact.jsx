import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import { Link } from '~/components/link';
import { Transition } from '~/components/transition';
import { cssProps } from '~/utils/style';
import { tokens } from '~/components/theme-provider/theme';
import styles from './floating-contact.module.css';

export const FloatingContact = () => {
  const { theme } = useTheme();

  return (
    <Transition in timeout={0}>
      {({ status, nodeRef }) => (
        <div
          className={styles.container}
          data-status={status}
          data-theme={theme}
          ref={nodeRef}
        >
          <Link
            secondary
            className={styles.button}
            href="/contact"
            aria-label="Contact"
            style={cssProps({
              delay: tokens.base.durationL,
            })}
          >
            <Icon className={styles.icon} icon="send" />
            <span className={styles.text}>Contact</span>
          </Link>
        </div>
      )}
    </Transition>
  );
};
