import { useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";

export default function Mysection({
  image,
  headline,
  showHeadline,
  showText,
  scrollTo,
  goToSectionRef,
  showArrow,
  pdf,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();

  const pdfClick = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div className={styles.section} ref={sectionRef}>
      {showHeadline ? (
        <div className={styles.copy}>
          <h2 ref={headlineRef}>{headline}</h2>
        </div>
      ) : (
        <div>
          <img
            src={`https://i.imgur.com/4y5pgQO.png`}
            alt={`KW Wellness Logo `}
            className={styles.logo}
          />
        </div>
      )}
      {showText && (
        <div className={styles.text}>
          <a onClick={pdfClick}>CIVANA June 20-23, 2023</a>
        </div>
      )}
      <Image src={image} layout={`fill`} />
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
  );
}
