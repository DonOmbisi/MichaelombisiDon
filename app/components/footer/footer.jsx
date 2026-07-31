import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import { contact } from '~/data/portfolio';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <div className={styles.socials}>
      <Link secondary className={styles.link} href={`mailto:${contact.email}`}>
        Email
      </Link>
      <Link secondary className={styles.link} href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </Link>
      <Link secondary className={styles.link} href="https://github.com/donombisi" target="_blank" rel="noopener noreferrer">
        GitHub
      </Link>
    </div>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Crafted by yours truly
      </Link>
    </Text>
  </footer>
);
