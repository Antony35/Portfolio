import { useRef, useEffect, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function useIntersectionObserver(
  options: IntersectionObserverOptions = {},
  triggerOnce: boolean = true
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (triggerOnce) {
            // "Once only" mode - stays true once viewed
            if (entry.isIntersecting && !hasBeenSeen) {
              setIsIntersecting(true);
              setHasBeenSeen(true);
              // Optional: Stop observing once seen
              observer.unobserve(target);
            }
          } else {
            // Normal mode - tracks visibility in real time
            setIsIntersecting(entry.isIntersecting);
          }
          setIntersectionRatio(entry.intersectionRatio);
        });
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [options.root, options.rootMargin, options.threshold, triggerOnce, hasBeenSeen]);

  return { targetRef, isIntersecting, intersectionRatio, hasBeenSeen };
}