import { useState, useRef, useEffect } from 'react';
import { classes } from '~/utils/style';
import styles from './optimized-image.module.css';

export const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  className, 
  width = 800, 
  height = 400,
  loading = 'lazy',
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const generateSrcSet = (baseSrc) => {
    const sizes = [400, 800, 1200];
    return sizes
      .map(size => `${baseSrc.replace(/\.(jpg|webp)$/, `-${size}.$1`)} ${size}w`)
      .join(', ');
  };

  return (
    <div 
      ref={imgRef} 
      className={classes(styles.container, className)}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className={styles.skeleton} />
      )}
      
      {/* Actual image */}
      {isInView && (
        <picture>
          {webpSrc && (
            <source
              srcSet={generateSrcSet(webpSrc)}
              type="image/webp"
            />
          )}
          <img
            src={src}
            srcSet={generateSrcSet(src)}
            alt={alt}
            loading={priority ? 'eager' : loading}
            onLoad={handleLoad}
            className={classes(styles.image, isLoaded && styles.loaded)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={width}
            height={height}
          />
        </picture>
      )}
    </div>
  );
};
