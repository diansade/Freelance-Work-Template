import { useEffect, useRef, useState } from 'react';

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px', ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return {
    ref,
    className: isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
  };
}
