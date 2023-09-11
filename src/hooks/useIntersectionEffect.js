import { useEffect } from "react";

export default function useIntersectionEffect(targetRef, options, onIntersect) {
  useEffect(
    function subscribeToIntersectionObserver() {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(targetRef.current);

      function callback(entries) {
        const { isIntersecting } = entries[0];
        if (!isIntersecting) return;

        onIntersect();
      }

      return function cleanupObserver() {
        observer.disconnect();
      };
    },
    [targetRef, onIntersect, options],
  );
}
