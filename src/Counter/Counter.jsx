import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";
const Counter = ({ end, subtitle, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef();
  const hasAnimatedRef = useRef(false);

  const animateCount = () => {
    let start = 0;
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          animateCount();
          hasAnimatedRef.current = true;
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [end, duration]);

  return (
    <div className="counter-box" ref={elementRef}>
      <h2 className="counter-number">{count}</h2>
      <p className="counter-subtitle">{subtitle}</p>
    </div>
  );
};

export default Counter;
