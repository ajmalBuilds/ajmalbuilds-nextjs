import { useState, useEffect } from "react";

export const useInView = (
    ref,
    options = { threshold: 0.1, rootMargin: '0px' }
) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: options.rootMargin,
                threshold: options.threshold,
            }
        );

        const currentRef = ref.current;
        if ( currentRef ) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };

    },[ref, options.threshold, options.rootMargin]);

    return isInView;
}
