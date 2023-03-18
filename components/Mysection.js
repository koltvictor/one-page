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
  showContacts,
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
            src={`https://i.imgur.com/WyHQ3Ku.png`}
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
      {showContacts && (
        <div className={styles.contactsContainer}>
          <div className={styles.contacts}>
            <a href={`mailto:milo@kwwellness.community`}>
              <img
                src="https://i.imgur.com/e3rkSJE.png"
                alt="Milo"
                className={styles.aboutImg}
              />
            </a>
            <p>
              <strong>Milo Miloscia</strong>
            </p>
            <p>Co-Chief Experience Officer</p>
            <p>email: milo@kwwellness.community</p>
          </div>
          <div className={styles.contacts}>
            <a href={`mailto:kimberly@kwwellness.community`}>
              <img
                src="https://i.imgur.com/zuH0abj.png"
                alt="Kimberly"
                className={styles.aboutImg}
              />
            </a>
            <p>
              <strong>Kimberly Guiry</strong>
            </p>
            <p>Co-Chief Experience Officer</p>
            <p>email: kimberly@kwwellness.community</p>
          </div>
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
