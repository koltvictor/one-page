import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";

export default function Mysection({
  image,
  headline,
  showHeadline,
  scrollTo,
  goToSectionRef,
  showArrow,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  return (
    <div className={styles.section} ref={sectionRef}>
      {/* <div className={styles.copy}>
        <h2 ref={headlineRef}>{headline}</h2>
      </div> */}
      {showHeadline ? (
        <div className={styles.copy}>
          {" "}
          <h2 ref={headlineRef}>{headline}</h2>{" "}
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
