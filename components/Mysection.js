import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";

export default function Mysection({
  image,
  headline,
  scrollTo,
  goToSectionRef,
  showArrow,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  return (
    <div className={styles.section} ref={sectionRef}>
      <div className={styles.copy}>
        <h2 ref={headlineRef}>{headline}</h2>
      </div>
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
