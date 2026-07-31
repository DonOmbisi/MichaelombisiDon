import { classes } from '~/utils/style';
import styles from './project-banner.module.css';

export const ProjectBanner = ({ title, category = 'default', className }) => {
  const categoryClass = styles[category] || styles.default;

  return (
    <div
      className={classes(styles.banner, categoryClass, className)}
      role="img"
      aria-label={`${title} project banner`}
    >
      <span className={styles.categoryLabel}>{category.replace('-', ' ')}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
