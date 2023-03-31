import { useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";
import KWLogo from "@/public/images/rasterKW.svg";
import List from "./List";

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
  showAbout,
  showLink,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  const pdfClick = () => {
    window.open(pdf, "_blank");
  };
  return (
    <div className={styles.section} ref={sectionRef}>
      {showHeadline ? (
        <div className={styles.copy} id="section2">
          <h2 ref={headlineRef}>{headline}</h2>
        </div>
      ) : (
        <div className="relative h-96 w-full">
          <Image
            src={KWLogo}
            alt={`KW Wellness Logo `}
            className={styles.logo}
            onClick={() => scrollTo(goToSectionRef)}
            priority={true}
            width="154"
            height="82"
          />
        </div>
      )}
      {showText && (
        <div className={styles.li} id="section3">
          <a onClick={pdfClick}>
            <li>CIVANA June 20-23, 2023</li>
          </a>
          <br />
          <a>
            <li>Company Event in August</li>
          </a>
          <br />
          <a>
            <li>Las Vegas End of Year Event</li>
          </a>
          <br />
          <a>
            <li>Costa Rica - Spring 2024</li>
          </a>
          <br />
          <a>
            <li>Portugal - Summer 2024</li>
          </a>
        </div>
      )}
      {/* <List showText={showText} pdf={pdf} /> */}
      {showContacts && (
        <div className={styles.contactsContainer} id="section4">
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
            <p>
              Co-Chief
              <br /> Experience Officer
            </p>
            <p>email: milo@kwwellness.community</p>
          </div>
          <hr />
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
            <p>
              Co-Chief
              <br /> Experience Officer
            </p>
            <p>email: kimberly@kwwellness.community</p>
          </div>
        </div>
      )}
      {showAbout && (
        <div className={styles.aboutContainer} id="section2">
          <div className={styles.about}>
            <p>
              <strong>It's a proven fact:</strong> Investing in wellness yields
              major returns. Through education, training, and events,{" "}
              <strong>KW Wellness</strong> offers you opportunities to invest in
              meaningful experiences and build powerful practices that lead to
              greater health and well-being, and result in a shared Return on
              Wellness (ROW). Wellness is a universal term that has a personal
              meaning. An umbrella community, <strong>KW Wellness</strong>{" "}
              supports other communities that have a shared mission and vision
              of supporting well-being.{" "}
            </p>
          </div>
        </div>
      )}
      {showLink && (
        <div className={styles.aboutContainer}>
          <p className={styles.about}>
            Click{" "}
            <a
              href="https://communities.kw.com/community/kw-wellness/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to learn more about KW Wellness and join the community!
          </p>
        </div>
      )}
      <Image src={image} priority fill alt={image} />
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
  );
}
