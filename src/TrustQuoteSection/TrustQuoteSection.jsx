// src/components/TrustQuoteSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "./TrustQuoteSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLightbulb as faLightbulbSolid,
} from "@fortawesome/free-solid-svg-icons";

const TrustQuoteSection = () => {
  const ref = useRef(null);
  const observerRef = useRef(null); // <- track the observer instance
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observerRef.current.disconnect(); // stop observing once triggered
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(ref.current);

    return () => observerRef.current?.disconnect();
  }, [visible]);

  return (
    <section className="quote-section" ref={ref}>
      <div className={`quote-box ${visible ? "animate" : ""}`}>
        <h2>
          WE BRING YOUR HOME <FontAwesomeIcon icon={faHome} /> IMPROVEMENT IDEAS
          <FontAwesomeIcon icon={faLightbulbSolid} /> TO LIFE
        </h2>
      </div>
    </section>
  );
};

export default TrustQuoteSection;
