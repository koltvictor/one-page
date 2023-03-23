import { useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";
import Nav from "react-bootstrap/Nav";
// import About from "/components/About.jsx";

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
  showNav,
  showAbout,
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
        <div>
          <img
            src={`/images/rasterKW.svg`}
            alt={`KW Wellness Logo `}
            className={styles.logo}
          />
        </div>
      )}
      {showText && (
        <div className={styles.text} id="section3">
          <a onClick={pdfClick}>
            <li>CIVANA June 20-23, 2023</li>
          </a>
          <a>
            <li>Some event in August</li>
          </a>
          <a>
            <li>Some other event this year</li>
          </a>
          <a>
            <li>This other thing</li>
          </a>
          <a>
            <li>Look out for this thing next year!</li>
          </a>
        </div>
      )}
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
      {showNav && (
        <div className={styles.nav}>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="#section2">about</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#section3">events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#section4">contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )}
      {showAbout && (
        <div className={styles.aboutContainer} id="section2">
          <div className={styles.about}>
            <p>
              It's a proven fact: Investing in wellness yields major returns.
              Through education, training, and events,{" "}
              <strong>KW Wellness</strong> offers you opportunities to invest in
              meaningful experiences and build powerful practices that lead to
              greater health and well-being, and result in a shared Return on
              Wellness (ROW). Wellness is a universal term that has a personal
              meaning. An umbrella community,
              <strong>KW Wellness</strong> supports other communities that have
              a shared mission and vision of supporting well-being.{" "}
            </p>
            <p>
              As a <strong>KW Wellness</strong> community member, you'll have
              access to learning series, retreats, social events, and a full
              suite of resources to support your mental, emotional, and physical
              health. As a market center leader, you’ll learn strategies for
              integrating wellness into your retention and recruiting efforts
              that provide a high Return on Investment in Wellness (ROIw) and
              support a thriving team.
            </p>
          </div>
        </div>
        // <About />
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
